const router = require("express").Router();
const model = require("../DB/db-models");
const mongoose = require("mongoose");
const passport = require("passport");
const genPassword = require("../lib/passwordUtils").genPassword;
const Users = require("../DB/db-models").users;

router.get("/test", (req, res) => {
  /* Code for assigning object id to different parameters of the document */
  /*
   */
  const id = new mongoose.mongo.ObjectId();
  const user = new model.users({
    _id: id,
    firstName: "abhi",
    lastName: "khur",
    email: "abhi@g",
    hash: id,
  });
  user.save();
  res.end();
});

const isAuth =(req,res,next)=>{
  if(req.isAuthenticated()){
    return next();
  }
  res.json({msg:false})
}

router.post("/login", passport.authenticate('local',{failureRedirect:'/api/loginfailed'}),(req, res) => {
  res.json({ authenticated: true, avatarName:req.user.firstName[0] });
});
router.post('/loginfailed',(req,res)=>{
  res.json({authenticated:false})
})
router.post("/signup", async(req, res) => {
  const hash = await genPassword(req.body.password);
  const newUser = new Users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    hash: hash
  });

  newUser.save()
  res.json({signedup:true});
});
router.get('/logout',(req,res)=>{
    req.logout((err)=>{
        if(err) return next(err);

        res.redirect('/')
    })
})

module.exports = router;
