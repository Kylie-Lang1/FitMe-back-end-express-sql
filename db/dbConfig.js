// DEPENDENCIES
const pgp = require("pg-promise")()

// CONFIGURATION
require('dotenv').config()

// CONNNECTION
const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD
}

// PG_PROMISE
const db = pgp(cn)

// EXPORT
module.exports = db;