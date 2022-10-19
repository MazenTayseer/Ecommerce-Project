const {User} = require("../database/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

class UsersService {
  async login(username, password) {
    let userModel = new User();
    let userList = await userModel.find({username: username});

    if (userList.length === 0) {
      return {status: false, message: "User not found!"};
    }

    let user = userList[0];

    if (!(await this.passwordIsMatched(user.password, password.toString()))) {
      return {status: false, message: "password is wrong"};
    }

    return {status: true, user};
  }

  async findById(auth) {
    let userModel = new User();
    return await userModel.findOne(auth);
  }

  async register(username, password) {
    let userModel = new User();

    let canCount = await this.checkUserName(username)
    if (!canCount)
      return {message: "Username already exists!"};

    password = await this.encrypt(password.toString());

    return userModel.insertOne({username, password});
  }

  async checkUserName(username) {
    let userModel = new User;
    let userList = await userModel.find({username});
    return userList.length <= 0;
  }

  async encrypt(password) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) return reject(err);
        resolve(hash);
      })
    });
  }

  async passwordIsMatched(hashed, password) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hashed, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      })
    })
  }
  
}

module.exports = {
  UsersService
}
