const express=require('express');
const groceryRoute=require('./routes/groceries')
const marketsRoute=require('./routes/market');
const app=express();
const bodyparser=require('body-parser');
const { urlencoded } = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
const PORT=5000;
app.use((req,res,next)=>{
    console.log(`${req.method}:${req.url}`);
    next();
})


app.use('/api/v1/groceries',groceryRoute);
app.use('/api/v1/markets',marketsRoute)

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`);
})