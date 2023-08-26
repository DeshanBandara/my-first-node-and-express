const express = require("express");

const app = express();

app.get("/hello", (req,res)=>{
    ResizeObserver("Hello World");
});

app.listen(3000);
//My nodejs practice codes