const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "5189",
    database: "mydb",
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL");
});

const ClassroomRepository = {
    getAll: (callback) => {
        db.query("SELECT * FROM study_plan", callback);
    },
};

module.exports = ClassroomRepository;
