const { db } = require('./database.js');

let messages = [];

const createTable = (callback) => {
  const sql = `
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      message TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `;
  db().run(sql, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Table created or exists.');
      if (callback) callback();
    }
  });
};

const saveMessage = (message, callback) => {
  const sql = `INSERT INTO messages (message) VALUES (?)`;
  db().run(sql, message, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Message saved successfully.');
      if (callback) callback();
    }
  });
};

const getMessages = (callback) => {
  const sql = `SELECT * FROM messages`;
  db().all(sql, (err, rows) => {
    if (err) {
      console.error(err.message);
    } else {
      messages = rows;
      if (callback) callback(messages);
    }
  });
};

module.exports = {
  saveMessage,
  getMessages,
};