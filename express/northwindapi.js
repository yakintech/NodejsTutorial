var request = require('request');
const express = require('express');

var app = express();


app.get('/kategoriler',function(req,res){

    request.get('https://northwind.now.sh/api/categories',function(err,r,body){
        if(!err){
            res.json(JSON.parse(body));
        }
    })
});

app.listen(3001);


