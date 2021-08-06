import React from 'react'
import GeneralTemplate from '../../components/template/GeneralTemplate';

import projectList from '../../projects-mock';

const ProjectDetail = props => {
  
  const [project, setProject] = React.useState({});
  
  React.useEffect(() => {
    
    const foundProject = projectList.find(project => {
      return project._id === props.match.params.id
    });
    
    console.log("Este é o projeto selecionado...", foundProject);
  setProject(foundProject);

},[]) // Depois que a tela é totalmente preenchida, ele chama o projeto selecionado


  return (
    <div>
      <GeneralTemplate>
        <h1>Nome do projeto: {project.name}</h1>
        <p>Descrição: {project.description}</p>

        <p>Tasks:</p>
          <ul>
            <li>Tasks 1</li>
            <li>Tasks 2</li>
            <li>Tasks 3</li>
          </ul>

      </GeneralTemplate>
    </div>
  )
}


export default ProjectDetail;