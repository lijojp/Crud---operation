const hash = require("../services/hashService");
const {generateToken,storeRefreshToken} = require("../services/tokenService");
const { createNewUser, findUser, matchPassword } = require("../services/userServices");

 const getUserDetails= async(req,res)=>{
   console.log(req.body);

  const data = await  createNewUser(req.body)
  
   if(data){
    return res.status(200).json({message:"user created"})
   }else{
    return res.status(500).json({message:"some error occured in db"})
   }

  

}

const verifyUser=async(req,res)=>{
const {email,password} = req.body
let data
let isUserValid
if(email){
   data  = await findUser(email)
   if(data){
    isUserValid = await matchPassword(password,data.password)
   }

}else{
  res.status(404).json({message:"user not found"})
}

if(isUserValid){
  const {accessToken,refreshToken} =  generateToken({id:data._id})
  storeRefreshToken(refreshToken,data._id)
  res.cookie("accessToken", accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true,
  });
  res.cookie("refreshToken", refreshToken, {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true,
  });
  res.status(200).json({message:"Login successfull" });
}
}


module.exports = {getUserDetails,verifyUser}