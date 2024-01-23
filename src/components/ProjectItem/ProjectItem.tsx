import React from 'react';
import './ProjectItem.scss';
import Button from '../Button/Button';
import SkillTagsList from '../SkillTag/SkillTagsList';

export interface ProjectItemProps {
  title: string;
  skills: string[];
  imageUrl: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, skills, imageUrl }) => {
  return (
    <div className="project-item">
      <div className='image-box'>
        <img src={imageUrl} alt={title} />
        <div className='btn-box'>
          <Button variant='secondary'>Code</Button>
          <Button>Demo</Button>
        </div>
      </div>
      <h2 className='title title-small pt-2'>{title}</h2>
      {/* <p className='text text-small'>{description}</p> */}
      <SkillTagsList skills={skills} variant="gray" />
    </div>
  );
};

export default ProjectItem;
