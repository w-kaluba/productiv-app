DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS post;

CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    pword TEXT NOT NULL
);

-- CREATE TABLE user_stat (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     FOREIGN KEY
-- (user_id) REFERENCES user
-- (id),
--     categories TEXT
-- );