const express = require(`express`);
const router = express.Router();
const { BookingController } = require(`../controller/booking`);
const { protect } = require('../middleware/auth');

//INSERT,UPDATE,DELETE
router.post('/', protect, BookingController.insert);
router.put('/:id', protect, BookingController.update);
router.delete('/:id', protect, BookingController.delete);
router.put('/payment/:id', BookingController.updatePayment);

//GET DATA
router.get('/admin', protect, BookingController.getAllAdmin);
router.get('/users', protect, BookingController.getBooking);
router.get('/detail/:id', protect, BookingController.detailBook);
module.exports = router;
