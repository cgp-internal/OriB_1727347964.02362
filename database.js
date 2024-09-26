const sqlite3 = require('sqlite3').verbose();

let db;

const initializeDB = () => {
  db = new sqlite3.Database('chat.db', (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    } else {
      console.log('Connected to the SQLite database.');
      createTable();
    }
  });
};

const createTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      message TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `;
  db.run(sql, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Table created or exists.');
    }
  });
};

module.exports = {
  db: initializeDB,
};