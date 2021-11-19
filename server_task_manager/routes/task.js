const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');
const { check } = require('express-validator')

//create new task
//api/tareas
router.post('/',
    auth,
    [
        check('name', 'el nombre del  projecto es obligatorio').not().isEmpty(),
        check('project', 'el proyecto  es obligatorio').not().isEmpty()
    ],
    taskController.createTask
)

// get task for project
router.get('/',
    auth,
    taskController.getTasks
)

// update task for project
router.put('/:id',
    auth,
    taskController.updateTask
)

// delete task for project
router.delete('/:id',
    auth,
    taskController.deleteTask
)


module.exports= router;