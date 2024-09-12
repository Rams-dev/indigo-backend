const router = require('express').Router()
const {get, store, show, update, destroy } = require("../controllers/eventsController")

router.get("/events", get)
router.post("/events", store)
router.get("/events/:id", show)
router.put("/events/:id", update)
router.delete("/events/:id", destroy)

module.exports = {router}