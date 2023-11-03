const express = require("express");
const db = require("./db");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/employees", async (req, res) => {
  db.query("SELECT * FROM employees", (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
