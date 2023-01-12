const router = require('express').Router();
const model = require('../DB/db-models');
const mongoose = require('mongoose');
const passport = require('passport');
const genPassword = require('../lib/passwordUtils').genPassword;
const Users = require('../DB/db-models').users;
const Articles = require('../DB/db-models').articles;
const Comments = require('../DB/db-models').comments;
const isAuth = require('./authenticated').isAuth;
const path = require('path');



router.post('/writearticle', isAuth, (req, res) => {
	let pathLink = '';
	const id = new mongoose.mongo.ObjectId();
	if (req.files && req.files.articleImage.mimetype.startsWith('image/')) {
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
		title: req.body.title || '',
		body: req.body.body || '',
		date: new Date(),
		upVote: 0,
		downVotes: 0,
	});
	article.save();
	res.redirect('/');
});

router.get('/userprofile', isAuth, (req, res) => {
	const { firstName, lastName, profileImage, about } = req.user;
	res.json({ name: firstName + ' ' + lastName, profileImage, about });
});
router.post('/editprofile', isAuth, async(req, res) => {
	let pathLink = '';
	if (req.files && req.files.profileImage.mimetype.startsWith('image/')) {
		let profileImage = req.files.profileImage;
		profileImage.mv(
			path.join(
				__dirname,
				'../uploads/profile',
				req.user._id + profileImage.name
			),
			(err) => {
				if (err) {
					console.log(err);
				}
			}
		);
		pathLink = `/api/uploads/profile?id=${req.user._id}${profileImage.name}`;
	}
		const user = await Users.findById(req.user._id);
		user.about = req.body.about||user.about;
		user.profileImage = pathLink||user.profileImage;
		user.firstName = req.body.firstName||user.firstName;
		user.lastName = req.body.lastName||user.lastName;

		user.save();
	
	res.status(200).redirect('/myprofile');
});
router.get('/uploads/:catagory', (req, res) => {
	res.sendFile(
		path.join(__dirname, `../uploads/${req.params.catagory}/${req.query.id}`)
	);
});

router.post('/article/comment', isAuth, (req, res) => {
	const comment = new Comments({
		body: req.body.body,
		date: new Date(),
		articleId: req.query.id,
		userId: req.session.passport.user,
	});
	comment.save();

	res.json({ success: true, authenticated: true });
});
router.get('/userarticles',isAuth,async(req,res)=>{
	const articles = await Articles.find({authorId:req.session.passport.user});
	res.json(articles);
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
