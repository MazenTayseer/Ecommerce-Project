const {ObjectId} = require("mongodb");
const {insertOne, find, findOne, update, deleteOne} = require("./base");

class BaseModel {
  name;

  async insertOne(data) {
    return await insertOne(this.name, data)
  }

  async find(filter = {}) {
    return await find(this.name, filter)
  }

  async findOne(id) {
    try {
      return await findOne(this.name, {_id: ObjectId(id)})

    } catch (e) {
      return null
    }
  }

  async update(id, params) {
    try {
      return await update(this.name, id, params)
    } catch (e) {
      return null
    }
  }

  async delete(id) {
    try {
      return await deleteOne(this.name, id)
    } catch (e) {
      return null
    }
  }
}

module.exports = {
  BaseModel
}
