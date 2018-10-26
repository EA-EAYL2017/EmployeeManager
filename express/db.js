const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "EmployeeManager"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL");
})
exports.getEmployees = function(callback) {
    db.query(
        "SELECT * FROM Employees ORDER BY name ASC",
        function(err, rows) {
            if (err) throw err;
            callback(rows);
        }
    );
}
exports.getEmployee = function(id, callback) {
    db.query(
        "SELECT * FROM Employees WHERE id = ?",
        [id],
        function(err, rows) {
            if (err) throw err;
            if (rows.length == 1) rows = rows[0]; // array -> single object
            callback(rows);
        }
    );
}
exports.addEmployee = function(data, ready) {
    db.query(
        "INSERT INTO Employees SET ?",
        data, 
        function(err, results, fields) {
            if (err) throw err;
            ready(results.insertId);
        }
    );
}
exports.updateEmployee = function(data, ready) {
    db.query(
        "UPDATE Employees SET ? WHERE id = ?",
        [data, data.id], 
        function(err, results, fields) {
            if (err) throw err;
            ready(results.insertId);
        }
    );
}
exports.deleteEmployee = function(id, ready) {
    db.query(
        "DELETE FROM Employees WHERE id = ?",
        [id], 
        function(err, results, fields) {
            if (err) throw err;
            ready();
        }
    );
}