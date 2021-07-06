const express = require("express");
const router = express.Router();
const { db } = require('.././db/dbconnect');




//add new customer
router.post("/add-customer", (req, res) => {
    try {
        let newCustomer = req.body
        var sql = `CALL Customer_Insertion( ?, ?, ?,?,?,?,?); `
        db.query(sql, [
            newCustomer.firstName,
            newCustomer.lastName,
            newCustomer.adress,
            newCustomer.phone,
            newCustomer.email,
            newCustomer.current_balance,
            newCustomer.ProgramID], function (err, result) {
                if (err) throw err;
                console.log(result);
                res.json({
                    newCustomer: result[0]
                })
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
            if (err) throw err;
            console.log(result);
            res.json({
                customer: result[0]
            })
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
            if (err) throw err;
            console.log(result);
        });
        res.json({
            customers: result[0]
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});


module.exports = router