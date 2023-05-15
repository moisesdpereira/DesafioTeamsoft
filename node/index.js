const express = require('express')
const ClientRoutes = require('./routes/ClientRoutes')
const AddressRoutes = require('./routes/AddressRoutes')

const app = express()

// Config JSON response
app.use(express.json())

// Routes
app.use('/clients', ClientRoutes)
app.use('/addresses', AddressRoutes)

app.listen(5000)