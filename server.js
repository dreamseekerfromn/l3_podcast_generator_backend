// DEPENDENCIES
const { app } = require("./app.js");


// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT || 3333;
const PORT2 = process.env.PORT2 || 3334;

// LISTEN
app.listen(PORT2, function(req, res){
  console.log(`Listening on port ${PORT2}`)
});

server.listen(PORT, ()=>{
  console.log(`socket is listening on ${PORT}`);
});