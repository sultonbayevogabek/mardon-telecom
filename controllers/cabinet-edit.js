const getData = require('../functions/get-full-data')
const editData = require('../functions/edit-full-data')
const { generateToken } = require('../modules/jwt')

module.exports = async (req, res) => {
   const { id, name, phone, region, password } = req.body

   if (req.user.id !== id) {
      return res.redirect('/404')
   }

   if (name.trim().length <= 3) {
      return res.render('cabinet', {
         title: `Shaxsiy kabinet`,
         path: 'cabinet',
         error: `Ism uzunligi kamida 3 ta belgidan iborat bo'lishi kerak`,
         user: req.user ? req.user : null
      })
   }

   if (phone.trim().replace(/\D/g, '').length !== 12) {
      return res.render('cabinet', {
         title: `Shaxsiy kabinet`,
         path: 'cabinet',
         user: req.user ? req.user : null,
         error: `Telefon raqam noto'g'ri kiritildi. Telefon raqam uchun namuna: +998999639773`
      })
   }

   const users = await getData()

   const isPhoneRegistered = users.some(user => {
      return user.phone === phone.replace(/\D/g, '') && user.id !== id
   })

   if (isPhoneRegistered) {
      return res.render('cabinet', {
         title: `Shaxsiy kabinet`,
         path: 'cabinet',
         user: req.user ? req.user : null,
         error: `Bu raqam orqali boshqa odam ro'yxatdan o'tgan. Siz raqamingizni u raqamga o'zgartira olmaysiz (`
      })
   }

   if (password.trim().replace(/\D/g, '') < 6) {
      return res.render('cabinet', {
         title: `Shaxsiy kabinet`,
         path: 'cabinet',
         user: req.user ? req.user : null,
         error: `Parol uzunligi kamida 6 ta belgidan iborat bo'lishi kerak`
      })
   }

   const index = users.findIndex(u => u.id === id)

   users[index].name = name
   users[index].phone = phone.replace(/\D/g, '')
   users[index].region = region
   users[index].password = password
   const token = generateToken(users[index])
   await editData(users)

   res.cookie('token', token).render('cabinet', {
      title: `Shaxsiy kabinet`,
      path: 'cabinet',
      user: users[index],
      error: ``,
      users
   })
}