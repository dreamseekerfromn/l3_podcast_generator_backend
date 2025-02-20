const express = require('express');
const cors = require('cors');
const uploads = require('./controllers/uploadController');
const textConverted = require('./controllers/textController');
const app = express();

app.use(cors());
app.use(express.json());

// root
app.get("/", (request, response) => {
    response.send("Hello World!");
});

//app.use("/upload", uploads);
app.use("/texttospeech", textConverted);

// 404 Page not found
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});

module.exports = app;