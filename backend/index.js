const express = require('express');
const connection = require('./DB/db-config');
const authRouter = require('./Routes/authRoutes')

const port = 5000;
const app = express();


app.use(express.static('../front-end/build/'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/api',authRouter)


app.listen(port,()=>{
    console.log(`Server is listening on prot ${port}`);
})