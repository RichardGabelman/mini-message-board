const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageByIndex(index) {
  const { row } = await pool.query("SELECT * FROM messages WHERE id=($1)", [index]);
  return row;
}

async function insertMessage(message) {
  await pool.query("INSERT INTO messages (user, text, added) VALUES (($1), ($2), ($3))", [message.user, message.text, message.added]);
}

module.exports = {
  getAllMessages,
  getMessageByIndex,
  insertMessage
}