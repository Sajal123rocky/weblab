const express=require('express');
const app=express();
app.get('/',function(req,res){
    res.sendFile(__dirname+'/p6b.html');
})
// app.get('/cse',function(req,res){
//     res.sendFile(__dirname+'/cse.html');
// })
// app.get('/ise',function(req,res){
//     res.sendFile(__dirname+'/ise.html');
// })
// app.get('/me',function(req,res){
//     res.sendFile(__dirname+'/me.html');
// })
app.listen(4000);