const { response } = require(`../middleware/common`);
const { v4: uuidv4 } = require("uuid");
const cloudinary = require("../config/photo");
const {
  insert,
  update,
  getAll,
  deleteData,
  detail,
} = require(`../model/airlines`);

const AirlinesController = {
  insert: async (req, res) => {
    try {
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
      console.log(logo);
    }
  },
  update: async (req, res) => {
    try {
      const image = await cloudinary.uploader.upload(req.file.path, {
        folder: "toko",
      });

      const id = req.params.id;
      const data = {
        id,
        ai_name: req.body.ai_name,
        logo: image.url,
        pic: req.body.pic,
        phonenumber: req.body.phonenumber,
      };
      console.log(id);
      console.log(data);
      await update(data);
      return response(res, 200, true, null, "UPDATE AIRLINES DATA SUCCESS");
    } catch (error) {
      return response(res, 404, true, error, "UPDATE AIRLINES DATA FAILED");
    }
  },
  deleteData: async (req, res) => {
    try {
      const id = req.params.id;
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
  getAllData: (req, res, next) => {
    getAll()
      .then((result) =>
        response(res, 200, true, result.rows, "get data success")
      )
      .catch((err) => response(res, 404, false, "get data faill"));
  },
};

exports.AirlinesController = AirlinesController;
