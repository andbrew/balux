const mysqlConnection = require("./database");

module.exports = {

    qy: async function (sql, args) {
        return await new Promise((resolve, reject) => {
            mysqlConnection.query(sql, args, (err, rows) => {
                if (err) return reject(err);
                return resolve(rows);
            });
        });
    }
}