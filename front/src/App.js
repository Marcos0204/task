
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/auth/Login';
import NewAcount from './components/auth/NewAcount';
import Projects from './components/projects/Projects';

/////context
import ProjectState from './context/projects/ProjectState';
import TasktState from './context/tasks/TaskState';
import AlertState from './context/alerts/AlertState';
import AuthState from './context/authentication/AuthState';

const App = () => {

  return (
    <ProjectState>
      <TasktState>
        <AlertState>
          <AuthState>
            <Router>
              <Routes>
                <Route exact path='/' element={<Login/>} />
                <Route exact path='/nueva-cuenta' element={<NewAcount/>} />
                <Route exact path='/proyectos' element={<Projects/>} />
              </Routes>
            </Router>
          </AuthState>
        </AlertState>
      </TasktState>
    </ProjectState>
  )
}

export default App
