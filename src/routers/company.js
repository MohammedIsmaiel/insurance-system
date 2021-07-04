const express = require("express");
const router = express.Router();
const { db } = require('.././db/dbconnect');



//list all companies
router.get("/get-companies", (req, res) => {
    try {
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "CALL `get-all-companies`();";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json({
                allCompanies: result[0]
            })
        });

    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

//add new company
router.post("/add-company", (req, res) => {
    try {
        let newCompany = req.body
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = `CALL Compnay_Insertion(?, ?, ?, ?,?); SELECT ? AS id;`
        db.query(sql, [newCompany.id, newCompany.name, newCompany.password, newCompany.adress], function (err, result) {
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

//get companie by id
router.get("/get-companie/:id", (req, res) => {
    try {
        let id = req.params.id
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        res.json({
            companie
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

module.exports = router