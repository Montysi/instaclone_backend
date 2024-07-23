const { Router } = require("express");
const userRouter = Router();

const { signUp, login } = require("./controllers");
const { hashPass, comparePass } =  require("../middleware/auth");


userRouter.post("/signUp", hashPass, signUp);

userRouter.post("/login", comparePass, login);

module.exports = userRouter