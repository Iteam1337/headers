var express = require('express')
var favicon = require('serve-favicon')
var app = express()

app.use(express.static('public'))
app.use(favicon(__dirname + '/public/favicon.png'))
app.get('/headers', function (req, res) {
  res.send(req.headers)
})

app.listen(process.env.PORT || 3000)

var app = express()
