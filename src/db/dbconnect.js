


const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DBNAME,
    multipleStatements: true
});



module.exports = {
    db
}
