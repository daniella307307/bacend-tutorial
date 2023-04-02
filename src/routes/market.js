const {Router}=require('express');

const superMarkets=[
    {
        id:1,
        store:'Simba',
        miles:0.6,
    },
    {
        id:2,
        store:'Dniels',
        miles:0.1,
    },
    {
        id:3,
        store:'albertstones',
        miles:5,
    },
]

const router=Router();
router.get('/',(req,res)=>{
    // console.log(req.query);//GET: https://localhost:5000/api/v1/markets?miles=3&sortBy=ASC
    const { miles }=req.query;
    const parsedMiles=parseInt(miles);
    if(!isNaN(parsedMiles)){
      const filteredStore=superMarkets.filter((s)=> s.miles <= parsedMiles);
      res.send(filteredStore);
    }else res.send(superMarkets);

})

module.exports=router