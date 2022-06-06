const router = require('express').Router()

router.get('/', require('../controllers/contact-get'))

module.exports = {
   route: '/contact',
   router
}