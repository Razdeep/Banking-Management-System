var express=require('express');
var path=require('path');
var app=express();
var port=1998;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req,res)
{
    res.sendFile(__dirname+'/ui/index.html');
});
app.listen(port,function(){
    console.log("Server started at port "+port);
    console.log("http://localhost:1998");
});