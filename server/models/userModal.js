const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    firstName: {type: String, required:['first name field required']},
    lastName: { type: String, required:['last name field required']},
    email: { type: String, required:['email required'] },
    password: { type: String, required:['password required'] }
},
{timestamps: true}
)


const User = mongoose.model("User",userSchema)
module.exports = User;
