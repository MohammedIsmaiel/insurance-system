const express = require("express");
const router = express.Router();
const { db } = require('.././db/dbconnect');



//add new service
//TODO #3
router.post("/add-service", (req, res) => {
    try {
        let newService = req.body
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "call `service_insertion`(?,?,?,@p3)";
        db.query(sql, [
            newService.service_name,
            newService.service_category,
            newService.service_discription
        ], function (err, result) {
            if (err) {
                return res.json({
                    error: err.message
                });
            } else {
                console.log(result);
                res.json({
                    newService
                })


            }
        });
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

//get all services
router.get("/get-services", (req, res) => {
    try {
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "CALL `get-all-services`();";
        db.query(sql, function (err, result) {
            if (err) {
                return res.json({
                    error: err.message
                });
            } else {
                console.log(result);
                res.json({
                    allServices: result[0]
                })

            }
        });
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});

//get service by id 
router.get("/get-service/:id", (req, res) => {
    try {
        let id = req.params.id
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "CALL `get-service-by-id`(?);";
        db.query(sql, [id], function (err, result) {
            if (err) {
                return res.json({
                    error: err.message
                });
            } else {

                console.log(result);
                res.json({
                    service: result[0]
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