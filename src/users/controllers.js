const User = require("./model");

const signUp = async (req, res) => {
    console.log("req: ", req.body);
    try {

        const user = await User.create(req.body);

        res.status(201).json({ message: "success", user: user });
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
}

module.exports = {
    signUp: signUp
}