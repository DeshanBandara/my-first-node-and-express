const express = require("express");

const app = express();

//app.METHOD(PATH. HANDLER)
app.get("/a/cool/route/path",function(req,res){
    //console.log("The user visited /a/cool/route/path PATH")
    res.send("You accessed the path /a/cool/route/path")
});

const newLocal = 3011;
app.listen(newLocal);