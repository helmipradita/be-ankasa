const { response } = require(`../middleware/common`);
const {
  register,
  findEmail,
  verification,
  changePassword,
  updateDataProfile,
} = require(`../model/user`);
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const {
  generateToken,
  generateRefreshToken,
  decodeToken,
} = require(`../helpers/auth`);
const email = require('../middleware/email');
const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const Port = process.env.PORT;
const Host = process.env.HOST;

const UserController = {
  register: async (req, res, next) => {
    let {
      rows: [users],
    } = await findEmail(req.body.email);

    if (users) {
      return response(res, 404, false, 'email already use', ' register fail');
    }

    // create otp
    let digits = '0123456789';
    let otp = '';
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }

    let password = bcrypt.hashSync(req.body.password);
    let data = {
      id: uuidv4(),
      fullname: req.body.fullname,
      email: req.body.email,
      password,
      otp,
    };
    try {
      const result = await register(data);
      if (result) {
        let verifUrl = `http://${Host}:${Port}/users/${req.body.email}/${otp}`;
        let text = `Hello ${req.body.fullname} \n Thank you for join us. Please confirm your email by clicking on the following link ${verifUrl}`;
        const subject = `${otp} is your otp`;
        let sendEmail = email(req.body.email, subject, text);
        if (sendEmail == 'email not sent!') {
          return response(res, 404, false, null, 'register fail');
        }
        response(
          res,
          200,
          true,
          { email: data.email },
          'register success please check your email'
        );
      }
    } catch (err) {
      response(res, 404, false, err, ' register fail');
    }
  },
  verificationOtp: async (req, res) => {
    const { email, otp } = req.body;
    const {
      rows: [users],
    } = await findEmail(email);
    if (!users) {
      return response(res, 404, false, null, ' email not found');
    }

    if (users.otp == otp) {
      const result = await verification(req.body.email);
      return response(
        res,
        200,
        true,
        req.body.email,
        ' verification email success'
      );
    }
    return response(
      res,
      404,
      false,
      null,
      ' wrong otp please check your email'
    );
  },
  login: async (req, res, next) => {
    let {
      rows: [users],
    } = await findEmail(req.body.email);

    if (!users) {
      return response(res, 404, false, null, ' email not found');
    }

    const password = req.body.password;
    const validation = bcrypt.compareSync(password, users.password);
    if (!validation) {
      return response(res, 404, false, null, 'wrong password');
    }

    if (users.status == 0) {
      return response(res, 404, false, null, ' email not verified');
    }

    delete users.password;
    delete users.status;
    delete users.otp;
    let payload = {
      id: users.id,
      fullname: users.fullname,
      email: users.email,
      role: users.role,
    };
    let accessToken = generateToken(payload);
    let refToken = generateRefreshToken(payload);

    users.token = accessToken;
    users.refreshToken = refToken;
    response(res, 200, true, users, 'login success');
  },
  forgotPassword: async (req, res) => {
    const {
      rows: [users],
    } = await findEmail(req.body.email);
    if (!users) {
      return response(res, 404, false, null, ' email not found');
    }
    let payload = {
      email: req.body.email,
    };
    const token = generateToken(payload);

    let text = `Hello ${users.fullname} \n please click link below to reset password http://localhost:8000/users/resetPassword/${token}`;
    const subject = `Reset Password`;
    let sendEmail = email(req.body.email, subject, text);
    if (sendEmail == 'email not sent!') {
      return response(res, 404, false, null, 'email fail');
    }
    return response(res, 200, true, null, 'send email success');
  },
  resetPassword: async (req, res) => {
    const token = req.params.token;
    const decoded = decodeToken(token);
    const {
      rows: [users],
    } = await findEmail(decoded.email);
    if (!users) {
      return response(res, 404, false, null, ' token not found');
    }
    let password = bcrypt.hashSync(req.body.password);
    const result = await changePassword(decoded.email, password);
    return response(res, 200, true, result.body, 'change password success');
  },
  profile: async (req, res, next) => {
    const { email } = req.payload;

    try {
      const {
        rows: [users],
      } = await findEmail(email);

      if (users === undefined) {
        res.json({
          message: 'invalid token',
        });
        return;
      }

      delete users.password;
      delete users.otp;
      delete users.otp_expired;
      delete users.status;
      response(res, 200, true, users, 'get data success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'get data fail');
    }
  },
  update: async (req, res, next) => {
    try {
      const { phone, city, address, poscode } = req.body;

      const dataProfile = {
        id: req.payload.id,
        phone: req.body.phone,
        city: req.body.city,
        address: req.body.address,
        poscode: req.body.poscode,
      };
      await updateDataProfile(dataProfile);
      response(res, 200, true, dataProfile, 'update data success');
    } catch (error) {
      console.log(error);
      response(res, 404, false, 'update data failed');
    }
  },
};

exports.UserController = UserController;
