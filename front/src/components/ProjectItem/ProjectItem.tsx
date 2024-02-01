import React from 'react';
import './ProjectItem.scss';
import Button from '../Button/Button';
import SkillTagsList from '../SkillTag/SkillTagsList';

export interface ProjectItemProps {
  title: string;
  skills: string[];
  image: string;
  codeUrl: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, skills, image, codeUrl }) => {
  return (
    <div className="project-item">
      <div className='image-box'>
        <img src={ `/images/` + image} alt={title} />
        <div className='btn-box'>
          <Button href={codeUrl} variant='secondary'>Code</Button>
          <Button>Demo</Button>
        </div>
      </div>
      <h2 className='title title-small pt-2'>{title}</h2>
      <SkillTagsList skills={skills} variant="simple" />
    </div>
  );
};

export default ProjectItem;
