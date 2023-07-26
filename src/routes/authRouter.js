const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticateUser } = require('../utils/authenticator');

// Authentication Routes
// These routes are accessible to any user.
router.post('/signup', authController.signup);
router.post('/login', authController.login);

// An user must be logged in to access this route.
// It allows an user to change >their own< password.
router.patch('/settings/change-password', authenticateUser, authController.updatePassword);

module.exports = router;
