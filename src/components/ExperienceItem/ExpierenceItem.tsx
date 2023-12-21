import React from 'react';
import SkillTagsList from '../SkillTag/SkillTagsList';

export interface ExperienceItemProps {
  id: number;
  date: string;
  title: string;
  text: string;
  skills: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ date, title, text, skills }) => {
  return (
    <div className="experience-item flex">
      <div className="date-box text small pe-10">
        <span>{date}</span>
      </div>
      <div className="content-box">
        <h3 className='title small'>{title}</h3>
        <p className='text small pt-2 pb-4'>{text}</p>
        <SkillTagsList skills={skills} variant="gray" />
      </div>
    </div>
  );
};

export default ExperienceItem;
