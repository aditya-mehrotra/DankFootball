const router = require('express').Router();
const Article = require('../DB/db-models').articles;
const Comments = require('../DB/db-models').comments;
const User = require('../DB/db-models').users;



router.get('/article',async(req,res)=>{
    let article = await Article.findOne({_id:req.query.id});
    let comments = await Comments.find({articleId:req.query.id});
    let c = [];
    const d = new Date();

    for(let i = 0;i<comments.length;i++){
        const dateDiff = d-comments[i].date;
        const mins = Math.floor(dateDiff/(1000*60));
        const hours = Math.floor(dateDiff/(1000*60*60));
        const days = Math.floor(dateDiff/(1000*60*60*24));
        const weeks = Math.floor(dateDiff/(1000*60*60*24*7))
        const months = Math.floor(dateDiff/(1000*60*60*24*7*4))
        let val = '';
        if(months!==0)val = String(months) + ' months';
        else if(weeks!==0)val = String(weeks)+' weeks';
        else if(days!==0)val = String(days)+' days';
        else if(hours!==0)val = String(hours)+' hours';
        else val = String(mins)+' mins';
        let u = await User.findOne({_id:comments[i].userId})
        c.push({user:u.firstName+' '+u.lastName,body:comments[i].body,date:val,sortDate:comments[i].date});
    }
    c.sort((a,b)=>{return b.sortDate-a.sortDate})
    res.json({article:article,comments:c})
})

router.get('/latest',async (req,res)=>{
	const allArticles = await Article.find();
	res.json(allArticles);
})


module.exports = router