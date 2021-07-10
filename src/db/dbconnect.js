


const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    multipleStatements: true
});



module.exports = {
    db
}
