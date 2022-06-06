const fs = require('fs/promises')
const path = require('path')

module.exports = async () => {
   const data = await fs.readFile(path.join(__dirname, '..', 'database', 'users.json'), { encoding: 'utf-8' })
   return JSON.parse(data)
}