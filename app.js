const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

const routesPath = path.join(__dirname, 'routes')
fs.readdir(routesPath, (err, files)=>{
   files.forEach(file=>{
      const router = require(path.join(routesPath, file))
      app.use(router.route, router.router)
   })
})

app.listen(3000, () => {
   console.log('SERVER IS RUNNING AT: http://localhost:3000')
})