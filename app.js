var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine','ejs');
var PORT = process.env.PORT || 5000;
// *****************************************************************************
var visitors;
// *****************************************************************************
var pg = require("pg");
var client = new pg.Client(process.env.DATABASE_URL)
client.connect();

// *****************************************************************************
function visited (){
     client.query("SELECT visits FROM data WHERE id = 1",function(err,result){
         visitors = result;
         console.log(result);
     })
}
// *****************************************************************************
app.get('/',function (req,res) {
    res.render('home')
})
// ***************************************************************************** 
app.listen(PORT,function(){
    console.log('server started')
})