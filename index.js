const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1.3306",
  user: "penguin",
  password: "your-password",
  database: "employee_tracker",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});
