import React, { useState, useContext } from 'react'
import ProjectContext from '../../context/projects/ProjectContext'

const NewProject = () => {

    ///state global
    const { form, errorForm, showForm, addProject, showError} = useContext(ProjectContext)
    

    ///state local
    const [ project, setProject ] = useState({
        name:''
    })

    const {name} = project

    const handlerChange = e =>{
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    const handlerSubmitProjec = e =>{
        e.preventDefault();
        ///validar el proyecto
        if(!name) {
            showError()
            return;
        };
        ///agregar al estate 
        addProject(project)
        ////reiniciar Form
        setProject({
            name:''
        })
    }

    //motrar el formulario
    const handlerShowform = () => {
        showForm()
    }
 
   return (
    <>
        <button
        type='button'
        className='btn btn-block btn-primario'
        onClick={handlerShowform}
        >
            Nuevo Proyecto
        </button>
        {form && (
            <form className='formulario-nuevo-proyecto' onSubmit={handlerSubmitProjec} > 
            <input
                type="text"
                className='input-text'
                placeholder='Nuevo Proyecto'
                value={name}
                name='name'
                onChange={handlerChange}
                />
            <input
                type='submit'
                className='btn btn-block btn-primario'
                value='Agregar Proyecto'
            />
        </form>
        )}
        {errorForm && (
            <p className='mensaje error'>El nombre es obligatorio</p>
        ) }
    </>
  )
}

export default NewProject
