// lib/dbConfig.js

// Import the dotenv library to load environment variables from .env file
require('dotenv').config()

// Import the mssql library to connect to Azure SQL Database
const sql = require('mssql');

// Define the database connection configuration
const config = {
    // Set the database user
    user: process.env.DB_USER,
    // Set the database password
    password: process.env.DB_PASSWORD,
    // Set the database server (can be an IP address or the server name)
    server: process.env.DB_SERVER,
    // Set the database name
    database: process.env.DB_DATABASE,
    // Set the options for the database connection
    options: {
        // Set the encryption option to true for Azure SQL Database connections
        encrypt: true,
        // Set the enableArithAbort option to true to enable fast failover in Azure SQL Database
        enableArithAbort: true,
    },

    pool: {
        max: 10, // Número máximo de conexiones en el pool
        min: 0, // Número mínimo de conexiones en el pool
        idleTimeoutMillis: 30000 // Tiempo en milisegundos antes de que una conexión inactiva sea cerrada
    }
};

// Create a new ConnectionPool instance using the configuration and connect to the database
const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        // Log a message when the connection is successfully established
        console.log('Connected to Azure SQL Database');
        // Return the connection pool instance
        return pool;
    })
    .catch(err => {
        // Log an error message if the connection fails
        console.error('Database Connection Failed! Bad Config: ', err);
        // Throw the error to propagate it further
        throw err;
    });

// Export the sql module and the connection pool promise so that they can be used in other files
module.exports = {
    sql, poolPromise
};


