const {UsersService} = require("../Service/UsersService");

async function AdminMiddleware(req, res, next) {

  if (req.path === "/auth/register" || req.path === "/auth/login") {
    return next();
  }
  let auth = req.headers["authorization"]

  let usersService = new UsersService();
  let user = await usersService.findById(auth);

  if (!user) {
    return res.status(401).json({status: "Unauthorized"});
  }

  req.user = user

  next()
}

module.exports = {
  AdminMiddleware
}
