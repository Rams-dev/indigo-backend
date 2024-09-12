const router = require('express').Router()
const {get, store, show, update,activeUser, destroy } = require("../controllers/UserController")

router.get("/user", get)
router.post("/user", store)
router.get("/user/:id", show)
router.put("/user/:id", update)
router.put("/user/activate/:id", activeUser)
router.delete("/user/:id", destroy)

module.exports = {router}