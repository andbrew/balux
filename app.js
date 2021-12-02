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

function winner(year) {
	return new Promise((resolve, reject) => {
		balux.query({
			sql: 'SELECT movie_id FROM oscar WHERE oscar.year = ?;',
			values: [year]
		}, (error, results) => {
			if(error) throw error;
			resolve(results[0]['movie_id']);
		});
	});
}

function title(id) {
	return new Promise((resolve, reject) => {
		balux.query({
			sql: 'SELECT name FROM movie WHERE id = ?;',
			values: [id]
		}, (error, results) => {
			if(error) throw error;
			resolve(results[0]['name']);
		});
	});
}

winner(2001)
	.then(movie_id => title(movie_id))
	.then(name => {
		console.log(name);
	})
	.catch();
balux.end();
