module.exports = async (req, res) => {

   res.render('index', {
      title: `Mardon Telecom`,
      path: '',
      user: req.user ? req.user : null
   })
}