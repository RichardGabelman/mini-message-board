const { Pool } = require("pg");

console.log("DATABASE_URL:", process.env.DATABASE_URL);


// All of the following properties should be read from environment variables
module.exports = new Pool({
  connectionString: process.env.DATABASE_URL
});