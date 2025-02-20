DROP DATABASE IF EXISTS pod_db_dev;
CREATE DATABASE pod_db_dev;

\c pod_db_dev;

CREATE TABLE file_record (
    id SERIAL PRIMARY KEY,
    file_name VARCHAR(255) UNIQUE NOT NULL
);