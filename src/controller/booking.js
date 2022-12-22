const { response } = require(`../middleware/common`);
const { v4: uuidv4 } = require("uuid");

const {
  addBooking,
  delBooking,
  updateBooking,
  updateStatusPayment,
  getBookingAdmin,
  detailBook,
  allBookUser,
} = require(`../model/booking`);

const BookingController = {
  insert: async (req, res) => {
    try {
      const id_users = req.payload.id;
      let digits = "0123456789";
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
      return response(res, 200, true, null, "BOOKING SUCCESS");
    } catch (err) {
      return response(res, 404, false, err, "BOOKING FAILED");
    }
  },
  delete: async (req, res) => {
    try {
      await delBooking(req.params.id);
      response(res, 200, true, null, "delete data success");
    } catch (err) {
      return response(res, 404, false, err, "BOOKING FAILED");
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
      return response(res, 200, true, data, "UPDATE BOOKING SUCCESS");
    } catch (err) {
      return response(res, 404, false, err, "UPDATE BOOKING FAILED");
    }
  },
  updatePayment: async (req, res) => {
    try {
      await updateStatusPayment(req.params.id);
      return response(res, 200, true, null, "UPDATE STATUS PAYMENT SUCCESS");
    } catch (err) {
      return response(res, 404, false, err, "UPDATE STATUS PAYMENT FAILED");
    }
  },
  getAllAdmin: async (req, res) => {
    try {
      const result = await getBookingAdmin();
      return response(res, 200, true, result.rows, "GET DATA SUCCESS");
    } catch (err) {
      return response(res, 404, false, err, "GET DATA FAILED");
    }
  },
  getBooking: async (req, res) => {
    try {
      const id_users = req.payload.id;
      console.log(id_users);
      const result = await allBookUser(id_users);
      return response(res, 200, true, result, "GET DATA SUCCESS");
    } catch (err) {
      return response(res, 400, false, err, "GET DATA FAILED");
    }
  },
  detailBook: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await detailBook(id);
      return response(res, 200, true, result.rows, "GET DATA SUCCESS");
    } catch (err) {
      return response(res, 400, false, err, "GET DATA FAILED");
    }
  },
};

exports.BookingController = BookingController;
