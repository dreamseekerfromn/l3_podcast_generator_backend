const express = require("express");
const uploads = express.Router();
const { getAllUploadedFiles, getSingleUploadedFile, createNewFileRecord } = require("../queries/file_record.js");

uploads.get("/", async (req, res) => {

})

uploads.get("/:id", async (req, res) => {
    const { id } = req.params;

    //ToDo

    if(){
        res.status(200);
    } else {
        res.status(404);
    }
})

uploads.post("/", async (req, res) => {})