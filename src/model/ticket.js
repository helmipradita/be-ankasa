const Pool = require(`../config/db`);

const insertTicket = (data) => {
  const {
    id,
    airlines_id,
    departure_city,
    arrival_city,
    departure,
    arrive,
    price,
    stock,
  } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO tickets(id, airlines_id,  departure_city, arrival_city, departure , arrive , price , stock) 
          VALUES('${id}','${airlines_id}','${departure_city}','${arrival_city}','${departure}','${arrive}','${price}','${stock}')`,
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

const selectAll = ({ limit, offset, sortBy, sortOrder, search }) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT tickets.id, airlines.airlines_names as airlines_names, airlines.logo as logo, tickets.departure_city, tickets.arrival_city, tickets.departure , tickets.arrive, tickets.price, tickets.stock
      FROM tickets
      INNER JOIN airlines
      ON tickets.airlines_id = airlines.id WHERE airlines.airlines_names
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
  return Pool.query('SELECT COUNT(*) AS total FROM tickets');
};

const selectById = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT tickets.id, airlines.airlines_names as airlines_names, airlines.logo as logo, tickets.departure_city, tickets.arrival_city, tickets.departure , tickets.arrive, tickets.price, tickets.stock, tickets.created_at, tickets.updated_at
    FROM tickets
    INNER JOIN airlines
    ON tickets.airlines_id = airlines.id WHERE tickets.id='${id}'`,
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
  const { id, departure_city, arrival_city, departure, arrive, price, stock } =
    data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE tickets SET departure_city='${departure_city}', arrival_city='${arrival_city}', departure='${departure}', arrive='${arrive}', price='${price}', stock='${stock}', updated_at=NOW() WHERE id='${id}'`,
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

const findTicket = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM tickets WHERE id='${id}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const deleteTicket = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`DELETE FROM tickets WHERE id='${id}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

module.exports = {
  insertTicket,
  findAdmin,
  findAirlines,
  selectAll,
  countAll,
  selectById,
  update,
  findTicket,
  deleteTicket,
};
