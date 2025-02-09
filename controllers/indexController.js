const db = require("../db/queries");

const links = [
  { href: "/", text: "Home" },
  { href: "new", text: "New Message" },
];

async function getAllMessages(req, res) {
  let messages = await db.getAllMessages();
  console.log("Messages: ", messages);
  res.render("index", { messages: messages, links: links });
}

async function getMessageByIndex(req, res) {
  const index = req.params["index"];
  if (isNaN(index)) {
    res.redirect("/");
  }
  let message = await db.getMessageByIndex(index);
  res.render("message", { message: message, links: links });
}

function getNewForm(req, res) {
  res.render("form", { links: links });
}

async function postNewForm(req, res) {
  const text = req.body.message;
  const user = req.body.author;
  const message = { text, user };
  await db.insertMessage(message);
  res.redirect("/");
}

module.exports = {
  getAllMessages,
  getMessageByIndex,
  getNewForm,
  postNewForm
};