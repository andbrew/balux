const mysql = require('mysql');
const boxen = require('boxen');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'alvin',
    password: 'galletaBernardi',
    database: 'balux',
    multipleStatements: true
});


mysqlConnection.connect(function(err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('');
        console.log(boxen(`DB is Connected`, {
            padding: 2,
            borderColor: 'blue',
            margin: 1
        }))
    }
});


module.exports = mysqlConnection;
