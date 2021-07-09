const express = require("express");
const router = express.Router();
const { db } = require('.././db/dbconnect');


router.get("/clinic/:id", (req, res) => {
    try {
        let id = req.params.id
        //TODO #1 insert sql code here @mohammedgamal23
        var sql = "CALL `get-clinic-by-id`(?);";
        db.query(sql, [id], function (err, result) {
            if (err) {
                return res.json({
                    error: err.message
                });
            } else {

                console.log(result);
                res.json({
                    clinic: result[0]
                })

            }
        });
    } catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
});





module.exports = {
    router
}