const express = require('express');
const session = require('express-session');
const connection = require('./DB/db-config');
const passport = require('passport');
const authRouter = require('./Routes/authRoutes')

const MongoStore = require('connect-mongo');


require('dotenv').config();

const port = 5000;
const app = express();

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl:process.env.DB_CONNECTION,collectionName:'sessions'}),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 
    }
}));

require('./Auth/passport-config');
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('../front-end/build/'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/api',authRouter)


app.listen(port,()=>{
    console.log(`Server is listening on prot ${port}`);
})