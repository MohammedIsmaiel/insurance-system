const express = require("express");
const router = express.Router();
const { db } = require('.././db/dbconnect');



//list all companies after       /company
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
        let getId
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = `CALL Company_Insertion( ?, ?, ?,?,@id); `
        db.query(sql, [newCompany.name, newCompany.password, newCompany.email, newCompany.adress], function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log(getId);
            res.json({
                newCompany: result[0]
            })
        });

    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

//get companie by id
router.get("/get-company/:id", (req, res) => {
    try {
        let id = req.params.id
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "CALL `get-company-by-id`(?);";
        db.query(sql, [id], function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json({
                company: result[0]
            })
        });
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

module.exports = router