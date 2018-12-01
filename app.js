var express=require('express');
var path=require('path');
var logger=require('morgan');


var app=express();
var port=process.env.PORT||1998;
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.use(logger('dev'));

app.get('/', function(req,res)
{
    res.sendFile(__dirname+'/ui/index.html');
});
app.get('/register',function(req,res)
{
    res.sendFile(__dirname+'/ui/register.html');
});

app.listen(port,function(){
    console.log("Server started at port "+port);
    console.log("http://localhost:1998");
});