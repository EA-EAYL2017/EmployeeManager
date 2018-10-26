const express = require("express");
const app = express();
app.use(express.json());
const db = require("./db.js");

employees = [];

function updateEmployees(callback) {
    db.getEmployees(function(rows) {
        employees = rows;
        callback();
    })
}

app.get("/employees", function (req, res) {
    updateEmployees(function() {
        res.send(employees);
    });
});

app.get("/employee/:id", function (req, res) {
    db.getEmployee(req.params.id, function(employee) {
        res.send(employee);
    });
});

app.post("/employee", function (req, res) {
    db.addEmployee(req.body, function(insertedKey) {
        updateEmployees(function() {
            res.send(employees);
        });
    });
});

app.put("/employee", function (req, res) {
    db.updateEmployee(req.body, function(insertedKey) {
        updateEmployees(function() {
            res.send(employees);
        });
    });
});

app.delete("/employee/:id", function (req, res) {
    db.deleteEmployee(req.params.id, function() {
        updateEmployees(function() {
            res.send(employees);
        });
    });
});

app.listen(8002, function () {
    console.log("Employee Manager API listening on port 8002...");
});