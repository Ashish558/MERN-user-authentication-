

var express = require('express')
var router = express.Router()

var authRoute = require('./user/auth')
router.use(authRoute)

var passwordResetRoute = require('./password-reset')
router.use('/password-reset', passwordResetRoute)



module.exports = router