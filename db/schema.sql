-- Create and connect to database
DROP DATABASE IF EXISTS clothes_db;
CREATE DATABASE clothes_db;

\c clothes_db

-- Create tables for data
DROP TABLE IF EXISTS clothes;

CREATE table clothes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    brand VARCHAR(50),
    category VARCHAR(30) NOT NULL,
    img_url TEXT,
    shop_url TEXT,
    is_favorite BOOLEAN,
    is_owned BOOLEAN,
    is_selected BOOLEAN
);

DROP TABLE IF EXISTS outfits;

CREATE TABLE outfits (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    img1_url TEXT,
    img2_url TEXT,
    img3_url TEXT,
    img4_url TEXT,
    img5_url TEXT,
    img6_url TEXT
);

