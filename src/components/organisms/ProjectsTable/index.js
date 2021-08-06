import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

import './ProjectsTable.css';

const ProjectsTable = ({projectsList}) => {

    return (
    <Table className="projects-table"  striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Project Name</th>
          <th>Project Description</th>
        </tr>
      </thead>
      <tbody>
        {projectsList.map(project => (
          
          <tr key={project._id}>
            <td>{project._id}</td>
              <td>
                <Link to={`/projects/${project._id}`}>
                  {project.name}
                </Link>
                </td>
            <td>{project.description}</td>
          </tr>
          
        ))}
      </tbody>
    </Table>
    )
};

export default ProjectsTable;