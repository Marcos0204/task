
const express = require('express');

const conectarDB = require('./config/db');
const cors = require('cors');

// create the server

const app = express();

//cors
app.use(cors())

//conect DB
conectarDB()

// add express.json

app.use(express.json({ extended: true }))

// port of the app
const PORT = process.env.PORT || 4000;

//import routes 

app.use('/api/usuario', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/projects'));
app.use('/api/tareas', require('./routes/task'));



// def init 
app.get('/', (req, res)=>{
    res.send('hola mundo')
})

// init the server

app.listen(PORT, ()=>{
    console.log(`arrancando el servidor ${PORT}`)
})