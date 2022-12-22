const express = require('express');
const router = express.Router();
const UserRouter = require('../routes/user');
const TicketRouter = require('../routes/ticket');
const BookRouter = require('../routes/booking');
const AirRouter = require('../routes/airlines');

router.use('/user', UserRouter);
router.use('/ticket', TicketRouter);

router.use('/order', BookRouter);
router.use('/airlines', AirRouter);

module.exports = router;
