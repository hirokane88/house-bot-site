const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.maxRoom);
  var num2 = Number(req.body.minRoom);
  res.send("Max Rooms: " + num1 + "\nMin Rooms: " + num2 );
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000 mate.");
});
