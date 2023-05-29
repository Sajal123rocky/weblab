const express=require('express');
const app=express();
let count=0;
function logger(req,res,next){
    console.log("logged in");
    count++;
    next();
}
app.use(logger);
var visit=function(req,res,next){
    res.visit=count;
    console.log("count"+count);
    next();
}
app.use(visit)
app.get('/',function(req,res){
    res.send("visited"+res.visit);
})
app.listen(4000);