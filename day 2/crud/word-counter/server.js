const express = require('express')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use('/', api)