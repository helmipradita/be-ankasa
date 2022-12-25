const Pool = require('../config/db');

const addBooking = (data) => {
  const { id, id_users, id_airlines, id_tickets, tittle, name, country } = data;
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO booking(id,id_airlines,id_users,id_tickets,passenger_tittle,passenger_name,passenger_country
        ) VALUES('${id}','${id_airlines}','${id_users}','${id_tickets}','${tittle}','${name}','${country}')`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};
const countAll = () => {
  return Pool.query('SELECT COUNT(*) AS total FROM booking');
};

const delBooking = (id) => {
  return new Promise((resolve, reject) => {
    Pool.query(`DELETE FROM booking WHERE id='${id}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
};

const updateBooking = (data) => {
  const { id, tittle, name, country } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE booking SET passenger_tittle='${tittle}',passenger_name='${name}',passenger_country='${country}' where id='${id}'`,
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

const updateStatusPayment = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE booking SET payment='1' where id='${id}'`,
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

const getBookingAdmin = ({
  searchid,
  tickets,
  fullname,
  sortBy,
  sortOrder,
  limit,
  offset,
}) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT bo.id, bo.id_users, users.fullname as fullname, bo.id_tickets,
          ai.airlines_names as airlines_names,
          dep.name as departure_name, dep.code as departure_code,
          arr.name as arrival_name, arr.code as  arrival_code,
          tic.departure, tic.arrive, tic.gate, tic.terminal, tic.type, tic.code,
          bo.payment
      FROM booking as bo
      INNER JOIN airlines as ai ON bo.id_airlines = ai.id
      INNER JOIN users as users ON bo.id_users = users.id
      INNER JOIN tickets tic ON bo.id_tickets = tic.id
      INNER JOIN airport dep ON tic.departure_id = dep.id
      INNER JOIN airport arr ON tic.arrival_id = arr.id
      WHERE bo.id_users
        ILIKE '%${searchid}%' AND users.fullname
        ILIKE '%${fullname}%' AND bo.id_tickets
        ILIKE '%${tickets}%' ORDER BY ${sortBy} ${sortOrder}
        LIMIT ${limit} OFFSET ${offset}
      `,
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

const allBookUser = ({
  id_users,
  search,
  sortBy,
  sortOrder,
  limit,
  offset,
}) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT bo.id, bo.id_users, users.fullname as fullname, bo.id_tickets,
          ai.airlines_names as airlines_names,
          dep.name as departure_name, dep.code as departure_code,
          arr.name as arrival_name, arr.code as  arrival_code,
          tic.departure, tic.arrive, tic.arrive, tic.gate, tic.terminal, tic.type, tic.code,
          bo.payment
      FROM booking as bo
      INNER JOIN airlines as ai ON bo.id_airlines = ai.id
      INNER JOIN users as users ON bo.id_users = users.id
      INNER JOIN tickets tic ON bo.id_tickets = tic.id
      INNER JOIN airport dep ON tic.departure_id = dep.id
      INNER JOIN airport arr ON tic.arrival_id = arr.id
      WHERE bo.id_users = '${id_users}' AND ai.airlines_names
        ILIKE '%${search}%' ORDER BY ${sortBy} ${sortOrder} 
        LIMIT ${limit} OFFSET ${offset}
      `,
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

const detailBook = (id, id_users) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT bo.id, bo.id_users, users.fullname as fullname, bo.id_tickets,
          ai.airlines_names as airlines_names,
          dep.name as departure_name, dep.code as departure_code,
          arr.name as arrival_name, arr.code as  arrival_code,
          tic.departure, tic.arrive, tic.arrive, tic.gate, tic.terminal, tic.type, tic.code,
          bo.passenger_tittle, bo.passenger_name, bo.passenger_country, bo.payment
      FROM booking as bo
      INNER JOIN airlines as ai ON bo.id_airlines = ai.id
      INNER JOIN users as users ON bo.id_users = users.id
      INNER JOIN tickets tic ON bo.id_tickets = tic.id
      INNER JOIN airport dep ON tic.departure_id = dep.id
      INNER JOIN airport arr ON tic.arrival_id = arr.id
      WHERE bo.id = '${id}'
      `,
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
  addBooking,
  delBooking,
  updateBooking,
  updateStatusPayment,
  getBookingAdmin,
  detailBook,
  allBookUser,
  countAll,
};
