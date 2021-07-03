const express = require("express");
const router = express.Router();
const { db } = require('./db/dbconnect');


router.get("/", (req, res) => {
    return res.json({ message: 'welcome' });
});

//list all companies
router.get("/get-all-companies", (req, res) => {
    try {
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "";
        con.query(sql, function (err, result) {
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
        var sql = "";
        con.query(sql, function (err, result) {
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

//add new customer
router.post("/add-new-Customer", (req, res) => {
    try {
        let newCustomer = req.body
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "";
        con.query(sql, function (err, result) {
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
        con.query(sql, function (err, result) {
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

//add new program
router.post("/add-new-program", (req, res) => {
    try {
        let newProgram = req.body
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "";
        con.query(sql, function (err, result) {
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