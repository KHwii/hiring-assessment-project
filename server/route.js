var controller = require("./controllers/index");
var router = require("express").Router();
var cors = require("cors");

router.get("/users", cors(), controller.users.get);

router.get("/users/:id", cors(), controller.users.getEachUser);

router.get("/todos", cors(), controller.userTodos.get);

module.exports = router;
