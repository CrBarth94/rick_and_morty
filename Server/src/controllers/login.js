const users=require("../utils/users")

function login(req,res){
    let {email,password}=req.query;
    let validacion=users.filter(obj=>obj.email===email&&obj.password===password);
    validacion.length===1 ? res.status(200).json({access:true}):res.status(200).json({access:false})
}

module.exports=login;