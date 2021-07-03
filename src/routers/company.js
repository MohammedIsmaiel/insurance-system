const express = require("express");
const router = express.Router();
const { db } = require('.././db/dbconnect');



//list all companies
router.get("/get-all-companies", (req, res) => {
    try {
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        res.json({
            allCompanies
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

//add new company
router.post("/add-new-company", (req, res) => {
    try {
        let newCompany = req.body
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = ``;
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        res.json({
            newCompany
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

module.exports = router