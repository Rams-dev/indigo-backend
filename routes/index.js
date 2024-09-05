const router = require('express').Router()
const rolRoute = require('./rolesRoute')


router.use(rolRoute.router  )


module.exports = router