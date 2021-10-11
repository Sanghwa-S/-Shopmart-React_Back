const express = require(`express`)
const router = express.Router()
const userService = require("../services/UserService.js")

//Create
router.post("/",userService.createUser)

//Get all user
router.get("/",userService.getAllUser)

//Get a user
router.get("/:id",userService.getAUser)

module.exports = router