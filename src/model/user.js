const Pool = require(`../config/db`);

const registerCustomer = (data) => {
  const { id, fullname, email, password, role, otp } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO users(id, fullname,  email, password, role, otp) 
          VALUES('${id}','${fullname}','${email}','${password}','${role}','${otp}')`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const findEmail = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users where email='${email}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const verification = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE users SET status=1 WHERE email='${email}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const changePassword = (email, password) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE users SET password='${password}' WHERE email='${email}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const updateDataProfile = (data) => {
  const { id, fullname, phone, city, address, poscode, photo } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE users SET fullname='${fullname}', phone='${phone}', city='${city}', address='${address}' ,poscode='${poscode}',photo='${photo}' WHERE id='${id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

const registerAdmin = (data) => {
  const { id, fullname, email, password, role, otp } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO users(id, fullname,  email, password, role, otp) 
          VALUES('${id}','${fullname}','${email}','${password}','${role}','${otp}')`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};

module.exports = {
  registerCustomer,
  findEmail,
  verification,
  changePassword,
  updateDataProfile,
  registerAdmin,
};
