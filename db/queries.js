const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageByIndex(index) {
  const result = await pool.query("SELECT * FROM messages WHERE id=$1", [index]);
  console.log("Rows: ", result.rows);
  return result.rows[0];
}

async function insertMessage(message) {
  const timestamp = new Date().getTime() / 1000.0;
  await pool.query(`INSERT INTO messages ("user", text, added) VALUES (($1), ($2), to_timestamp($3))`, [message.user, message.text, timestamp]);
}

module.exports = {
  getAllMessages,
  getMessageByIndex,
  insertMessage
}