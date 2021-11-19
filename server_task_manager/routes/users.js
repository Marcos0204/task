// Routes for creact users

const express = require('express');

const router = express.Router();

const userController= require('../controllers/userController')
const {check } = require('express-validator');

// api users

router.post('/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'agrega un email valido').isEmail(),
        check('password', 'el password debe ser minimo de 6 caracteres').isLength({min:6})
    ],
    userController.creatUser
);

module.exports= router;