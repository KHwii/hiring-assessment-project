const express = require("express");
const cors = require("cors");
const router = require("./route");

let app = express();
module.exports.app = app;

app.set("port", 8080);
app.use(express.json());
app.use(cors());

app.use("/", router);

app.options("*", cors());

app.listen(app.get("port"));
console.log("Listening on", app.get("port"));
