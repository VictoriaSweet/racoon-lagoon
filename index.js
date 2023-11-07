const db = require("./lib/db");

const CLI = require("./lib/cli.js");
const cli = new CLI();

cli.run().then((output) => {
  console.log(output);
});
