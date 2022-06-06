module.exports = async (req, res) => {
   res.render('contact', {
      title: `Aloqa`,
      path: 'contact',
      user: req.user ? req.user : null
   })
}