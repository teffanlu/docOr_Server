//require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
    /*user: "dctypdogoqyrmi",
    host: "ec2-23-23-151-191.compute-1.amazonaws.com",
    database: "d9j3a5oj9o79pp",
    password: "6b96a5b5dd00c291b945ad88f70e71f20bf79723b8a3c3bded2eda5e684937bc",
    port: 5432,
    */
   connectionString: process.env.DATABASE_URL,
    max: 20,
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = pool;