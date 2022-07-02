const express=require('express');
const https=require('https');

app=express();

app.use(express.static('public'));


app.get("/",function(req,res){
    res.sendFile(__dirname+"index.html");
})

console.log("hi to the world");

app.listen(3000,function(){
    console.log("sever is running!!");
});