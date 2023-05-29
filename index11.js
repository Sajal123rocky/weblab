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
            req.query.attendance=parseInt(req.query.attendance);
            db.collection('stud3').insert(doc,function(err,docs){
                if(err)
                console.log(err);
                else
                res.send("insert success");
            })
        })
        app.get('/display',function(req,res){
            db.collection('stud3').find({attendance:{$lt:75}}).toArray(function(err,docs){
                if(err)
                console.log(err);
                else {
                    // Create an unordered list (ul) to display the results
                    let listItems = '';
                    docs.forEach(function(doc) {
                      listItems += `<li>${doc.name} - ${doc.attendance}</li>`;
                    });
                    const html = `<ul>${listItems}</ul>`;
                    res.send(html);
                  }
            })
        })
        
    }
})
app.listen(3000,function(err){
    if(err)
    console.log(err);
    else
    console.log("listening at port 3000");
})