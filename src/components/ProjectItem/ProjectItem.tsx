import React from 'react';
import './ProjectItem.scss';
import Button from '../Button/Button';

export interface ProjectItemProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="project-item">
      <img src={imageUrl} alt={title} />
      <div className='btn-box flex justify-between'>
        <Button variant='secondary'>Code</Button>
        <Button>Demo</Button>
      </div>
      <h2 className='title title-small'>{title}</h2>
      <p className='text text-small'>{description}</p>
    </div>
  );
};

export default ProjectItem;
