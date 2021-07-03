const express = require("express");
const router = express.Router();
const { db } = require('.././db/dbconnect');



//add new program
router.post("/add-new-program", (req, res) => {
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

module.exports = router