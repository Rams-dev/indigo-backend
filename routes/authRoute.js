const router = require('express').Router()
const {auth} = require("../controllers/authController")

router.post("/auth", auth)
// router.post("/user", store)
// router.get("/user/:id", show)
// router.put("/user/:id", update)
// router.put("/user/activate/:id", activeUser)
// router.delete("/user/:id", destroy)

module.exports = {router}