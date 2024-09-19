const router = require('express').Router()
const rolRoute = require('./rolesRoute')
const eventsRoute = require('./eventsRoute')
const usersRoute = require('./usersRoute')
const authRoute = require('./authRoute')
const verifyToken = require('../jwt/verifyToken')





router.use(authRoute.router)
router.use(verifyToken, rolRoute.router)
router.use(verifyToken, eventsRoute.router)
router.use(verifyToken, usersRoute.router)


module.exports = router