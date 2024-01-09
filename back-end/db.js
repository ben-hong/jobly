"use strict";

/** Database setup for jobly. */

const { Client } = require("pg");
require("dotenv").config();

const db = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
// connectionString: "postgresql://localhost/jobly",

db.connect();

module.exports = db;
