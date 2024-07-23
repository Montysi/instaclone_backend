const { Router } = require("express");
const userRouter = Router();

const { signUp } = require("./controllers");
const { hashPass } =  require("../middleware/auth");


userRouter.post("/signUp", hashPass, signUp);

module.exports = userRouter