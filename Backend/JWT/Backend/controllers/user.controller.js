const EmpModel = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const empSave = async (req, res) => {
    const { username, email, password } = req.body
    const passwordHash = await bcrypt.hash(password, 10);

    const user = await EmpModel.create({
        username: username,
        email: email,
        password: passwordHash
    })

    res.send("You are Succesfully Registered!!")

}

const empLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await EmpModel.findOne({ email: email });
        if (!user) {
            res.status(401).send({ msg: "Invalid Email" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log(passwordMatch);
        if (!passwordMatch) {
            res.status(401).send({ msg: "Invalid Password" });
        }

        const token = jwt.sign({ id: user._id }, "adarsh111", {
            expiresIn: 3 * 24 * 60 * 60,
        });

        console.log(token);
        res.send({ token: token, msg: "You are succesfully Login" });
    } catch (error) {
        console.log("error in emplogin", error)
    }

}

const empAuth = async (req, res) => {
    try {
        const token = req.header("auth_token")
        const decode = jwt.verify(token, "adarsh111");
        const user = await EmpModel.findById(decode.id);
        console.log(user);
        res.status(200).send(user)
    } catch (error) {
        res.status(401).send("error in empAuth")
    }
}


module.exports = {
    empSave,
    empLogin,
    empAuth
}