module.exports = async (req, res) => {
   res.render('tariff', {
      title: `Tariflar`,
      path: 'tariff',
      user: req.user ? req.user : null
   })
}