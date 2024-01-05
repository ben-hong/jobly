"use strict";

/** Database setup for jobly. */

const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

const db = new Client({
<<<<<<< HEAD
  connectionString: "postgresql://localhost/jobly",
=======
  connectionString: getDatabaseUri(),
  ssl: {
    rejectUnauthorized: false
  }
>>>>>>> 25069144f5edb664568edb069e071bc10aedf979
});

db.connect();

module.exports = db;
