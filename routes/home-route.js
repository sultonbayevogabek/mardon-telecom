const router = require('express').Router()

router.get('/', require('../controllers/home-get'))

router.get('/404', require('../controllers/404-get'))

router.get('/logout', async (req, res) => {
   res.clearCookie('token').redirect('/login')
})

module.exports = {
   route: '/',
   router
}