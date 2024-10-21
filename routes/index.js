const router = require('express').Router()
const rolRoute = require('./rolesRoute')
const eventsRoute = require('./eventsRoute')
const usersRoute = require('./usersRoute')
const authRoute = require('./authRoute')
const holidayRoute = require('./holidayRoute')
// const verifyToken = require('../jwt/verifyToken')

router.use(authRoute.router)
router.use( holidayRoute.router)
router.use( rolRoute.router)
router.use( eventsRoute.router)
router.use( usersRoute.router)


module.exports = router