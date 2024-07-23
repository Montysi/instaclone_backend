const { Router } = require("express");
const userRouter = Router();

const { signUp, login, getAllUsers } = require("./controllers");
const { hashPass, comparePass } =  require("../middleware/auth");


userRouter.post("/signUp", hashPass, signUp);

userRouter.post("/login", comparePass, login);

userRouter.get("/getAllUsers", getAllUsers);

module.exports = userRouter