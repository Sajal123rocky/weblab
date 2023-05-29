const express=require('express');
const app=express();
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.listen(3000,function(err){
    if(err)
    console.log(err);
    else
    console.log("started at port 3000");
})