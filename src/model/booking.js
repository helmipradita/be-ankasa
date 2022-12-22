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

const getBookingAdmin = () => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM booking`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    })
  );
};

const allBookUser = (id_users) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT bo.id,bo.payment,ai.airlines_names as airlines_names,ti.departure_city as departure_city
      ,ti.arrival_city as arrival_city,ti.departure_time as departure_time,ti.code as code FROM booking as bo JOIN airlines as ai ON bo.id_airlines = ai.id
       JOIN tickets as ti ON bo.id_tickets = ti.id WHERE bo.id_users = '${id_users}'`,
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
};
