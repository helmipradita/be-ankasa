const { response } = require(`../middleware/common`);
const {
  insertTicket,
  findAirlines,
  selectAll,
  countAll,
  selectById,
  update,
  deleteTicket,
} = require(`../model/ticket`);
const { v4: uuidv4 } = require('uuid');

const TicketController = {
  add: async (req, res, next) => {
    const airlines_id = req.body.airlines_id;

    let dataTicket = {
      id: uuidv4(),
      airlines_id: req.body.airlines_id,
      departure_city: req.body.departure_city,
      arrival_city: req.body.arrival_city,
      departure: req.body.departure,
      arrive: req.body.arrive,
      price: req.body.price,
      stock: req.body.stock,
    };

    try {
      const {
        rows: [airlines],
      } = await findAirlines(airlines_id);

      if (!airlines) {
        return response(
          res,
          404,
          false,
          null,
          'airlines not found, check again'
        );
      }

      await insertTicket(dataTicket);
      response(res, 200, true, dataTicket, 'insert ticket success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'insert ticket failed');
    }
  },
  getAll: async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 4;
      const sortBy = req.query.sortBy || 'price';
      const sortOrder = req.query.sortOrder || 'DESC';
      const search = req.query.search || '';
      const offset = (page - 1) * limit;

      const result = await selectAll({
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

      response(res, 200, true, result.rows, 'get ticket success', pagination);
    } catch (error) {
      console.log(error);
      response(res, 404, false, null, ' get ticket failed');
    }
  },
  getById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const {
        rows: [tickets],
      } = await selectById(id);

      if (!tickets) {
        return response(
          res,
          404,
          false,
          null,
          'tickets not found, check again'
        );
      }

      response(res, 200, true, tickets, 'get ticket success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'get ticket fail');
    }
  },
  edit: async (req, res, next) => {
    const id = req.params.id;
    let dataTicket = {
      id,
      departure_city: req.body.departure_city,
      arrival_city: req.body.arrival_city,
      departure: req.body.departure,
      arrive: req.body.arrive,
      price: req.body.price,
      stock: req.body.stock,
    };
    try {
      await update(dataTicket);
      response(res, 200, true, dataTicket, 'update ticket success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'update ticket fail');
    }
  },
  delete: async (req, res, next) => {
    const id = req.params.id;
    try {
      const {
        rows: [tickets],
      } = await deleteTicket(id);

      if (!tickets) {
        return response(
          res,
          404,
          false,
          null,
          'tickets not found, check again'
        );
      }

      response(res, 200, true, tickets, 'delete ticket success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'delete ticket fail');
    }
  },
};

exports.TicketController = TicketController;
