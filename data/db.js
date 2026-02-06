const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'database-1.cleecos6aegw.eu-north-1.rds.amazonaws.com',
    user: 'admin',
    password: 'dharnish20',
    database: 'demo_dar'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    else {
        console.log('Connected to the MySQL database.');
    }
});

module.exports = connection;