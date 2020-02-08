var apirequest = require('request');
const express = require('express');

var app = express();


app.get('/kategoriler',function(req,res){

    apirequest.get('https://northwind.now.sh/api/categories',function(err,r,body){
        if(!err){
            res.json(JSON.parse(body));
        }
    })
});

app.get('/urunler',function(req,res){
    apirequest.get('https://northwind.now.sh/api/products',function(err,r,body){
        if(!err){
            res.json(JSON.parse(body));
        }
    })
});

app.get('/tedarikciler',function(req,res){

    apirequest.get('https://northwind.now.sh/api/suppliers',function(err,r,body){
        if(!err){
            res.json(JSON.parse(body));
        }
    });

})


app.listen(3001);


