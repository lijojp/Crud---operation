const mongoose = require('mongoose')
const express = require('express'
)
const url =`mongodb+srv://vesham:${'vesham123'}@cluster0.t3bkmxk.mongodb.net/?retryWrites=true&w=majority`
const connctToDb= async()=>{
    try{
    const connect = await mongoose.connect(url,   {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
      })
      console.log(`mongodb connected:${connect.connection.host}`);
        }catch (error) { 
        console.log("could not connect");    
        }
}

module.exports = connctToDb