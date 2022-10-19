const {Product} = require("../database/Product");

class ProductService {
  async list(user) {
    if (!user) {
      return [{name: "Unauthorized"}]
    }

    let product = new Product();
    return product.find(/*{"availability": true}*/);
  }

  async oneProduct(id) {
    let product = new Product();
    return await product.findOne(id)
  }

  async update(id, params) {
    let product = new Product();
    return await product.update(id, params)
  }

  async delete(id) {
    let product = new Product();
    return await product.delete(id)
  }
}

module.exports = {
  ProductService
}
