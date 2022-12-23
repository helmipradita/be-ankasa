-- Active: 1671615118472@@pijardb-do-user-13063919-0.b.db.ondigitalocean.com@25060@telegram
CREATE TABLE users (
    id VARCHAR PRIMARY KEY,
    fullname VARCHAR,
    email VARCHAR,
    password VARCHAR,
    phone VARCHAR DEFAULT NULL,
    city VARCHAR DEFAULT NULL,
    address VARCHAR DEFAULT NULL,
    poscode VARCHAR DEFAULT NULL,
    photo VARCHAR DEFAULT 'https://res.cloudinary.com/dnu5su7ft/image/upload/v1671602986/flyer/default_profile.png',
    role VARCHAR DEFAULT 'customer',
    otp VARCHAR,
    otp_expired DATE,
    status VARCHAR DEFAULT '0'
);

DROP TABLE users;

CREATE TABLE tickets (
    id VARCHAR PRIMARY KEY,
    airlines_id VARCHAR,
	departure_city VARCHAR,
	arrival_city VARCHAR,
	departure TIMESTAMP,
	arrive TIMESTAMP,
    price INTEGER,
    stock INTEGER,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NULL
);

DROP TABLE tickets;

CREATE TABLE tbl_bookings (
    id VARCHAR PRIMARY KEY,
    users_id VARCHAR,
	tickets_id VARCHAR,
	passenger_title VARCHAR,
	passenger_name VARCHAR,
    passenger_country VARCHAR,
    payment INTEGER,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NULL
);

DROP TABLE tbl_bookings;

UPDATE tickets SET stock = stock - 1 FROM tbl_bookings
  WHERE tickets.id = '39807d02-d484-48ad-9f10-feb074bc077d';


CREATE TABLE tbl_book (
    id VARCHAR PRIMARY KEY,
    users_id VARCHAR,
	ticket_id VARCHAR
);

CREATE TABLE tbl_ticket (
    id VARCHAR PRIMARY KEY,
    stock INT
);

DROP TABLE tbl_book;

CREATE OR REPLACE FUNCTION auditstock() RETURNS TRIGGER AS $example_table$
BEGIN
UPDATE tickets SET stock = stock - 1, updated_at = NOW() FROM booking WHERE tickets.id = booking.id_tickets;
RETURN NEW;
END;
$example_table$ LANGUAGE plpgsql;

CREATE TRIGGER update_stock
AFTER INSERT ON booking FOR EACH ROW EXECUTE PROCEDURE auditstock();
