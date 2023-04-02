const {Router}=require('express');

const superMarkets=[
    {
        store:'Simba',
    },
    {
        store:'Dniels',
    },
    {
        store:'albertstones',
    },
]

const router=Router();
router.get('/',(req,res)=>{
res.send(superMarkets)
})

module.exports=router