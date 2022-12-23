const Pool = require("../config/db");

const insert = (data) => {
  const { id, ai_name, logo, pic, phonenumber } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO airlines(id,airlines_names,logo,pic,phonenumber) VALUES('${id}','${ai_name}','${logo}','${pic}','${phonenumber}')`,
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

const update = (data) => {
  const { id, ai_name, logo, pic, phonenumber } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE airlines SET airlines_names='${ai_name}',logo='${logo}',pic='${pic}',phonenumber='${phonenumber}' where id='${id}'`,
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

const detail = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM airlines WHERE id='${id}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const getAll = ({ limit, offset, sortBy, sortOrder, search }) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT ai.id,ai.airlines_names,ai.logo,ai.pic,ai.phonenumber,ai.created_at,ai.update_at
    FROM airlines as ai WHERE ai.airlines_names ILIKE '%${search}%' ORDER BY ${sortBy} ${sortOrder} 
    LIMIT ${limit} OFFSET ${offset}`,
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

const deleteData = (id) => {
  return new Promise((resolve, reject) => {
    Pool.query(`DELETE FROM airlines WHERE id='${id}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
};

const findAdmin = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users WHERE email='${email}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const findAirlines = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM airlines WHERE id='${id}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const countAll = () => {
  return Pool.query("SELECT COUNT(*) AS total FROM airlines");
};

module.exports = {
  insert,
  detail,
  update,
  getAll,
  deleteData,
  findAdmin,
  findAirlines,
  countAll,
};
