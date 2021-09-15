const FoodControllers = require("../controllers/food.controllers");

module.exports = (app) => {
  app.get("/api/foods/findAll", FoodControllers.findAll);
  app.post("/api/foods/create", FoodControllers.create);
  app.put("/api/foods/update/:id", FoodControllers.update);
  app.delete("/api/foods/delete/:id", FoodControllers.delete);
};
