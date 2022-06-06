const fs = require('fs/promises')
const path = require('path')

module.exports = async (data) => {
   await fs.writeFile(path.join(__dirname, '..', 'database', 'users.json'), JSON.stringify(data))
}