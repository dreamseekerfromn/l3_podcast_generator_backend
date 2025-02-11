const express = require("express");
const uploads = express.Router();
const { getAllUploadedFiles, getSingleUploadedFile, createNewFileRecord } = require("../queries/file_record.js");

uploads.get("/", async (req, res) => {
    let fileList = getAllUploadedFiles();

    if(fileList.length > 0){
        res.status(200).json({ success: true, data: { payload: [...fileList] } });
    } else {
        res.status(400).json({ error: "No file list"});
    }
})

uploads.get("/:id", async (req, res) => {
    const { id } = req.params;

    //ToDo
    let fileRecord = getSingleUploadedFile(id);

    if(fileRecord){
        res.cookie('isDownload', 'complete', {
            maxAge: 10000,
        });
        res.setHeader('content-disposition', 'complete');
        return res.download(`/upload/${fileRecord.file_name}`, (err) => {
            console.log("error : ", err)
        });
    } else {
        res.status(404);
    }
})

uploads.post("/", async (req, res) => {
    const { id } = req.params;
    try{
        let fileRecord = await createNewFileRecord(id);
        console.log(fileRecord);
    } catch(err){
        res.status(400).json({error: err});
    }
})