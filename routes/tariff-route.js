const router = require('express').Router()

router.get('/', require('../controllers/tariff-get'))

module.exports = {
   route: '/tariff',
   router
}