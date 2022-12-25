const router = require('express').Router();
const model = require('../DB/db-models');
const mongoose = require('mongoose')

router.get('/test',(req,res)=>{
    /* Code for assigning object id to different parameters of the document */
    /*
    */
   const id = new mongoose.mongo.ObjectId()
   const user = new model.users({_id:id,firstName:'abhi',lastName:'khur',email:'abhi@g',hash:id});
   user.save();
res.end();
    
})

router.post('/login',(req,res)=>{
    console.log(req.body);
    res.json({msg:'success'})
})

router.post('/signup',(req,res)=>{
    console.log(req.body);
    res.json({msg:'success'})
})

module.exports = router;