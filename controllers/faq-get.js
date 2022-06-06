module.exports = async (req, res) => {

   res.render('faq', {
      title: `FAQ`,
      path: 'faq',
      user: req.user ? req.user : null
   })
}