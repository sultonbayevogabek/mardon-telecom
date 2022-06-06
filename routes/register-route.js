const router = require('express').Router()

router.get('/', require('../controllers/register-get'))

router.post('/', require('../controllers/register-post'))

module.exports = {
   route: '/register',
   router
}