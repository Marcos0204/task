
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim: true
    },
    email:{
        type: String,
        require: true,
        trim: true,
        unique:true
    },
    password:{
        type: String,
        require: true,
        trim: true
    },
    registro :{
        type: Date,
        default: Date.now()
    }

})

module.exports= mongoose.model('users', userSchema)