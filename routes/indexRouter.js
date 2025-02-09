const { Router } = require("express");
const { getAllMessages, getMessageByIndex, getNewForm, postNewForm } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getAllMessages);

indexRouter.get("/:index", getMessageByIndex);

indexRouter.get("/new", getNewForm);

indexRouter.post("/new", postNewForm);

module.exports = indexRouter;