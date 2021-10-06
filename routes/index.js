const router = require('express').Router()

router.use('/api', require('./workoutRoutes.js'))
router.use('/', require('./html.js'))

module.exports = router