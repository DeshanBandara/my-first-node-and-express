var sqlite3 = require("sqlite3").verbose();
const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err){
        //cannot open databse
        console.error(err.message);
        throw err;
    } else {
        console.log("Connect to the Sqlite database");
    }
});

module.exports = db;