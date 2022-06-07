const router = require('express').Router()
const dontEnterUnauthorized = require('../middlewares/dont-enter-unauthorized-middleware')
const userMiddleware = require('../middlewares/user-middleware')
const adminMiddleware = require('../middlewares/admin-middleware')

router.get('/', dontEnterUnauthorized, userMiddleware, require('../controllers/cabinet-get'))

router.post('/edit', dontEnterUnauthorized, require('../controllers/cabinet-edit'))

router.get('/mark-as-master/:id', adminMiddleware, require('../controllers/mark-as-master'))

router.get('/mark-as-user/:id', adminMiddleware, require('../controllers/mark-as-user'))

router.post('/call-master', require('../controllers/call-master'))

router.get('/delete-call/:id', require('../controllers/delete-call'))

module.exports = {
   route: '/cabinet',
   router
}