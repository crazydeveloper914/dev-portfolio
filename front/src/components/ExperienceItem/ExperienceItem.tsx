import React from 'react';
import SkillTagsList from '../SkillTag/SkillTagsList';

export interface ExperienceItemProps {
  date: string;
  companyAndPosition: string;
  text: string;
  skills: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ date, companyAndPosition, text, skills }) => {
  return (
    <div className="experience-item md:flex pb-5">
      <div className="date-box text text-small text-green pe-14 pb-2 text-nowrap">
        {date}
      </div>
      <div className="content-box">
        <h3 className='title title-small'>{companyAndPosition}</h3>
        <p className='text text-small pt-2 pb-4'>{text}</p>
        <SkillTagsList skills={skills} variant="gray" />
      </div>
    </div>
  );
};

export default ExperienceItem;
