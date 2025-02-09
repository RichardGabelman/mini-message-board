const { Pool } = require("pg");

console.log("PGHOST:", process.env.PGHOST);
console.log("PGUSER:", process.env.PGUSER);
console.log("PGDATABASE:", process.env.PGDATABASE);
console.log("PGPASSWORD:", process.env.PGPASSWORD ? "****" : "NOT SET");
console.log("PGPORT:", process.env.PGPORT);

// All of the following properties should be read from environment variables
module.exports = new Pool({
  host: process.env.PGHOST, // or wherever the db is hosted
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT // The default port
});