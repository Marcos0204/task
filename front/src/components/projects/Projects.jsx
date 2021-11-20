import React from 'react';
import { useParams } from "react-router-dom";


const Projects = () => {
    let params = useParams();
    console.log(params)

  return (
    <div>
      <h2>proyectos</h2>
    </div>
  )
}

export default Projects
