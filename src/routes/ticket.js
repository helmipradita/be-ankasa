const express = require(`express`);
const router = express.Router();
const { TicketController } = require(`../controller/ticket`);

router.post('/add', TicketController.add);
router.get('/', TicketController.getAll);
router.get('/:id', TicketController.getById);
router.put('/:id', TicketController.edit);
router.delete('/:id', TicketController.delete);

module.exports = router;
