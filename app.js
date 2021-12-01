var mysql = require('mysql');

var balux = mysql.createConnection({
	host: "localhost",
	user: "alvin",
	password: "galletaBernardi",
	database: "balux"
});

balux.connect(err => {
	if(err) throw err;
	console.log("Connected!");
});

balux.query('SELECT COUNT(*) FROM movie;', (err, result) => {
	if(err) throw err;
	console.log(result);
});

balux.end();
