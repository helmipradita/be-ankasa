const Pool = require("../config/db");

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
  return Pool.query("SELECT COUNT(*) AS total FROM booking");
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
      `SELECT bo.id,bo.id_users,bo.id_tickets,bo.payment,ai.airlines_names as airlines_names
    ,users.fullname as fullname,ti.arrival_city as arrival_city,ti.departure_city as departure_city,ti.departure as departure FROM booking as bo JOIN airlines as ai ON bo.id_airlines = ai.id
     JOIN tickets as ti ON bo.id_tickets = ti.id JOIN users as users ON bo.id_users = users.id WHERE bo.id_users ILIKE '%${searchid}%' AND users.fullname ILIKE '%${fullname}%' AND bo.id_tickets ILIKE '%${tickets}%' ORDER BY ${sortBy} ${sortOrder} 
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
      `SELECT bo.id,bo.id_users,bo.payment,ai.airlines_names as airlines_names
      ,ti.arrival_city as arrival_city,ti.departure_city as departure_city,ti.departure as departure,ti.code as code FROM booking as bo JOIN airlines as ai ON bo.id_airlines = ai.id
       JOIN tickets as ti ON bo.id_tickets = ti.id WHERE bo.id_users = '${id_users}' AND ti.arrival_city ILIKE '%${search}%' ORDER BY ${sortBy} ${sortOrder} 
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

const detailBook = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT bo.id,ti.code as code , ti.class as class ,ti.terminal as terminal,
      ti.gate as gate,ti.departure_time as departure_time,ti.departure_city
      as departure_city,ti.arrival_city as arrival_city FROM booking as bo JOIN
      airlines as ai ON bo.id_airlines = ai.id JOIN tickets as ti ON bo.id_tickets = ti.id
      WHERE bo.id = '${id}'`,
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
