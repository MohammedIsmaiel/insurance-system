const express = require("express");
const router = express.Router();
const { db } = require('.././db/dbconnect');



//add new program
router.post("/add-program", (req, res) => {
    try {
        let newProgram = req.body
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "CALL `program_insertion`(?,?,?,@p3);";
        db.query(sql, [
            newProgram.program_name,
            newProgram.max_balance,
            newProgram.company_id
        ], function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json({
                newProgram: result[0]
            })
        });

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
            res.json({
                allPrograms: result[0]
            })
        });

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
        var sql = "CALL `get-program-by-id`(?);";
        db.query(sql, [id], function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json({
                program: result[0]
            })
        });

    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

module.exports = router