CREATE DATABASE <Name>;

CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    name character varying(255),
    content text,
    user_id integer REFERENCES "user"(id)
);