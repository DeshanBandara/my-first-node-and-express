var fs = require("fs")

fs.readFile("external.txt", function(err, data){
    if(err) return console.error(err);
    console.log(data.toString());
})

console.log("Another Node.js Line after line read");