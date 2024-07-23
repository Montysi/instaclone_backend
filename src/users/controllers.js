const User = require("./model");

const jwt = require("jsonwebtoken")

const signUp = async (req, res) => {
    console.log("req: ", req.body);
    try {

        const user = await User.create(req.body);

        res.status(201).json({ message: "success", user: user });
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
};

const login = async (req, res) => {
  try {
    const token = await jwt.sign({ id: req.user.id }, process.env.SECRET);

    const user = {
      id: req.user.id,
      username: req.user.username,
      token: token,
    };

    res.status(201).json({ message: "success", user });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

module.exports = {
    signUp: signUp,
    login: login,
}