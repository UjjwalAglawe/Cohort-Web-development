const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/name', function (req, res) {
  res.send('Hello Ujjwal')
})

app.listen(3000)