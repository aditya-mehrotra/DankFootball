const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('../front-end/build/'))


app.get('/',(req,res)=>{
    res.sendFile('../front-end/build/index.html')
})  


app.listen(port,()=>{
    console.log(`Server is listening on prot ${port}`);
})