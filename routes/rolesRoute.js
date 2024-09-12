const router = require('express').Router()
const {get, store, show, update, destroy } = require("../controllers/rolController")

router.get("/roles", get)
router.post("/roles", store)
router.get("/roles/:id", show)
router.put("/roles/:id", update)
router.delete("/roles/:id", destroy)

module.exports = {router}