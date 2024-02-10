"use strict";

/** Database setup for jobly. */

const { Client } = require("pg");
require("dotenv").config();

const db = new Client({
  // connectionString: "postgresql://localhost/jobly",
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

db.connect();

module.exports = db;
