import React from 'react';
import './SkillTag.scss';

interface SkillTagProps {
  skill: string;
  variant: 'green' | 'gray';
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, variant }) => {
  return (
    <span className={`skill-tag ${variant}`}>
      {skill}
    </span>
  );
};

export default SkillTag;
