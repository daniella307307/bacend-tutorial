const express=require('express');

const app=express();
const bodyparser=require('body-parser');
const { urlencoded } = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
const PORT=5000;
const grocerylist=[{
    item:'milk',
    quantity:'2l'
},
{
    item:'veges',
    quantity:'2kg'
},
{
    item:'fruits',
    quantity:'2kg'
},
]
app.get('/groceries',(req,res,next)=>{
    console.log("Before executing ");
    next();
},(req,res)=>{
res.send(grocerylist)
},
(req,res,next)=>{
    console.log("after executing ");
    next();
},);
app.post('/register',(req,res)=>{
console.log(req.body);
grocerylist.push(req.body);
res.send(201);
})


app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`);
})