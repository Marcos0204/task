const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');


exports.authenticateUser = async (req, res) =>{
    //check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const { email, password } = req.body
    try {
        let user= await User.findOne({email});
        if(!user){
            return res.status(400).json({msg: 'el usuario no existe'})
        };
        const passCorrect = await bcryptjs.compare(password, user.password);
        if(!passCorrect){
            return res.status(400).json({msg: 'password incorrecto'})
        }

        //if all correct
         // create jwt
        const payload = {
            user:{
                id: user.id
            }
        }
        //sign the jwt
        jwt.sign(payload, process.env.secret, {
            expiresIn: 3600 //1 hr
        }, (error, token)=>{
            if(error) throw error;
         // confir user
            res.json({token})
        })
        
    } catch (error) {
        console.log(error)
    }
}


exports.authenticatedUser = async (req, res) =>{
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json({user})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Hubo un error'})
    }
}