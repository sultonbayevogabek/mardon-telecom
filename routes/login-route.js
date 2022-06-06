const router = require('express').Router()

router.get('/', require('../controllers/login-get'))

module.exports = {
   route: '/login',
   router
}