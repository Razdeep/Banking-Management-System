var express=require('express');
var app=express();
var port=1998;
app.get('/', function(req,res)
{
    res.sendFile(__dirname+'/ui/register.html');
});
app.listen(port,function(){
    console.log("Server started at port "+port);
    console.log("http://localhost:1998");
});