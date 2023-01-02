const router = require('express').Router();
const Article = require('../DB/db-models').articles;
const Comments = require('../DB/db-models').comments;
const User = require('../DB/db-models').users;

router.get('/article',async(req,res)=>{
    let article = await Article.findOne({_id:req.query.id});
    let comments = await Comments.find({articleId:req.query.id});
    let c = [];
    comments.forEach(async(comment) => {
       let u = await (User.find({_id:comments.userId}))
       c.push({user:u.firstName+' '+u.lastName,body:comment.body});
    });
    
    res.json({article:article,comments:c})
})


module.exports = router