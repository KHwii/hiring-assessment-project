const mysql = require("mysql");

const userConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "HA_project"
});

const userTodosConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "HA_project"
});

exports.userConnection = userConnection;
exports.userTodosConnection = userTodosConnection;
