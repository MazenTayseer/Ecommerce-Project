const {UsersService} = require("../Service/UsersService");

class AuthController {
  async login(req, res) {
    const {username, password} = req.body
    let userService = new UsersService();
    let user = await userService.login(username, password)

    res.json({user})
  }

  async register(req, res) {

    const {username, password} = req.body;

    let userService = new UsersService;
    let user = await userService.register(username, password)

    res.json({
      user
    });
  }

}

module.exports = {
  AuthController
}
