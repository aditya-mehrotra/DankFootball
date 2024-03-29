const schema = require('mongoose').Schema 

const articles = new schema({
    authorId:String,
    imageLink:String,
    title:String,
    body:String,
    date:Date,
    upVote:Number,
    downVotes:Number
})
const comments = new schema({
    articleId:String,
    body:String,
    date:Date,
    userId:String
})
const users = new schema({
    firstName:String,
    lastName:String,
    email:String,
    hash:String,
    about:{
        type:String,
        default:''
    },
    profileImage:{
        type:String,
        default:''
    }
})
module.exports = {articles:articles,comments:comments,users:users};