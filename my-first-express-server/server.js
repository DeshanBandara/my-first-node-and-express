var express = require("express");
var app = express();

var HTTP_PORT = 8000;

app.listen(HTTP_PORT, () =>{
    console.log("Server Running on Port %PORT%". replace("%PORT%", HTTP_PORT));
});

app.get("/", (req, res)=>{
    //Some code to retrive data
    res.send("Getting Some Data");
});

app.post("/", (req, res) => {
    //Some code to create data
    res.send("Create Some Data");
});

app.put("/", (req, res) => {
    //Some code to Update data
    res.send("Putting Some Data");
});

app.delete("/", (req, res) => {
    //Some code to delete data
    res.send("Deleting Some Data");
});
