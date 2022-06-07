const getData = require('../functions/get-full-data')
const editData = require('../functions/edit-full-data')

module.exports = async (req, res) => {
   try {
      const id = req.params.id
      const users = await getData()

      const index = users.findIndex(u => u.id === id)
      if (index === -1) {
         return res.redirect('/404')
      }
      users[index].role = 'user'
      await editData(users)

      res.render('cabinet', {
         title: `Shaxsiy kabinet`,
         path: 'cabinet',
         error: '',
         user: req.user ? req.user : null,
         users
      })
   } catch (e) {
      res.redirect('/404')
   }
}