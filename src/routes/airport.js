const express = require(`express`);
const router = express.Router();
const { AirportController } = require(`../controller/airport`);
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.post('/', upload.single('photo'), protect, AirportController.add);
router.get('/', AirportController.get);
router.get('/:id', AirportController.getById);
router.put('/:id', upload.single('photo'), protect, AirportController.edit);
router.delete('/:id', protect, AirportController.delete);

module.exports = router;
