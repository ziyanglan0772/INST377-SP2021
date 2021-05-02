
var express = require("express");
var app = express();
var router = express.Router()

router.use('/api', function(req, res) {
  res.send('Hello Word');
})

app.listen(3000);