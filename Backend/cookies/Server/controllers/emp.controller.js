const EmpModel = require("../models/emp.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "adarsh111"; // ✅ better: keep in .env (process.env.JWT_SECRET)

const empSave = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existing = await EmpModel.findOne({ email });
    if (existing) {
      return res.status(409).send("Email already registered!");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await EmpModel.create({
      username,
      email,
      password: passwordHash,
    });

    res.send("You are Successfully Registered!!");
  } catch (error) {
    console.log("error in empSave", error);
    res.status(500).send("Registration error");
  }
};

const empLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await EmpModel.findOne({ email });
    if (!user) {
      return res.status(401).send({ msg: "Invalid Email" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send({ msg: "Invalid Password" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: 3 * 24 * 60 * 60,
    });

    // ✅ Token in httpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // ✅ production: true (HTTPS)
      sameSite: "lax",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    res.send({ msg: "You are successfully Login" });
  } catch (error) {
    console.log("error in empLogin", error);
    res.status(500).send({ msg: "Login error" });
  }
};

const empAuth = async (req, res) => {
  try {
    // ✅ Read token from cookies
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).send({ msg: "No token found" });
    }

    const decode = jwt.verify(token, JWT_SECRET);
    const user = await EmpModel.findById(decode.id);

    if (!user) {
      return res.status(401).send({ msg: "User not found" });
    }

    // ✅ send only needed fields
    res.status(200).send({
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    res.status(401).send({ msg: "Unauthorized" });
  }
};

// ✅ Logout: clear cookie
const logout = (req, res) => {
  res.clearCookie("token");
  res.send({ msg: "Logged out successfully" });
};

module.exports = {
  empSave,
  empLogin,
  empAuth,
  logout,
};
