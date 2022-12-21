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