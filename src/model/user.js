const Pool = require(`../config/db`);

const register = (data) => {
  const { id, fullname, email, password, otp } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO users(id, fullname,  email, password, otp) 
          VALUES('${id}','${fullname}','${email}','${password}','${otp}')`,
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
  const { id, phone, city, address, poscode } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE users SET phone='${phone}', city='${city}', address='${address}' ,poscode='${poscode}' WHERE id='${id}'`,
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
  register,
  findEmail,
  verification,
  changePassword,
  updateDataProfile,
};
