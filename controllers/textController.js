const express = require("express");
const { default: UnrealSpeech } = require("unrealspeech");
const unrealSpeech = new UnrealSpeech();
const textSpeech = express.Router();

uploads.get("/", async (req, res) => {
    const { textToConvert } = req.param;

    const speechBuffer = await unrealSpeech.stream({
        text: textToConvert,
        voiceId: "Scarlett",
        bitrate: "192k",
        timestampType: "word",
        speed:0,
        pitch: 1.0
    });

    save(speechBuffer, `../downloads/temp.mp3`)

    if(textToConvert.length > 0){

        res.status(200).json({ success: true, data: { payload: [...fileList] } });
    } else {
        res.status(400).json({ error: "No file list"});
    }
})