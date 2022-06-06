const router = require('express').Router()

router.get('/', require('../controllers/faq-get'))

module.exports = {
   route: '/faq',
   router
}