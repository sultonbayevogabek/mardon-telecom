const getData = require('../functions/get-full-data')

module.exports = async (req, res) => {
   const users = await getData()

   res.render('cabinet', {
      title: `Shaxsiy kabinet`,
      path: 'cabinet',
      error: '',
      user: req.user ? req.user : null,
      users
   })
}