const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const {getAllUsers, saveUser} = require('../config/add-new-user')


// Login
router.post('/login', async (req, res) => {
  let response = null
  // Check if the username exists in the db!
  const user = getAllUsers().find(user => user.username === req.body.username) || null
  if (user) {
    const password = await bcrypt.compare(req.body.password, user.password)
    if (password) {
      const token = jwt.sign({id: user.id, username: user.username}, process.env.ACCESS_TOKEN_SECRET)
      response = {token, status: 200}
    }
    else {
      response = {error: 'Invalid password!', status: 406}
    }
  } else {
    response = {error: 'Invalid username!', status: 406}
  }
  res.json(response)
})

// Register
router.post('/register', async (req, res) => {
  let response = null
  // Check if the username already exists!
  const user = getAllUsers().find(user => user.username === req.body.username) || null
  if (req.body['confirm-password'] === req.body.password && !user) {
    delete req.body['confirm-password']
    // Set user id
    req.body.id = Date.now()
    // hash user password
    req.body.password = await bcrypt.hash(req.body.password, 10)
    // Add user to db
    saveUser(req.body)
    // Set the response 
    response = {id: req.body.id, username: req.body.username, status: 201}
  } else if (user) {
    response = {error: "This username Already exists!", status: 406}
  } else {
    response = {error: "Two password didn't match!", status: 406}
  }
  res.json(response)
})

module.exports = router
