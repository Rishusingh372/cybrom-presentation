const express = require("express");
const route = express.Router();
const EmpController = require("../controllers/emp.controller.js");

route.post("/registration", EmpController.empSave);
route.post("/login", EmpController.empLogin);
route.post("/userauth", EmpController.empAuth);
route.post("/logout", EmpController.logout); // ✅ new

module.exports = route;
