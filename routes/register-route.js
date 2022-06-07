const router = require('express').Router()
const dontEnterAuthorized = require('../middlewares/dont-enter-authorized-middleware')

router.get('/', dontEnterAuthorized, require('../controllers/register-get'))

router.post('/', dontEnterAuthorized, require('../controllers/register-post'))

module.exports = {
   route: '/register',
   router
}