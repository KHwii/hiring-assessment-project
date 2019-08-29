const db = require("../db");

module.exports = {
  users: {
    get: function() {
      return new Promise((resolve, reject) => {
        db.userConnection.query("SELECT * FROM users", function(
          error,
          results,
          fields
        ) {
          if (error) {
            reject(error);
          }
          resolve(results);
        });
      });
    },

    getEachUser: function(id) {
      return new Promise((resolve, reject) => {
        db.userConnection.query(
          `SELECT * FROM users WHERE users.id="${id}"`,
          function(error, results, fields) {
            if (error) {
              reject(error);
            }
            resolve(results);
          }
        );
      });
    }
  },

  userTodos: {
    get: function(id) {
      return new Promise((resolve, reject) => {
        db.userTodosConnection.query(
          `SELECT id, title, created_at, updated_at, user_id, IF (completed, "true", "false") as completed FROM userTodos WHERE userTodos.user_id="${id}"`,
          function(error, results, fields) {
            if (error) {
              reject(error);
            }
            resolve(results);
          }
        );
      });
    }
  }
};
