import React, { useState } from 'react'

const NewProject = () => {
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

        ///agregar al estate 

        ////reiniciar Form
    }
 
   return (
    <>
        <button
        type='button'
        className='btn btn-block btn-primario'
        >
            Nuevo Proyecto
        </button>
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
    </>
  )
}

export default NewProject
