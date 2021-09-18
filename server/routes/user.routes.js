const UserController = require("../controllers/user.controllers");
const { authenticate } = require("../middleware/jwt.middleware");

module.exports = (app) => {
  app.get("/api/users/getOne/:id", UserController.findOne);
  app.post("/api/users/register", UserController.register);
  app.post("/api/users/login", UserController.login);
  app.post("/api/users/logout", UserController.logout);
  app.put("/api/users/update", authenticate, UserController.update);
};
