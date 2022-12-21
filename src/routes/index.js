const express = require('express');
const router = express.Router();
const UserRouter = require('../routes/user');
const TicketRouter = require('../routes/ticket');

router.use('/user', UserRouter);
router.use('/ticket', TicketRouter);

module.exports = router;
