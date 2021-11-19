const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../middleware/auth');
const { check } = require('express-validator')

// creat projejct
//api project

router.post('/',
    auth,
    [
        check('name', 'el nombre del  projecto es obligatorio').not().isEmpty()
    ],
    projectController.createProject
)

//get all projects
router.get('/',
    auth,
    projectController.getPojects
)

//update project
router.put('/:id',
    auth,
    [
        check('name', 'el nombre del  projecto es obligatorio').not().isEmpty()
    ],
    projectController.updateProject
)

//delete project 
router.delete('/:id',
    auth,
    [
        check('name', 'el nombre del  projecto es obligatorio').not().isEmpty()
    ],
    projectController.deleteProject
)

module.exports = router;