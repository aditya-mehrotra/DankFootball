const express = require('express');
const mongoose = require('mongoose');
const initializeDB = require('./DB/db-config');
const model = require('./DB/db-models');

const app = express();
initializeDB(mongoose);
const port = 5000;

app.use(express.static('../front-end/build/'))


app.get('/',(req,res)=>{
    res.sendFile('../front-end/build/index.html')
})  

app.get('/test',async(req,res)=>{
    const user = new model.users({firstName:'Ak',lastName:'kh',email:'ab@gmf.com',hash:'abdkbp'})
    const val = await user.save();
})


app.listen(port,()=>{
    console.log(`Server is listening on prot ${port}`);
})