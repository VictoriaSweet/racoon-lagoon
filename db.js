// const mariadb = require("mariadb");

// const pool = mariadb.createPool({
//   host: "penguin",
//   port: 3306,
//   user: "root",
//   password: "your-password",
//   database: "employee_tracker",
// });

// if (pool) {
//   console.log("Connected to the database");
// }

// // Expose a method to establish connection with MariaDB SkySQL
// module.exports =
//   // Object.freeze(
//   {
//     pool: pool,
//   };
// // );

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "penguin",
  port: 3306,
  user: "root",
  password: "your-password",
  database: "employee_tracker",
  acquireTimeout: 1000000,
  connectTimeout: 1000000,
  waitForConnections: true,
  queueLimit: 0,
});
// and to make sure if you are connected or not use this:

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected..");
  }
});
