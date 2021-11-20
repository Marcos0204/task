import React, {useState} from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
  const [ user, setUser ] = useState({
    email:'',
    password:''
  })
  const { email, password } = user;
  const handleChange= (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const hanledSubmit= e =>{
    e.preventDefault()
    ///validar


    //pasar al action

    ///limpiar campos
    setUser({
      email:'',
      password:''
    })
  }
  return (
    <div className='form-usuario'>
      <div className="contenedor-form sombra-drak">
        <h1>iniciar sesion</h1>
        <form 
          onSubmit={hanledSubmit}
        >
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
            <input type='submit' className='btn btn-primario btn-block' value='iniciar Sesion'/>
          </div>

        </form>
        <Link to='/nueva-cuenta' className='enlace-cuenta'>Obtener Cuenta</Link>
      </div>
    </div>
  )
}

export default Login
