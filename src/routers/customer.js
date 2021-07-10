const express = require("express");
const router = express.Router();
const { db } = require('.././db/dbconnect');




//add new customer
router.post("/add-customer", (req, res) => {
    try {
        let newCustomer = req.body
        var sql = `CALL Customer_Insertion( ?, ?, ?,?,?,?,?,?); `
        db.query(sql, [
            newCustomer.firstName,
            newCustomer.lastName,
            newCustomer.adress,
            newCustomer.phone,
            newCustomer.email,
            newCustomer.current_balance,
            newCustomer.ProgramID,
            newCustomer.isActive
        ], function (err, result) {

            if (err) {
                return res.json({
                    error: err.message
                });
            } else {
                console.log(result);
                res.json({
                    newCustomer
                })
            }

        });

    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});


//search for a customer by id 
router.get("/get-Customer/:id", (req, res) => {
    try {
        let id = req.params.id
        var sql = "CALL `get-customer-by-id`(?);";
        db.query(sql, [id], function (err, result) {

            if (err) {
                return res.json({
                    error: err.message
                });
            } else {
                console.log(result);
                res.json({
                    customer: result[0]
                })

            }

        });

    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});


//get all customers
router.get("/get-Customers", (req, res) => {
    try {
        var sql = "CALL `get-all-customers`();";
        db.query(sql, function (err, result) {

            if (err) {
                return res.json({
                    error: err.message
                });
            } else {
                console.log(result);
                res.json({
                    customers: result[0]
                })
            }

        });
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

//get customer program
router.get("/customer-program/:id", (req, res) => {
    try {
        let id = req.params.id
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "call `get-customer-by-id-join-program`(?);";
        db.query(sql, [
            id
        ], function (err, result) {

            if (err) {
                return res.json({
                    error: err.message
                });
            } else {
                console.log(result);
                res.json({
                    customer: result[0]
                })
            }

        });

    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

//get customer service
router.get("/customer-service/:id", (req, res) => {
    try {
        let id = req.params.id
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "call `get-customer-services`(?);";
        db.query(sql, [
            id
        ], function (err, result) {

            if (err) {
                return res.json({
                    error: err.message
                });
            } else {
                console.log(result);
                res.json({
                    customer: result[0]
                })
            }

        });

    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

module.exports = router