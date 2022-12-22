const express = require(`express`);
const router = express.Router();
const { UserController } = require(`../controller/user`);
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

//auth
router.post('/register/:role', UserController.register);
router.post('/register/:role', UserController.registerAdmin);

router.post('/verification', UserController.verificationOtp);
router.post('/login', UserController.login);
router.post('/forgot-password', UserController.forgotPassword);
router.post('/reset-password/:token', UserController.resetPassword);

//profile
router.get(`/profile`, protect, UserController.profile);
router.put('/profile', upload.single('photo'), protect, UserController.update);

module.exports = router;
