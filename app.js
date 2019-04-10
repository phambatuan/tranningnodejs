var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Pham Ba Tuan')
  })

  app.get('/book', function (req, res) {
    res.send('Book')
  })

  app.get('/name', function (req, res) {
    res.send('hoang the quyen')
  })

app.listen(3000)