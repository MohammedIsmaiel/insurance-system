const express = require("express");
const router = express.Router();
const { db } = require('.././db/dbconnect');


router.get("/", (req, res) => {
    return res.json({ message: 'welcome' });
});





//TODO #2 add the rest end points @mohammedgamal23 @MohammedIsmaiel
module.exports = router