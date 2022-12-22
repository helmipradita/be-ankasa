const express = require(`express`);
const router = express.Router();
const { TicketController } = require(`../controller/ticket`);
const { protect } = require('../middleware/auth');

router.post('/add', protect, TicketController.add);
router.get('/', TicketController.getAll);
router.get('/:id', TicketController.getById);
router.put('/:id', protect, TicketController.edit);
router.delete('/:id', protect, TicketController.delete);

module.exports = router;
