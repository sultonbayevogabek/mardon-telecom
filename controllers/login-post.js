const getData = require('../functions/get-full-data')
const { generateToken } = require('../modules/jwt')

module.exports = async (req, res) => {
   try {
      const { phone, password } = req.body

      if (phone.trim().replace(/\D/g, '').length !== 12) {
         return res.render('login', {
            title: `Login`,
            path: 'login',
            user: req.user ? req.user : null,
            error: `Telefon raqam to'g'ri formatda kiritilmadi`
         })
      }

      const users = await getData()

      const user = users.find(u => u.phone === phone.trim().replace(/\D/g, ''))

      if (!user) {
         return res.render('login', {
            title: `Login`,
            path: 'login',
            user: req.user ? req.user : null,
            error: `Bu raqam orqali oldin ro'yxatdan o'tilmagan`
         })
      }

      if (user.password !== password) {
         return res.render('login', {
            title: `Login`,
            path: 'login',
            user: req.user ? req.user : null,
            error: `Parol noto'g'ri kiritildi`
         })
      }

      const token = await generateToken(user)

      res.cookie('token', token).redirect('/')
   } catch (e) {
      res.redirect('/404')
   }
}