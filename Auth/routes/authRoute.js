const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/rolebaseMiddleware");
const controller = require("../controllers/authController");

router.post("/register", controller.register);
router.post("/login", controller.login);

// Protected route
router.get("/profile", auth, controller.profile);

// Admin only
router.get("/admin", auth, role("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

module.exports = router;
