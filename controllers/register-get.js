module.exports = async (req, res) => {
   res.render('register', {
      title: `Ro'yxatdan o'tish`,
      path: 'register',
      user: req.user ? req.user : null,
      error: ''
   })
}