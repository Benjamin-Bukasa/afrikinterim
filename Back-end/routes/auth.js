const express = require("express")
const authUser = express.Router()
const {registerUser,loginUser, currentUser,} = require("../controllers/auth")

authUser.route("/register").post(registerUser)
authUser.route("/login").post(loginUser)
authUser.route("/current-user").post(currentUser)

module.exports = authUser