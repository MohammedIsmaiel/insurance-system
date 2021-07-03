const express = require("express");
const router = express.Router();
const { db } = require('.././db/dbconnect');




//add new customer
router.post("/add-new-Customer", (req, res) => {
    try {
        let newCustomer = req.body
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        res.json({
            newCustomer
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});


//search for a customer
router.get("/get-Customer", (req, res) => {
    try {
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        res.json({
            customer
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});


module.exports = router