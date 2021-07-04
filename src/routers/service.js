const express = require("express");
const router = express.Router();
const { db } = require('.././db/dbconnect');



//add new service
router.post("/add-service", (req, res) => {
    try {
        let newService = req.body
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        res.json({
            newService
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

//get all services
router.get("/get-services", (req, res) => {
    try {
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "CALL `get-all-services`();";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        res.json({
            allServices: result[0]
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

//get service by id 
router.get("/get-service/:id", (req, res) => {
    try {
        let id = req.params.id
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        res.json({
            service
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

module.exports = router