const router = require('express').Router()
const dontEnterAuthorized = require('../middlewares/dont-enter-authorized-middleware')

router.get('/', dontEnterAuthorized, require('../controllers/login-get'))

router.post('/', dontEnterAuthorized, require('../controllers/login-post'))

module.exports = {
   route: '/login',
   router
}