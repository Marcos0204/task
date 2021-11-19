const Task = require('../models/Task');
const Project = require('../models/Project');
const { validationResult } = require('express-validator')

//create new task

exports.createTask = async (req, res) =>{
    //check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    

    try {
        const { project } = req.body;
        const existsProject = await Project.findById(project)
        if (!existsProject){
            return res.status(404).json({msg:'proyecto no encontrado'})
        }
        // verify project actual
        if(existsProject.creator.toString() !== req.user.id){
            return res.status(401).json({msg:'No autorizado'})
        }
        // create the task
        const task = new Task(req.body)
        await task.save()
        res.json({task})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error, al crear la tarea')
    }
}

exports.getTasks = async(req, res)=>{

    try {
        const { project } = req.body;
        const existsProject = await Project.findById(project)
        if (!existsProject){
            return res.status(404).json({msg:'proyecto no encontrado'})
        }
        // verify project actual
        if(existsProject.creator.toString() !== req.user.id){
            return res.status(401).json({msg:'No autorizado'})
        }
        //get task for project
        const task = await Task.find({project});
        res.json({task})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error, al crear la tarea')
    }
}


//update task
exports.updateTask = async (req, res) =>{
    
    try {
        const { project, name, state } = req.body;
        //if task exists
        let taskExist = await Task.findById(req.params.id)
        if (!taskExist){
            return res.status(404).json({msg:'la tarea no existe'})
        }

        const existsProject = await Project.findById(project)
        // verify project actual
        if(existsProject.creator.toString() !== req.user.id){
            return res.status(401).json({msg:'No autorizado'})
        }
        
        //update task
        const newTask = {}
        if(name){
            newTask.name = name
        }
        if(state){
            newTask.state = state
        }

        taskExist = await Task.findOneAndUpdate({ _id: req.params.id }, newTask, { new: true} )
        res.json({taskExist})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error, al crear la tarea')
    }
}


//delete task
exports.deleteTask = async (req, res) =>{
    try {
        const { project } = req.body;
        //if task exists
        let taskExist = await Task.findById(req.params.id)
        if (!taskExist){
            return res.status(404).json({msg:'la tarea no existe'})
        }

        const existsProject = await Project.findById(project)
        // verify project actual
        if(existsProject.creator.toString() !== req.user.id){
            return res.status(401).json({msg:'No autorizado'})
        }
        
        //update task
        await Task.findOneAndRemove({ _id: req.params.id});
        res.json({msg:'tarea eliminada'})

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error, al crear la tarea')
    }
}