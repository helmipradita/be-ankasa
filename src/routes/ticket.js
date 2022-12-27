const express = require(`express`);
const router = express.Router();
const { TicketController } = require(`../controller/ticket`);
const { protect } = require('../middleware/auth');
let multer = require('multer');
let upload = multer();

router.post('/add', upload.array(), protect, TicketController.add);
router.get('/', TicketController.getAll);
router.get('/:id', TicketController.getById);
router.put('/:id', upload.array(), protect, TicketController.edit);
router.delete('/:id', protect, TicketController.delete);

module.exports = router;
