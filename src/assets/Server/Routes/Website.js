const express = require("express");
const {ProductController} = require("../Controllers/ProductController");
const websiteApp = express();

productController = new ProductController();

websiteApp.get("/product", productController.list)


module.exports = {
  websiteApp
}
