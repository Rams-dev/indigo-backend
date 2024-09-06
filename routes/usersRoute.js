const router = require('express').Router()
const {get, store, show, destroy } = require("../controllers/UserController")

router.get("/user", get)
router.post("/user", store)
router.get("/user/:id", show)
router.delete("/user/:id", destroy)

module.exports = {router}