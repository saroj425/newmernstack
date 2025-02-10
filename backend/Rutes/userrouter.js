const express = require("express")

const router = express.Router()
const usercontroller = require("../controllers/usercontroller")
const upload = require("../multer/imageconfig")


router.post("/register",upload.single("img"),usercontroller.registeruser)

module.exports = router;