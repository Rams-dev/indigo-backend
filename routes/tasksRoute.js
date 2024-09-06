const router = require('express').Router()
const {get, store, show, destroy } = require("../controllers/rolController")

router.get("/task", get)
router.post("/task", store)
router.get("/task/:id", show)
router.delete("/task/:id", destroy)

module.exports = {router}