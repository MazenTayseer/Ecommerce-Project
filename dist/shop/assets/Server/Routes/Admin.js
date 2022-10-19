const express = require("express");
const {ProductController} = require("../Controllers/ProductController");
const {AuthController} = require("../Controllers/AuthController");
const {AdminMiddleware} = require("../Middlewares/AdminMiddleware");
const adminApp = express();

productController = new ProductController();
authController = new AuthController();

adminApp.use(AdminMiddleware)

// list
adminApp.get("/product", productController.list)

// create
adminApp.post("/product", productController.create)

// update
adminApp.put("/product/:id", productController.update)
adminApp.get("/product/:id", productController.viewOne);

// delete
adminApp.delete("/product/:id", productController.delete)


// authentication
adminApp.post("/auth/login", authController.login)
adminApp.post("/auth/register", authController.register);

module.exports = {
  adminApp
}
