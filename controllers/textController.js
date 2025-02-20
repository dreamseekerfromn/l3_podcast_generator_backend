const express = require("express");
const axios = require("axios");
const textConverted = express.Router();
const api_key = process.env.UNREAL_SPEECH_API;

textConverted.get("/", async (req, res) => {
    const { textToConvert } = req.params;

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.v8.unrealspeech.com/speech',
        headers: { 
          'Authorization': api_key
        },
        data : textToConvert
      };

    let result;

    if(textToConvert.length > 0){
        axios(config).then(res => {
            result = JSON.stringify(res.data);
            console.log(result);
        }).catch(err => console.error(err));
        res.status(200).json({ success: true, data: { payload: [...fileList] } });
    } else {
        res.status(400).json({ error: "No file list"});
    }
})

module.exports = textConverted;