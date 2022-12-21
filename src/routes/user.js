const express = require(`express`);
const router = express.Router();
const { UserController } = require(`../controller/user`);
const { protect } = require('../middleware/auth');
const { upload } = require('../middleware/upload');

//auth
router.post('/register', UserController.register);
router.post('/verification', UserController.verificationOtp);
router.post('/login', UserController.login);
router.post('/forgot-password', UserController.forgotPassword);
router.post('/reset-password/:token', UserController.resetPassword);

//profile
router.get(`/profile`, protect, UserController.profile);
router.put('/profile', protect, UserController.update);

module.exports = router;
