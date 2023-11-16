const express = require('express');
const { check } = require('express-validator');
const userController = require('../controllers/userController');

const router = express.Router();

// Login user
router.post('/login', userController.loginUser);

module.exports = router;