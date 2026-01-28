const router = require('express').Router();
const userController = require('../controllers/user.controller');

// register
router.post('/register', userController.createUser);

// login
router.post('/login', userController.loginUser);

module.exports = router;
