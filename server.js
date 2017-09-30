var express = require('express');
var app = express();
app.use('/',express.static('.', {index: 'index.html'}))
app.listen(3000, function(){
  console.log("App started at 3000");
})
