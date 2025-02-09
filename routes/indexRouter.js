const { Router } = require("express");
const { getAllMessages, getMessageByIndex, getNewForm, postNewForm } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getAllMessages);
indexRouter.get("/new", getNewForm);
indexRouter.post("/new", postNewForm);
indexRouter.get("/:index", getMessageByIndex);


module.exports = indexRouter;