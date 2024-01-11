import React from "react";
import SkillTag from "./SkillTag";
import { v4 as uuidv4 } from 'uuid';

interface SkillTagsListProps {
  skills: string[];
  variant: 'green' | 'gray';
}

const SkillTagsList: React.FC<SkillTagsListProps> = ({ skills, variant }) => {
  return (
    <div className="skill-tags-list">
      {skills.map(skill => (
        <SkillTag key={uuidv4()} skill={skill} variant={variant} />
      ))}
    </div>
  );
}

export default SkillTagsList;