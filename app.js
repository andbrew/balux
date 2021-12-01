function query(args) {
	var querys = {
		cast:
		`SELECT actor_id, name
		FROM actor LEFT JOIN person
		ON actor.actor_id = person.id
		WHERE movie_id = '${args["movie_id"]}';`
	};
	return querys[args["alias"]];
}

var mysql = require("mysql");

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

balux.query(query({
	alias: "cast",
	movie_id: "0109830"
}), (err, result) => {
	if(err) throw err;
	console.log(result);
});

balux.end();
