const isAuth =(req,res,next)=>{
    if(req.isAuthenticated()){
      return next();
    }
    res.json({authenticated:false})
}
const isUnAuth = (req,res,next)=>{
    if(!req.isAuthenticated()){
        return next();
    }
    res.json({authenticated:true})
}

module.exports = {isAuth,isUnAuth}
