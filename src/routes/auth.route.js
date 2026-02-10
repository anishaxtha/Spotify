const express = require("express")
const authController = require("../controllers/auth.controller")



const router = express.Router()
0
router.post("/register", authController.registerUser)

router.post("/login", authController.loginUser)

module.exports = router;