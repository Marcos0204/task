import React, {useState, useContext, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import AlertContext from '../../context/alerts/AlertContext'
import AuthContext from '../../context/authentication/AuthContext';


const Login = () => {
  const { alert, showAlert} = useContext(AlertContext);
  const { message, authenticated, logIn, userAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()
  ////el caso de que el usuario se haya autenticado o resgistrado
  useEffect(() =>{
    userAuthenticated()
    if(authenticated){
      navigate('/proyectos')
    }
    if(message){
      showAlert(message.msg, message.category)
    }
    
  }, [message, authenticated])

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
    if(email.trim() === '' || password.trim() === '' ) {
      showAlert('todos los campos son obligatorios', 'alerta-error')
      return;
    }

    // //pasar al action
    logIn({
      email, password
    })
    ///limpiar el statate
    setUser({
      email:'',
      password:''
    })
   
  }
  return (
    <div className='form-usuario'>
      {alert && <div className= {`alerta ${alert.category}`}>{alert.msg} </div> }
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
