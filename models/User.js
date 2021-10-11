const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const { Schema } = mongoose;

const userSchema = new Schema({
    
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number
    }
});

//save is middle ware
userSchema.pre('save', async function (next){
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next();
    }
    catch(error){
        next(error)
    }
})


//Creating a model objet ALLOWS YOU TO QUERY YOUR MONGO DB!!!!
const User = mongoose.model('User', userSchema);
module.exports = User;