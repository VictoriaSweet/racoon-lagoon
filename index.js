// const express = require("express");
// const db = require("./db");
// const app = express();
// const port = 3000;
// const bodyParser = require("body-parser");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/employees", async (req, res) => {
//   try {
//     const result = await db.pool
//       .getConnection()
//       .then((conn) => {
//         conn
//           .query("SELECT * FROM employees")
//           .then((rows) => {
//             return rows;
//             console.log(rows); //[ {val: 1}, meta: ... ]
//             // return conn.query("INSERT INTO myTable value (?, ?)", [
//             //   1,
//             //   "mariadb",
//             // ]);
//           })
//           .then((res) => {
//             // console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
//             conn.end();
//           })
//           .catch((err) => {
//             //handle error
//             conn.end();
//           });
//       })
//       .catch((err) => {
//         //not connected
//         console.error(err);
//       });
//     res.send(result);
//   } catch (err) {
//     throw err;
//   }
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));

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

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "penguin",
  port: 3306,
  user: "root",
  password: "your-password",
  database: "employee_tracker",
  // acquireTimeout: 1000000,
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
