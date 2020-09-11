const router = require('express').Router()
const jwt = require('jsonwebtoken')

const {getAllUsers} = require('../config/add-new-user')

const posts = [
  {
    title: "Post 1",
    author: "saleh",
    views: 10
  },
  {
    title: "Post 2",
    author: "amal",
    views: 28
  },
  {
    title: "Post 3",
    author: "amin",
    views: 50
  }
]

router.get('/', (req, res) => {
  return res.send('Welcome!')
})

router.get('/posts', (req, res) => {
  let response = null
  try {
    // Bearer <token>
    const authorization = req.headers.authorization
    // Extract token from the authorization string
    const token = authorization.split(' ')[1]
    // Decode given token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    // Check if user saved in db
    const user = getAllUsers().find(user => user.id === decoded.id) || null
    if (user) response = {posts, status: 200}
    else response = {error: "Unauthorized", status: 401}
  } catch (err) {
    response = {error: err, status: 401}
  } finally {
    res.json(response)
  }
})

router.get('/users', (req, res) => {
  let response = null
  try {
    // Bearer <token>
    const authorization = req.headers.authorization
    // Extract token from the authorization string
    const token = authorization.split(' ')[1]
    // Decode given token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    // Check if user saved in db
    const user = getAllUsers().find(user => user.id === decoded.id) || null
    // Get list of users name
    const users = getAllUsers().map(user => user.username)
    if (user) response = {users, status: 200}
    else response = {error: "Unauthorized", status: 401}
  } catch (err) {
    response = {error: err, status: 401}
  } finally {
    res.json(response)
  }
})

module.exports = router