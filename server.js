// DEPENDENCIES
const { app } = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT || 3333;

// LISTEN
app.listen(PORT, function(req, res){
  console.log(`Listening on port ${PORT2}`)
});

server.listen(PORT, ()=>{
  console.log(`socket is listening on ${PORT}`);
});