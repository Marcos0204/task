const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {
    // read header token
    const token = req.header('x-auth-token');

    // console.log(token)
    //check if there is no token 
    if(!token) {
        return res.status(401).json({msg:'No hay token, permiso no válido.'})
    }

    try {
        const cifrado = jwt.verify(token, process.env.secret);
        req.user = cifrado.user
        next();
    } catch (error) {
        return res.status(401).json({msg: 'Token no válidio'})
    }



    //validate token 

}