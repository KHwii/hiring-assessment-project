const express = require("espress");
const parser = require("body-parser");
const cors = require("cors");

let app = express();
module.exports.app = app;

app.set("port", 8000);
app.use(parser.json());
app.use(cors());
