import React from 'react';
import ProjectItem, { ProjectItemProps } from './ProjectItem';
import { v4 as uuidv4 } from 'uuid';

interface ProjectsListProps {
  projects: ProjectItemProps[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className='projects-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {projects.map((project) => (
        <ProjectItem
          key={uuidv4()}
          {...project}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
