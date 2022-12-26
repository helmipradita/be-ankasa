const Pool = require(`../config/db`);

const insertTicket = (data) => {
  const {
    id,
    airlines_id,
    departure_id,
    arrival_id,
    departure,
    arrive,
    price,
    stock,
    gate,
    terminal,
    type,
    code,
  } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `INSERT INTO tickets(id, airlines_id,  departure_id, arrival_id, departure , arrive , price , stock , gate , terminal , type , code) 
          VALUES('${id}','${airlines_id}','${departure_id}','${arrival_id}','${departure}','${arrive}','${price}','${stock}','${gate}','${terminal}','${type}','${code}')`,
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
      `SELECT tic.id, air.airlines_names as airlines_name, air.logo as airlines_logo,
            dep.name as departure_name, dep.code as departure_code,
            arr.name as arrival_name, arr.code as  arrival_code,
            tic.departure, tic.arrive, 
              to_char( departure, 'HH:MI' ) AS departure_time,
              to_char( departure, 'HH:MI' ) AS arrival_time,  
              to_char( departure, 'Day, DD Month YYYY' ) AS departure_full,
              to_char( arrival, 'Day, DD Month YYYY' ) AS arrival_full,   
              (tic.arrive - tic.departure) AS travel_time,
              tic.price, tic.stock, tic.gate, tic.terminal, tic.type, tic.code, tic.created_at, tic.updated_at
      FROM tickets tic
      INNER JOIN airlines air ON tic.airlines_id = air.id
      INNER JOIN airport dep ON tic.departure_id = dep.id
      INNER JOIN airport arr ON tic.arrival_id = arr.id
      WHERE air.airlines_names
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
      `SELECT tic.id, air.id, air.airlines_names as airlines_name, air.logo as airlines_logo, 
            dep.name as departure_name, dep.code as departure_code,
            arr.name as arrival_name, arr.code as  arrival_code,
            tic.departure, tic.arrive, 
              to_char( departure, 'HH:MI' ) AS departure_time,
              to_char( arrival, 'HH:MI' ) AS arrival_time,  
              to_char( departure, 'Day, DD Month YYYY' ) AS departure_full,
              tic.price, tic.stock, tic.gate, tic.terminal, tic.type, tic.code, tic.created_at, tic.updated_at
      FROM tickets tic
      INNER JOIN airlines air ON tic.airlines_id = air.id
      INNER JOIN airport dep ON tic.departure_id = dep.id
      INNER JOIN airport arr ON tic.arrival_id = arr.id
      WHERE tic.id='${id}'`,
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
  const {
    id,
    airlines_id,
    departure_id,
    arrival_id,
    departure,
    arrive,
    price,
    stock,
    gate,
    terminal,
    type,
    code,
  } = data;
  return new Promise((resolve, reject) =>
    Pool.query(
      `UPDATE tickets SET airlines_id='${airlines_id}',departure_id='${departure_id}', arrival_id='${arrival_id}', departure='${departure}', arrive='${arrive}', price='${price}', stock='${stock}', gate='${gate}', terminal='${terminal}', type='${type}', code='${code}', updated_at=NOW() WHERE id='${id}'`,
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
  findAirport,
  findAirlines,
  selectAll,
  countAll,
  selectById,
  update,
  findTicket,
  deleteTicket,
};
