const router = require('express').Router();
const Article = require('../DB/db-models').articles;
const Comments = require('../DB/db-models').comments;
const User = require('../DB/db-models').users;



router.get('/article',async(req,res)=>{
    let article = await Article.findOne({_id:req.query.id});
    let comments = await Comments.find({articleId:req.query.id});
    let c = [];

    for(let i = 0;i<comments.length;i++){
        let u = await User.findOne({_id:comments[i].userId})
        c.push({user:u.firstName+' '+u.lastName,body:comments[i].body,date:comments[i].date});
    }
    c.sort((a,b)=>{return b.date-a.date})
    res.json({article:article,comments:c})
})

router.get('/latest',async (req,res)=>{
	const allArticles = await Article.find();
	res.json(allArticles);
})


module.exports = router