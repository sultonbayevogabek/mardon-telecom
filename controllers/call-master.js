const getData = require('../functions/get-full-data')
const editData = require('../functions/edit-full-data')
const { v4: uuidv4 } = require('uuid')

module.exports = async (req, res) => {
   try {
      const { id, address, problem } = req.body
      console.log(id, address, problem)

      const users = await getData()
      const user = req.user

      let masters = users.filter(u => u.role === 'master' && u.region === user.region)

      if (!masters.length) {
         return res.render('cabinet', {
            title: `Shaxsiy kabinet`,
            path: 'cabinet',
            user: req.user ? req.user : null,
            error: '',
            masterNotFound: `Sizning tumaningiz bo'yicha usta yo'q`,
            callSent: ``
         })
      }

      masters = masters.sort(function (a, b) {
         return a.references.length - b.references.length
      })
      let master = masters[0]

      master.references.push({
         id: uuidv4(),
         name: user.name,
         phone: user.phone,
         address,
         problem,
         time: new Date()
      })
      const masterIndex = users.findIndex(u => u.id === master.id)
      users[masterIndex] = master
      await editData(users)

      res.render('cabinet', {
         title: `Shaxsiy kabinet`,
         path: 'cabinet',
         user: req.user ? req.user : null,
         masterNotFound: ``,
         error: '',
         callSent: `Murojaatingiz ustaga jo'natildi. Ustamiz siz bilan tez orada bog'lanadi.`
      })
   } catch (e) {
      res.redirect('/404')
   }
}