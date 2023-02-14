const express = require('express')
const app = express()
const PORT =4000 
const cookieParser = require("cookie-parser");
const userRouter = require('./routes/userRoutes')
const adminRouts = require('./routes/adminRouts')
const connctToDb = require('./database/db')
app.use(cookieParser())
const cors = require('cors')
app.use(cors({ origin:" http://localhost:3000",
credentials:true}))
connctToDb()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hellow world")
})

app.use('/api/user',userRouter)
// app.use('/admin',adminRouts)


app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
})