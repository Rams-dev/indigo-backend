const router = require('express').Router()
const {get, store, show, update, destroy } = require("../controllers/holidayController")

router.get("/holidays", get)
router.post("/holidays", store)
router.get("/holidays/:id", show)
router.put("/holidays/:id", update)
router.delete("/holidays/:id", destroy)

module.exports = {router}