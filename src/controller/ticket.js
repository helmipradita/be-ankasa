const { response } = require(`../middleware/common`);
const {
  insertTicket,
  findAdmin,
  findAirport,
  findAirlines,
  selectAll,
  countAll,
  selectById,
  update,
  findTicket,
  deleteTicket,
} = require(`../model/ticket`);
const { v4: uuidv4 } = require('uuid');

const TicketController = {
  add: async (req, res, next) => {
    try {
      const { email } = req.payload;
      const {
        airlines_id,
        departure_id,
        arrival_id,
        departure,
        arrive,
        price,
        stock,
        gate,
        terminal,
        type,
        code,
      } = req.body;

      let dataTicket = {
        id: uuidv4(),
        airlines_id,
        departure_id,
        arrival_id,
        departure,
        arrive,
        price,
        stock,
        gate,
        terminal,
        type,
        code,
      };

      //check role
      const {
        rows: [users],
      } = await findAdmin(email);

      if (users.role === 'customer') {
        return response(
          res,
          404,
          false,
          null,
          `only role admin can't add ticket`
        );
      }

      //check airport - departure
      const {
        rows: [tbl_airportDep],
      } = await findAirport(departure_id);

      if (!tbl_airportDep) {
        return response(
          res,
          404,
          false,
          null,
          'departure not found, check again'
        );
      }

      //check airport - arrival
      const {
        rows: [tbl_airportAr],
      } = await findAirport(arrival_id);

      if (!tbl_airportAr) {
        return response(
          res,
          404,
          false,
          null,
          'arrival not found, check again'
        );
      }

      //check airport - departure & arrival is match
      if (tbl_airportDep.id === tbl_airportAr.id) {
        return response(
          res,
          404,
          false,
          null,
          `departure and arrival can't be the same, check again`
        );
      }

      //check airlines
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
    try {
      const id = req.params.id;
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
    try {
      const { email } = req.payload;
      const {
        airlines_id,
        departure_id,
        arrival_id,
        departure,
        arrive,
        price,
        stock,
        gate,
        terminal,
        type,
        code,
      } = req.body;

      const id = req.params.id;

      let dataTicket = {
        id,
        airlines_id,
        departure_id,
        arrival_id,
        departure,
        arrive,
        price,
        stock,
        gate,
        terminal,
        type,
        code,
      };

      const {
        rows: [users],
      } = await findAdmin(email);

      if (users.role === 'customer') {
        return response(
          res,
          404,
          false,
          null,
          `only role admin can't edit ticket`
        );
      }

      await update(dataTicket);
      response(res, 200, true, dataTicket, 'update ticket success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'update ticket fail');
    }
  },
  delete: async (req, res, next) => {
    try {
      const { email } = req.payload;

      const id = req.params.id;

      const {
        rows: [users],
      } = await findAdmin(email);

      if (users.role === 'customer') {
        return response(
          res,
          404,
          false,
          null,
          `only role admin can't delete ticket`
        );
      }

      const {
        rows: [tickets],
      } = await findTicket(id);

      if (!tickets) {
        return response(
          res,
          404,
          false,
          null,
          'tickets not found, check again'
        );
      }

      await deleteTicket(id);
      response(res, 200, true, tickets, 'delete ticket success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'delete ticket fail');
    }
  },
};

exports.TicketController = TicketController;
