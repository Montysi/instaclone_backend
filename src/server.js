require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRouter = require("./user/routes")

const port = process.env.PORT || 5001;

const User = require ("./users/model");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);

const syncTables = () => {

    User.sync({})

};

app.listen(port, () => {
    syncTables();
    console.log(`Server is listening on port ${port}`);
});