const mysql = require("mysql2");

const port = 3306;
const db = mysql.createConnection({
  host: "127.0.0.1",
  port: port,
  user: "root",
  password: "your-password",
  database: "employee_tracker",
});

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Connected to database on port ${port}`);
  }
});

// export the db connection for use in app
module.exports = db;
