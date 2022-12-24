const { response } = require(`../middleware/common`);
const {
  insertData,
  findAdmin,
  selectAll,
  countAll,
  findAirport,
  selectById,
  editAirport,
  deleteAirport,
} = require(`../model/airport`);
const { v4: uuidv4 } = require('uuid');
const cloudinary = require('../config/photo');

const AirportController = {
  add: async (req, res, next) => {
    try {
      const { name, code } = req.body;
      const { email } = req.payload;

      const {
        rows: [users],
      } = await findAdmin(email);

      if (users.role === 'customer') {
        return response(
          res,
          404,
          false,
          null,
          `only role admin can't add airport`
        );
      }

      const image = await cloudinary.uploader.upload(req.file.path, {
        folder: 'toko',
      });

      const dataAirport = {
        id: uuidv4(),
        name,
        code,
        photo: image.url,
      };

      await insertData(dataAirport);
      response(res, 200, true, dataAirport, 'insert airport success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'insert airport failed');
    }
  },
  get: async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 4;
      const filter = req.query.filter || 'name';
      const sortBy = req.query.sortBy || 'name';
      const sortOrder = req.query.sortOrder || 'DESC';
      const search = req.query.search || '';
      const offset = (page - 1) * limit;

      const result = await selectAll({
        search,
        sortBy,
        sortOrder,
        limit,
        filter,
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

      response(res, 200, true, result.rows, 'get airport success', pagination);
    } catch (error) {
      console.log(error);
      response(res, 404, false, null, ' get airport failed');
    }
  },
  getById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const {
        rows: [airport],
      } = await selectById(id);

      if (!airport) {
        return response(
          res,
          404,
          false,
          null,
          'airport not found, check again'
        );
      }

      response(res, 200, true, airport, 'get airport success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'get airport fail');
    }
  },
  edit: async (req, res, next) => {
    try {
      const { email } = req.payload;
      const id = req.params.id;
      const { name, code } = req.body;

      const {
        rows: [users],
      } = await findAdmin(email);

      if (users.role === 'customer') {
        return response(
          res,
          404,
          false,
          null,
          `only role admin can't edit airport`
        );
      }

      const {
        rows: [airport],
      } = await findAirport(id);

      if (!airport) {
        return response(
          res,
          404,
          false,
          null,
          'airport not found, check again'
        );
      }

      const image = await cloudinary.uploader.upload(req.file.path, {
        folder: 'toko',
      });

      let dataAirport = {
        id,
        name,
        code,
        photo: image.url,
      };

      await editAirport(dataAirport);
      response(res, 200, true, dataAirport, 'edit airport success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'edit airport fail');
    }
  },
  delete: async (req, res, next) => {
    const { email } = req.payload;

    const id = req.params.id;

    try {
      const {
        rows: [users],
      } = await findAdmin(email);

      if (users.role === 'customer') {
        return response(
          res,
          404,
          false,
          null,
          `only role admin can't delete airport`
        );
      }

      const {
        rows: [airport],
      } = await findAirport(id);

      if (!airport) {
        return response(
          res,
          404,
          false,
          null,
          'airport not found, check again'
        );
      }

      await deleteAirport(id);
      response(res, 200, true, airport, 'delete airport success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'delete airport fail');
    }
  },
};

exports.AirportController = AirportController;
