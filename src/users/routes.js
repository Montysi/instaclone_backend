const { Router } = require("express");
const userRouter = Router();

const { signUp } = require("./controllers");


userRouter.post("/signUp", signUp);

module.exports = userRouter