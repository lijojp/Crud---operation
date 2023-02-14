const jwt = require("jsonwebtoken");
const Refresh = require("../models/refreshModal")

const generateToken = (payload)=>{
  const accessToken =  jwt.sign(payload, "accessTokenSecret");
    const refreshToken = jwt.sign(payload, "refreshTokenSecret");
      return { accessToken, refreshToken };
}
const storeRefreshToken=async(token,user)=>{
const data  = await Refresh.create({token:token,userId:user})
return data
}

module.exports ={ generateToken,storeRefreshToken}