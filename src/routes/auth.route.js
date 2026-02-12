const express = require("express")
const authController = require("../controllers/auth.controller")
const validationRules = require("../middleware/auth.validation")


const router = express.Router()
0
router.post("/register",validationRules.registerUserValidationRules, authController.registerUser)

router.post("/login", authController.loginUser)

router.post("/logout", authController.logoutUser)

module.exports = router;