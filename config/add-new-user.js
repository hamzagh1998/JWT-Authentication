const fs = require('fs')

class dbHandler {
  static getAllUsers() {
    return JSON.parse(fs.readFileSync('config/db.json'))
  }

  static saveUser(userData) {
    const users = dbHandler.getAllUsers()
    users.push(userData)
    fs.writeFileSync('config/db.json', JSON.stringify(users, null, 2))
  }
}

module.exports = dbHandler