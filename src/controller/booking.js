const { response } = require(`../middleware/common`);
const { v4: uuidv4 } = require('uuid');

const {
  addBooking,
  delBooking,
  updateBooking,
  updateStatusPayment,
  getBookingAdmin,
  detailBook,
  allBookUser,
  countAll,
} = require(`../model/booking`);

const BookingController = {
  insert: async (req, res) => {
    try {
      const id_users = req.payload.id;
      let digits = '0123456789';
      const id = uuidv4();
      console.log(id);
      const dataBook = {
        id,
        id_users,
        id_airlines: req.body.id_airlines,
        id_tickets: req.body.id_tickets,
        tittle: req.body.tittle,
        name: req.body.name,
        country: req.body.country,
      };
      await addBooking(dataBook);
      return response(res, 200, true, null, 'BOOKING SUCCESS');
    } catch (err) {
      return response(res, 404, false, err, 'BOOKING FAILED');
    }
  },
  delete: async (req, res) => {
    try {
      await delBooking(req.params.id);
      response(res, 200, true, null, 'delete data success');
    } catch (err) {
      return response(res, 404, false, err, 'BOOKING FAILED');
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const data = {
        id,
        tittle: req.body.tittle,
        name: req.body.name,
        country: req.body.country,
      };
      await updateBooking(data);
      return response(res, 200, true, data, 'UPDATE BOOKING SUCCESS');
    } catch (err) {
      return response(res, 404, false, err, 'UPDATE BOOKING FAILED');
    }
  },
  updatePayment: async (req, res) => {
    try {
      await updateStatusPayment(req.params.id);
      return response(res, 200, true, null, 'UPDATE STATUS PAYMENT SUCCESS');
    } catch (err) {
      return response(res, 404, false, err, 'UPDATE STATUS PAYMENT FAILED');
    }
  },
  getAllAdmin: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 5;
      const sortBy = req.query.sortBy || 'id';
      const sortOrder = req.query.sortOrder || 'DESC';
      const fullname = req.query.fullname || '';
      const tickets = req.query.tickets || '';
      const offset = (page - 1) * limit;
      const searchid = req.query.searchid || '';

      const result = await getBookingAdmin({
        searchid,
        tickets,
        fullname,
        sortBy,
        sortOrder,
        limit,
        offset,
      });

      const {
        rows: [count],
      } = await countAll();
      const totalData = parseInt(count.total);
      const totalPage = Math.ceil(totalData / limit);
      const pagination = {
        currentPage: page,
        limit,
        totalData,
        totalPage,
      };

      return response(
        res,
        200,
        true,
        result.rows,
        'GET DATA SUCCESS',
        pagination
      );
    } catch (err) {
      console.log(err);
      return response(res, 404, false, err, 'GET DATA FAILED', err);
    }
  },
  getBooking: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 5;
      const sortBy = req.query.sortBy || 'id';
      const sortOrder = req.query.sortOrder || 'DESC';
      const search = req.query.search || '';
      const offset = (page - 1) * limit;
      const id_users = req.payload.id;

      const result = await allBookUser({
        id_users,
        search,
        sortBy,
        sortOrder,
        limit,
        offset,
      });

      const {
        rows: [count],
      } = await countAll();
      const totalData = parseInt(count.total);
      const totalPage = Math.ceil(totalData / limit);
      const pagination = {
        currentPage: page,
        limit,
        totalData,
        totalPage,
      };

      return response(
        res,
        200,
        true,
        result.rows,
        'GET DATA SUCCESS',
        pagination
      );
    } catch (err) {
      return response(res, 400, false, err, 'GET DATA FAILED');
    }
  },
  detailBook: async (req, res) => {
    try {
      const id = req.params.id;

      const result = await detailBook(id);

      return response(res, 200, true, result.rows, 'GET DATA SUCCESS');
    } catch (err) {
      return response(res, 400, false, err, 'GET DATA FAILED');
    }
  },
};

exports.BookingController = BookingController;
