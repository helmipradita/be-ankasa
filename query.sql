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

CREATE TABLE tbl_portofolio1 (
    id SERIAL PRIMARY KEY,
    nama_app VARCHAR,
	link_repo VARCHAR,
	tipe_repo VARCHAR,
	photo VARCHAR,
	employee_id VARCHAR REFERENCES tbl_employee(id)
);