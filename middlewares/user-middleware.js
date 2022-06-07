const { verifyToken } = require('../modules/jwt')

module.exports = async (req, res, next) => {
   const token = req.cookies['token']

   if (token && verifyToken(token)) {
      req.user = verifyToken(token)
   } else {
      res.clearCookie('token')
   }

   next()
}