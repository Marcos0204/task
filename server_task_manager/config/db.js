const mongoose = require('mongoose');

require('dotenv').config({path: 'variables.env'})

const conectarDB = async ()=>{
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('mongo_db conectada')
    } catch (error) {
        console.log(error)
        console.log('fallo')
        process.exit(1)
    }
};

module.exports= conectarDB;