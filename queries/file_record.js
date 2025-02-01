const db = require('../db/dbConfig.js');

const getAllUploadedFiles = async () => {
    try{
        const fileList = await db.any("SELECT * FROM file_record");
        return fileList;
    } catch(err){
        return err;
    }
}

const getSingleUploadedFile = async (fileName) => {
    try{
        const singleFile = await db.one("SELECT * FROM file_record WHERE file_name = $1", [fileName]);
        return singleFile;
    } catch(err){
        return err;
    }
}

const createNewFileRecord = async (item) => {
    const { fileName } = item;

    try{
        const newRecord = await db.one("INSERT INTO file_record (file_name) VALUES ($1) RETURNING *", [fileName]);
        return newRecord;
    } catch(err){
        return err;
    }
} 
module.exports = {
    getAllUploadedFiles,
    getSingleUploadedFile,
    createNewFileRecord
}