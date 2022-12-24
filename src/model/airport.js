const Pool = require(`../config/db`);

const insertData = (data) => {
  const { id, name, code, photo } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO airport(id, name,  code, photo) 
          VALUES('${id}','${name}','${code}','${photo}')`,
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

const findAdmin = (email) => {
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

const selectAll = ({ limit, offset, sortBy, sortOrder, search, filter }) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT * FROM airport WHERE ${filter}
          ILIKE '%${search}%' ORDER BY ${sortBy} ${sortOrder} 
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

const countAll = () => {
  return Pool.query('SELECT COUNT(*) AS total FROM airport');
};

const findAirport = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM airport WHERE id='${id}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const selectById = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM airport WHERE id='${id}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const editAirport = (data) => {
  const { id, name, code, photo } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE airport SET name='${name}',code='${code}', photo='${photo}', updated_at=NOW() WHERE id='${id}'`,
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

const deleteAirport = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`DELETE FROM airport WHERE id='${id}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

module.exports = {
  insertData,
  findAdmin,
  selectAll,
  countAll,
  findAirport,
  selectById,
  editAirport,
  deleteAirport,
};
