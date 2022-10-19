const express = require("express");
const bodyParser = require("body-parser")
const {adminApp} = require("./Routes/Admin");


const mainApp = express();
mainApp.use(bodyParser.json())
mainApp.use("/api", adminApp)

mainApp.listen(8080, () => {
  console.log("Server running on port " + 8080)
})


