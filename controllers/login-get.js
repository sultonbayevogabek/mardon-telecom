module.exports = async (req, res) => {
   res.render('login', {
      title: `Login`,
      path: 'login',
      error: '',
      user: req.user ? req.user : null
   })
}