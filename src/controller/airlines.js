const { response } = require(`../middleware/common`);
const { v4: uuidv4 } = require("uuid");
const cloudinary = require("../config/photo");
const {
  insert,
  update,
  getAll,
  deleteData,
  detail,
  findAdmin,
  findAirlines,
  countAll,
} = require(`../model/airlines`);

const AirlinesController = {
  insert: async (req, res) => {
    try {
      const { email } = req.payload;

      const {
        rows: [users],
      } = await findAdmin(email);

      if (users.role === "customer") {
        return response(
          res,
          404,
          false,
          null,
          `only role admin can't delete ticket`
        );
      }

      const id = uuidv4();
      const image = await cloudinary.uploader.upload(req.file.path, {
        folder: "toko",
      });

      const data = {
        id,
        ai_name: req.body.ai_name,
        logo: image.url,
        pic: req.body.pic,
        phonenumber: req.body.phonenumber,
      };

      await insert(data);
      return response(res, 200, true, data, "ADD AIRLINES DATA SUCCESS");
    } catch (error) {
      return response(res, 404, true, error, "ADD AIRLINES DATA FAILED");
    }
  },
  update: async (req, res) => {
    try {
      const { email } = req.payload;
      const id = req.params.id;

      const {
        rows: [users],
      } = await findAdmin(email);

      if (users.role === "customer") {
        return response(
          res,
          404,
          false,
          null,
          `only role admin can't delete ticket`
        );
      }

      const {
        rows: [airlines],
      } = await findAirlines(id);

      if (!airlines) {
        return response(
          res,
          404,
          false,
          null,
          "airlines not found, check again"
        );
      }

      const image = await cloudinary.uploader.upload(req.file.path, {
        folder: "toko",
      });

      const data = {
        id,
        ai_name: req.body.ai_name,
        logo: image.url,
        pic: req.body.pic,
        phonenumber: req.body.phonenumber,
      };

      await update(data);
      return response(res, 200, true, null, "UPDATE AIRLINES DATA SUCCESS");
    } catch (error) {
      return response(res, 404, true, error, "UPDATE AIRLINES DATA FAILED");
    }
  },
  deleteData: async (req, res) => {
    try {
      const { email } = req.payload;
      const id = req.params.id;

      const {
        rows: [users],
      } = await findAdmin(email);

      if (users.role === "customer") {
        return response(
          res,
          404,
          false,
          null,
          `only role admin can't delete ticket`
        );
      }

      const {
        rows: [airlines],
      } = await findAirlines(id);

      if (!airlines) {
        return response(
          res,
          404,
          false,
          null,
          "airlines not found, check again"
        );
      }

      await deleteData(id);
      return response(res, 200, true, null, "DELETE AIRLINES DATA SUCCESS");
    } catch (error) {
      return response(res, 404, true, error, "DELETE AIRLINES DATA FAILED");
    }
  },
  detail: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await detail(id);
      return response(
        res,
        200,
        true,
        result.rows,
        "DELETE AIRLINES DATA SUCCESS"
      );
    } catch (error) {
      return response(res, 404, true, error, "DELETE AIRLINES DATA FAILED");
    }
  },
  getAllData: async (req, res, next) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 5;
      const sortBy = req.query.sortBy || "id";
      const sortOrder = req.query.sortOrder || "DESC";
      const search = req.query.search || "";
      const offset = (page - 1) * limit;

      const result = await getAll({
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

      response(
        res,
        200,
        true,
        result.rows,
        "get airlines data success",
        pagination
      );
    } catch (error) {
      console.log(error);
      response(res, 404, false, null, " get airlines data failed");
    }
  },
};

exports.AirlinesController = AirlinesController;
