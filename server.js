const express = require('express')
const app = express()

if (process.env.NODE_ENV === 'development') {
  require('morgan')('dev')
}

// Set the environment  variable path
require('dotenv').config({ path: './config/.env'})

// ====================================== middleware ====================================== //

// Body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use('/', require('./routes/index.js'))
app.use('/auth', require('./routes/auth'))

// Run sever
const port = process.env.PORT || 3030
app.listen(port, console.log(`Server run in ${process.env.NODE_ENV} mode on port: ${port}`))
