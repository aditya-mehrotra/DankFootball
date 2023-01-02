const router = require('express').Router();
const model = require('../DB/db-models');
const mongoose = require('mongoose');
const passport = require('passport');
const genPassword = require('../lib/passwordUtils').genPassword;
const Users = require('../DB/db-models').users;
const Articles = require('../DB/db-models').articles;
const isAuth = require('./authenticated').isAuth;
const path = require('path');

router.get('/test', (req, res) => {
	/* Code for assigning object id to different parameters of the document */
	/*
	 */
	// const id = new mongoose.mongo.ObjectId();
	// const user = new model.users({
	//   _id: id,
	//   firstName: "abhi",
	//   lastName: "khur",
	//   email: "abhi@g",
	//   hash: id,
	// });
	// user.save();
	// res.end();
	console.log(req.session.passport);
});
router.post('/writearticle', isAuth, (req, res) => {
	
	let pathLink = '';
	const id = new mongoose.mongo.ObjectId();
	if(req.files && req.files.articleImage.mimetype.startsWith('image/')){
		let articleImage = req.files.articleImage;
		
		articleImage.mv(
		path.join(__dirname, '../uploads/articles', id + articleImage.name),
		(err) => {
			if (err) {
				console.log(err);
			}
		}
	);

	pathLink = `/api/uploads/articles?id=${id}${articleImage.name}`;
	}
	

	const article = new Articles({
		_id: id,
		authorId: req.session.passport.user,
		imageLink: pathLink,
		title: req.body.title,
		body: req.body.body,
		date: new Date(),
		upVote: 0,
		downVotes: 0,
	});
	article.save();
	res.redirect('/');
});

router.get('/uploads/:catagory', (req, res) => {
	res.sendFile(
		path.join(__dirname, `../uploads/${req.params.catagory}/${req.query.id}`)
	);
});

router.get('/latest',async (req,res)=>{
	const allArticles = await Articles.find();
	res.json(allArticles);
})

router.get('/isauth', (req, res) => {
	if (req.isAuthenticated()) {
		res.json({
			authenticated: true,
			avatarName: req.user.firstName[0].toUpperCase(),
		});
	} else {
		res.json({ authenticated: false });
	}
});
router.post(
	'/login',
	passport.authenticate('local', { failureRedirect: '/api/loginfailed' }),
	(req, res) => {
		res.json({
			authenticated: true,
			avatarName: req.user.firstName[0].toUpperCase(),
		});
	}
);
router.post('/loginfailed', (req, res) => {
	res.json({ authenticated: false });
});
router.post('/signup', async (req, res) => {
	const hash = await genPassword(req.body.password);
	const newUser = new Users({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		hash: hash,
	});

	newUser.save();
	res.json({ signedup: true });
});
router.get('/logout', (req, res) => {
	req.logout((err) => {
		if (err) return next(err);

		res.redirect('/');
	});
});

module.exports = router;
