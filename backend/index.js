const express = require('express');
const session = require('express-session');
const connection = require('./DB/db-config');
const passport = require('passport');
const authRouter = require('./Routes/authRoutes');
const router = require('./Routes/routes');
const path = require('path');

const MongoStore = require('connect-mongo');
const fileUpload = require('express-fileupload');

require('dotenv').config();

const port = 5000;
const app = express();

app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({
			mongoUrl: process.env.DB_CONNECTION,
			collectionName: 'sessions',
		}),
		cookie: {
			maxAge: 1000 * 60 * 60 * 24,
		},
	})
);

require('./Auth/passport-config');
app.use(passport.initialize());
app.use(passport.session());

app.use(fileUpload());

app.use(express.static('../front-end/build/'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get(/^(?!\/api).+/,(req,res)=>{
	res.sendFile(path.join(__dirname,'../front-end/build/index.html'))
})
app.use('/api', authRouter);
app.use('/api', router);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
