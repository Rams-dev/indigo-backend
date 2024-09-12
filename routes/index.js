const router = require('express').Router()
const rolRoute = require('./rolesRoute')
const eventsRoute = require('./eventsRoute')
const usersRoute = require('./usersRoute')



router.use(rolRoute.router)
router.use(eventsRoute.router)
router.use(usersRoute.router)


module.exports = router