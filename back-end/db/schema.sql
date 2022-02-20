DROP DATABASE IF EXISTS my_spectrum;

CREATE DATABASE my_spectrum;

\c my_spectrum;

CREATE TABLE toys (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    description TEXT,
    price INT,
    category TEXT,
    type TEXT,
    is_available BOOLEAN,
    image TEXT
);
