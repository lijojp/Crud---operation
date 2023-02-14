const crypto  = require('crypto')

const hash =(data)=>{
 return  crypto.createHmac('sha256', 'vesham')  
    .update(data)  
    .digest('hex');  
}
    
module.exports = hash