const editData = require('../functions/edit-full-data')
const getData = require('../functions/get-full-data')
const { v4: uuidv4 } = require('uuid')

module.exports = async (req, res) => {
   const { name, phone, region, password } = req.body

   if (name.trim().length <= 3) {
      return res.render('register', {
         title: `Ro'yxatdan o'tish`,
         path: 'register',
         user: req.user ? req.user : null,
         error: `Ism uzunligi kamida 3 ta belgidan iborat bo'lishi kerak`
      })
   }

   if (phone.trim().replace(/\D/g, '').length !== 12) {
      return res.render('register', {
         title: `Ro'yxatdan o'tish`,
         path: 'register',
         user: req.user ? req.user : null,
         error: `Telefon raqam noto'g'ri kiritildi. Telefon raqam uchun namuna: +998999639773`
      })
   }

   if (password.trim().replace(/\D/g, '') < 6) {
      return res.render('register', {
         title: `Ro'yxatdan o'tish`,
         path: 'register',
         user: req.user ? req.user : null,
         error: `Parol uzunligi kamida 6 ta belgidan iborat bo'lishi kerak`
      })
   }

   const users = await getData()

   const isPhoneRegistered = users.some(user => {
      return user.phone === phone.replace(/\D/g, '')
   })

   if (isPhoneRegistered) {
      return res.render('register', {
         title: `Ro'yxatdan o'tish`,
         path: 'register',
         user: req.user ? req.user : null,
         error: `Bu raqam orqali oldin ro'yxatdan o'tilgan.`
      })
   }

   const newUser = {
      id: uuidv4(),
      name,
      phone: phone.replace(/\D/g, ''),
      region,
      role: 'user',
      references: []
   }

   users.push(newUser)

   await editData(users)
   res.redirect('/login')
}