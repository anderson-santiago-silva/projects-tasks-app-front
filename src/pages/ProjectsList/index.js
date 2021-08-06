import React from 'react';
import { useEffect, useState } from 'react';

import ProjectFrom from "../../components/organisms/ProjectForm";
import ProjectsTable from "../../components/organisms/ProjectsTable";
import GeneralTemplate from "../../components/template/GeneralTemplate"

import projectList from '../../projects-mock';

const ProjectsList = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectList)
  }, []);

  const handleCreateNewProject = values => {
    return new Promise(resolve => {
      setIsLoading(true);

      setTimeout(() => {
        console.log('Projeto criado com sucesso!');
        setIsLoading(false);

        resolve();
      }, 2000)
    })
  }

  return (
    <GeneralTemplate>
      <ProjectFrom handleCreateNewProject={handleCreateNewProject} isLoading={isLoading}/>
      <ProjectsTable projectsList={projects}/>
    </GeneralTemplate>
)
};

export default ProjectsList;