var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine','ejs');
var PORT = process.env.PORT || 5000;
// *****************************************************************************
app.get('/',function (req,res) {
    res.render('home')
})
// ***************************************************************************** 
app.listen(PORT,function(){
    console.log('server started')
})