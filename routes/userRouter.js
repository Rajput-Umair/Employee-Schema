const {createUser}= require("../controller/userController")
const routes = require("express").Router();


routes.post("/createUser", createUser)

module.exports = routes