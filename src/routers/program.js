const express = require("express");
const router = express.Router();
const { db } = require('.././db/dbconnect');



//add new program
router.post("/add-program", (req, res) => {
    try {
        let newProgram = req.body
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        res.json({
            newProgram
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

//get all programs 
router.get("/get-programs", (req, res) => {
    try {
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "CALL `get-all-programs`();";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        res.json({
            allPrograms: result[0]
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

//get program by id 
router.get("/get-program/:id", (req, res) => {
    try {
        let id = req.params.id
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        res.json({
            program
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

module.exports = router