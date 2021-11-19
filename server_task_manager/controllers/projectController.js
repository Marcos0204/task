const Project = require('../models/Project');
const { validationResult } = require('express-validator')

exports.createProject = async (req, res) =>{

    //check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }


    try {
        // create new project
        const project = new Project(req.body)
        // save creator via jwt
        project.creator = req.user.id

        //save project
        project.save();
        res.json(project);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

/// get all projects the user actual

exports.getPojects = async (req, res) =>{
    try {
        console.log(req.user)
        const projects = await Project.find({ creator: req.user.id}).sort({creator: -1 });
        res.json({projects})
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}


exports.updateProject = async (req, res) => {
    //check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    //extract project information
    const {name} = req.body;
    const newProject = {};
    if(name) {
        newProject.name = name
    }
    try {
        // check ID
        
        let project = await Project.findById(req.params.id)
        console.log(req.params.id)
        //if the project exist or no
        if(!project){
            return res.status(404).send('proyecto no encontrado')
        }
        // verify creator of project
        if(project.creator.toString() !== req.user.id){
            return res.status(401).json({msg:'No autorizado'})
        }
        // update
        project = await Project.findByIdAndUpdate({ _id: req.params.id }, { $set: newProject }, {new: true});
        res.json({project})
        
    } catch (error) {
        console.log(error)
        res.status(500).send('error en el servidor... al actualizar')
    }
}

exports.deleteProject = async (req, res) =>{

    try {
         // check ID
    
        let project = await Project.findById(req.params.id)
        console.log(req.params.id)
        //if the project exist or no
        if(!project){
            return res.status(404).send('proyecto no encontrado')
        }
        // verify creator of project
        if(project.creator.toString() !== req.user.id){
            return res.status(401).json({msg:'No autorizado'})
        }
        await Project.findOneAndRemove({ _id : req.params.id});
        res.json({msg: 'proyecto eliminado'})
    } catch (error) {
        console.log(error);
        res.status(500).send('error en el servidor al eliminar')
    }
}