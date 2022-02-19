DROP DATABASE IF EXISTS envy_woodworks;

CREATE DATABASE envy_woodworks;

\c envy_woodworks;

CREATE TABLE wood_types (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    description TEXT,
    is_available BOOLEAN,
    price INT,
    lengths TEXT,
    image TEXT
);
