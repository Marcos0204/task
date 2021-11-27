import React, {useState, useContext, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import AlertContext from '../../context/alerts/AlertContext'


const NewAcount = () => {
  const { alert, showAlert} = useContext(AlertContext);
  
  const [ user, setUser ] = useState({
    name:'',
    email:'',
    password:'',
    confir:''
  })
  const { email, password, name, confir } = user;
  const handleChange= (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const hanledSubmit= e =>{
    e.preventDefault()
    ///validar
    if (name.trim() === '' ||
        email.trim() === '' ||
        password.trim() === '' ||
        confir.trim() === '' ) {
          showAlert('Todos los campos son obligatorios', 'alerta-error')
          return;
        }


    ///validar que los dos campos sean iguales
    if(password.length < 6 ) {
      showAlert('El password debe ser de almenos 6 caravteres', 'alerta-error')
          return;
    }
    if(password !== confir) {
      showAlert('Las contraseñas no coinciden', 'alerta-error')
          return;
    }

    //pasar al action
    
    ///limpiar campos
    setUser({
      email:'',
      password:'',
      name:'',
      confir:''

    })
  }
  return (
    <div className='form-usuario'>
      {alert && <div className= {`alerta ${alert.category}`}>{alert.msg} </div> }
      <div className="contenedor-form sombra-drak">
        <h1>Obtener Cuenta</h1>
        <form 
          onSubmit={hanledSubmit}
        >
          <div className="campo-form">
            <label htmlFor="name">name</label>
            <input
              type="text"
              name='name'
              value={name}
              onChange={handleChange}
              />
          </div>
          <div className="campo-form">
            <label htmlFor="email">email</label>
            <input
              type="text"
              name='email'
              value={email}
              onChange={handleChange}
              />
          </div>
          <div className="campo-form">
            <label htmlFor="password">password</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              />
          </div>
          <div className="campo-form">
            <label htmlFor="confir">confir</label>
            <input
              type='password'
              name='confir'
              value={confir}
              onChange={handleChange}
              />
          </div>
          <div className="campo-form">
            <input type='submit' className='btn btn-primario btn-block' value='Registrar me'/>
          </div>
        </form>
        <Link to='/' className='enlace-cuenta'>Volver a Iniciar Sesion</Link>
      </div>
    </div>
  )
}

export default NewAcount

