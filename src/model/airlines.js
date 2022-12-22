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

const getAll = () => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM airlines`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
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

module.exports = {
  insert,
  detail,
  update,
  getAll,
  deleteData,
};
