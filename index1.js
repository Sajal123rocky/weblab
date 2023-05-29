const express=require('express');
const MongoClient=require('mongodb').MongoClient;
const app=express();
const url='mongodb://127.0.0.1/db1'
MongoClient.connect(url,function(err,db){
    if(!err)
    {
        app.get('/',function(req,res){
            res.sendFile(__dirname+'/index.html');
        })
        app.get('/insert.html',function(req,res){
            res.sendFile(__dirname+'/insert.html');
        })
        app.get('/update.html',function(req,res){
            res.sendFile(__dirname+'/update.html');
        })
        app.get('/delete.html',function(req,res){
            res.sendFile(__dirname+'/delete.html');
        })
        app.get('/search.html',function(req,res){
            res.sendFile(__dirname+'/search.html');
        })
        app.get('/insert',function(req,res){
            var doc=req.query;
            var marks=Number(req.query.marks);
            var name=req.query.name;
            var subject=req.query.sc;
            var usn=req.query.usn;
            
            db.collection('stud').insert({usn:usn,name:name,marks:marks,subject:subject},function(err,docs){
                if(err)
                console.log(err);
                else
                res.send("insert success");
            })
        })
        app.get('/display',function(req,res){
            db.collection('stud').find({marks:{$lt:20}}).toArray(function(err,doc){
                if(err)
                console.log(err);
                else
                res.json(doc);
            })
        })
        
    }
})
app.listen(4000,function(err){
    if(err)
    console.log(err);
    else
    console.log("listening at port 4000");
})