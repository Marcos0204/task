
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/auth/Login';
import NewAcount from './components/auth/NewAcount';
import Projects from './components/projects/Projects';

/////context
import ProjectState from './context/projects/ProjectState';
import TasktState from './context/tasks/TaskState';
import AlertState from './context/alerts/AlertState';
import AuthState from './context/authentication/AuthState';
import tokenAuth from './config/tokenAuth'
import RoutesPrivate from './components/routes/RoutesPrivate';
import RoutesPlublic from './components/routes/RoutesPublic'

// const token = localStorage.getItem('token')
// if(token) {
//   tokenAuth(token)
// }

const App = () => {
 // console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    <ProjectState>
      <TasktState>
        <AlertState>
          <AuthState>
            <Router>
              <Routes>
                  <Route exact path='/' element={<Login/> } />
                  <Route exact path='/nueva-cuenta' element={<NewAcount/> } />
                  <Route exact path='/proyectos' element={<Projects/> } />
              </Routes>
            </Router>
          </AuthState>
        </AlertState>
      </TasktState>
    </ProjectState>
  )
}

export default App


{           /* <Routes>
                <Route exact path='/' element={
                  <RoutesPlublic>
                    <Login/>
                  </RoutesPlublic>
                } />
                <Route exact path='/nueva-cuenta' element={
                  <RoutesPlublic>
                    <NewAcount/>
                  </RoutesPlublic>
                } />
                <Route exact path='/proyectos' element={
                  <RoutesPrivate>
                    <Projects />
                  </RoutesPrivate>
                } />
              </Routes> */}