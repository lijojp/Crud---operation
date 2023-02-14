const User = require("../models/userModal")
const hash = require("./hashService")

const createNewUser = async(payload)=>{
    const data = await User.create(payload)
    return data
}



const findUser =async(email)=>{
 
const data = await User.findOne({email})
return data
}

const matchPassword =async(psw,dbPsw)=>{
  if(psw===dbPsw){
    return true
  }else{
   return false
  }
}

module.exports = {createNewUser,findUser,matchPassword}