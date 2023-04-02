const { Router }= require('express');

const router= Router();
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

router.get('/',(req,res,next)=>{
    console.log("Before executing ");
    next();
},(req,res)=>{
    res.cookie("visited",true,{
        maxAge:10000
    }),
res.send(grocerylist)
},
(req,res,next)=>{
    console.log("after executing ");
    next();
},);
router.post('/',(req,res)=>{
console.log(req.body);
grocerylist.push(req.body);
res.send(201);
});
router.get('/:item',(req,res)=>{
    const { item }=req.params;
    const groceryItem= grocerylist.find((g) => g.item===item)
// console.log(req.params.item);
res.send(groceryItem);
});

module.exports=router