"use strict";

/** Database setup for jobly. */

const { Client } = require("pg");
require("dotenv").config();

const db = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
// connectionString: "postgresql://localhost/jobly",

db.connect();

module.exports = db;
