import React from "react";
import SkillTag from "./SkillTag";

interface SkillTagsListProps {
  skills: string[];
  variant: 'green' | 'gray';
}

const SkillTagsList: React.FC<SkillTagsListProps> = ({ skills, variant }) => {
  return (
    <div className="skill-tags-list">
      {skills.map(skill => (
        <SkillTag key={skill} skill={skill} variant={variant} />
      ))}
    </div>
  );
}

export default SkillTagsList;