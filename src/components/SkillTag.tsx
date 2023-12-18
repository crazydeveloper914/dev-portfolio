// SkillTag.tsx
import React from 'react';

interface SkillTagProps {
  label: string;
  variant: 'green' | 'gray';
}

const SkillTag: React.FC<SkillTagProps> = ({ label, variant }) => {
  return (
    <span className={`skill-tag ${variant}`}>
      {label}
    </span>
  );
};

export default SkillTag;
