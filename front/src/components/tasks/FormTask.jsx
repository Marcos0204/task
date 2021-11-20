import React from 'react'

const FormTask = () => {
  return (
    <div className='formulario'>
      <form>
          <div className="contenedor-input">
            <input
              type="text"
              name='name'
              className='input-text'
              placeholder='nueva tarea'
              />
          </div>
          <div className="contenedor-input">
            <input
              type="submit"
              className='btn btn-primario btn-block btn-submit'
              value='Agregar tarea'
              />
          </div>
      </form>
    </div>
  )
}

export default FormTask
