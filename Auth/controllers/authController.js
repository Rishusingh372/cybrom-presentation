const jwt = require("jsonwebtoken");
const User = require("../models/model.user");

// Register a new user
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login user
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "2h" } // ✅ Correct
        );
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

// Get user profile
const profile = async (req, res) => {
    try {
        res.json({ user: req.user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    register,
    login,
    profile
};
