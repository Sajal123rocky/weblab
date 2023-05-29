const express=require('express')
const app=express();
app.get('/',function(req,res){
    var text="<h1>home page</h1><a href='/registration'>Registration</a><br><a href='/announcement'>Annoumcement</a><br><a href='/contact'>Contact Us</a>";

    res.send(text);
})
app.get('/registration',function(req,res){
    var text="<h1>Registration page</h1><a href='/'>Home</a><br><a href='/announcement'>Annoumcement</a><br><a href='/contact'>Contact Us</a>";
    res.send(text);
})
app.listen(5000,function(err){
    if(err)
    console.log(err);
    else
    console.log("started at 5000");
})
