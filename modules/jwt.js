const jwt = require('jsonwebtoken')

const generateToken = data => {
   return jwt.sign(data, 'abdullayev_mardon')
}

const verifyToken = token => {
   try {
      return jwt.verify(token, 'abdullayev_mardon')
   } catch (e) {
      return false
   }
}

module.exports =  { generateToken, verifyToken }