const { qy } = require('../DB/functions');

async function getAll(req, res) {

    try {

        let sql = `SELECT * FROM movie LIMIT 100;`;
        let find = await qy(sql).catch(console.error);
        console.log('sql: ', find)

        if (find) return res.status(200).json({ "Success": true, "data": find });


    } catch (err) {
        console.log('Error al buscar')
    }
}

async function addOne(req, res) {

    const { id, name, year } = req.body;

    try {

        let sql = `INSERT INTO movie (id, name, year) VALUES ("${id}", "${name}", "${year}");`;
        let find = await qy(sql).catch(console.error);

        if (find) return res.status(200).json({ "Success": true, "data": find });


    } catch (err) {
        console.log('Error al buscar')
    }
}

async function deleteOne(req, res) {

    const { id } = req.params;
    
    console.log('query: ', req.query)
    console.log('const: ', id)
    console.log('body: ', req.body.idd)


    try {

        let sql = `
        DELETE FROM oscar WHERE movie_id = "${id}"; 
        DELETE FROM actor WHERE movie_id = "${id}"; 
        DELETE FROM director WHERE movie_id = "${id}"; 
        DELETE FROM movie WHERE id = "${id}";`;


        let find = await qy(sql).catch(console.error);

        if (find) return res.status(200).json({ "Success": true, "data": find });


    } catch (err) {
        console.log('Error al buscar')
    }
}

// async function updateOne(req, res) {

//     const {actualid, id, name, year} = req.body;

//     try {

//         let sql = `UPDATE movie SET id = "${id}", name = "${name}", year = "${year}" WHERE (id = "${actualid}")`;
//         let find = await qy(sql).catch(console.error);

//         if (find) return res.status(200).json({ "Success": true, "data": find });


//     } catch (err) {
//         console.log('Error al buscar')
//     }
// }

module.exports = {
    getAll,
    addOne,
    deleteOne,
    // updateOne
}