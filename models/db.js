const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password:'',
    database : 'mahasiswa',
});

connection.connect((err) =>{
    if(err) {
        console.error('Error connecting to MYSQL database:',err);
    } else {
        console.log('Connected to MYSQL database');
    }
});

module.exports = connection;
