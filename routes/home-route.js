const router = require('express').Router()

router.get('/', require('../controllers/home-get'))

module.exports = {
   route: '/',
   router
}