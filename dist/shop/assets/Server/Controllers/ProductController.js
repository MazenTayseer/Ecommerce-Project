const {ProductService} = require("../Service/ProductService");
const {Product} = require("../database/Product");

class ProductController {

  async list(req, res) {
    let service = new ProductService();

    res.json({
      list: await service.list(req.user)
    })
  }

  async viewOne(req, res) {
    const id = req.params.id;

    let service = new ProductService();
    res.json({
      product: await service.oneProduct(id)
    });
  }

  async create(req, res) {
    let product = new Product();
    let data = req.body;
    // data.isDeleted = false
    await product.insertOne(data);
    res.json({
      message: "Product created successfully"
    })
  }

  async update(req, res) {
    const id = req.params.id;
    const {name, price, availability} = req.body

    let service = new ProductService();
    res.json({
      product: await service.update(id, {name, price, availability})
    });
  }

  async delete(req, res) {
    const id = req.params.id;

    let service = new ProductService();
    res.json({
      product: await service.delete(id)
    });
  }
}

module.exports = {
  ProductController
}
