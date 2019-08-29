const models = require("../models");

module.exports = {
  users: {
    get: function(req, res) {
      models.users
        .get()
        .then(result => res.send(result))
        .catch(e => console.log(e));
    },
    getEachUser: function(req, res) {
      models.users
        .getEachUser(req.params.id)
        .then(result => res.send(result))
        .catch(e => console.log(e));
    }
  },

  userTodos: {
    get: function(req, res) {
      models.userTodos
        .get(req.query.userId)
        .then(result => res.send(result))
        .catch(e => console.log(e));
    }
  }
};
