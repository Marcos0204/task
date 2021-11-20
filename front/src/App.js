
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/auth/Login';
import NewAcount from './components/auth/NewAcount';
import Projects from './components/projects/Projects';

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path='/nueva-cuenta' element={<NewAcount/>} />
          <Route exact path='/proyectos' element={<Projects/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
