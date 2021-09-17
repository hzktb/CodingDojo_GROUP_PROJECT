const UserController = require("../controllers/user.controllers");
const { authenticate } = require("../middleware/jwt.middleware");

module.exports = (app) => {
  app.get("/api/users/getOne/:id", authenticate, UserController.findOne);
  app.post("/api/users/register", authenticate, UserController.register);
  app.post("/api/users/login", authenticate, UserController.login);
  app.put("/api/users/logout", authenticate, UserController.logout);
  app.put("/api/users/update", authenticate, UserController.update);
};
