const mysql = require('mysql');

class DBConnection{
    constructor(){
        this.connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'my_movies'
    });

    }
}


module.exports = DBConnection;