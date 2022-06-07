const getData = require('../functions/get-full-data')
const editData = require('../functions/edit-full-data')

module.exports = async (req, res) => {
   try {
      const callId = req.params.id

      const users = await getData()
      const userIndex = users.findIndex(u => u.id === req.user.id)

      users[userIndex].references = users[userIndex].references.filter(item => {
         return item.id !== callId
      })

      await editData(users)

      res.render('cabinet', {
         title: `Shaxsiy kabinet`,
         path: 'cabinet',
         error: '',
         user: users[userIndex],
         users
      })
   } catch (e) {
      res.redirect('/404')
   }
}