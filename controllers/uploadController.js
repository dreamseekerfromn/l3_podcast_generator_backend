const express = require("express");
const uploads = express.Router();
const { getAllUploadedFiles, getSingleUploadedFile, createNewFileRecord } = require("../queries/file_record.js");

uploads.get("/", async (req, res) => {

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

uploads.post("/", async (req, res) => {})