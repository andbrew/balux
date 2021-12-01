var mysql = require('mysql');

var balux = mysql.createConnection({
	host: 'localhost',
	user: 'alvin',
	password: 'galletaBernardi',
	database: 'balux',
	multipleStatements: true
});

balux.connect(error => {
	if(error) throw error;
	console.log('connected as id ' + balux.threadId);
});

/*
balux.query({
	sql: 'SELECT COUNT(*) FROM ??;',
	values: ['movie']
}, (error, results) => {
	if(error) throw error;
	console.log(results)
});
*/

function winner(year) {
	var rows;
	balux.query({
		sql: 'SELECT movie_id FROM oscar WHERE oscar.year = ?;',
		values: [year]
	}, (error, results) => {
		if(error) throw error;
		rows = results;
		console.log(rows);
	});
	return rows;
}

console.log(winner(2001));
balux.end();
