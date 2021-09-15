const UserController = require("../controllers/user.controllers");

module.exports = (app) => {
  app.get("/api/users/getOne/:id", UserController.findOne);
  app.post("/api/users/register", UserController.register);
  app.post("/api/users/login", UserController.login);
  app.put("/api/users/update", UserController.update);
};
