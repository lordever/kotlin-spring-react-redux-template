CREATE TABLE if NOT EXISTS users (
    id integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username varchar(50),
    email varchar(50),
    password_hash varchar(100),
    created_date timestamp,
    last_modified_date timestamp
);