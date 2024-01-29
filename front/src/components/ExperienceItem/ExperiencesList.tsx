import React from 'react';
import ExperienceItem, { ExperienceItemProps } from './ExperienceItem';
import { v4 as uuidv4 } from 'uuid';

interface ExperiencesListProps {
  experiences: ExperienceItemProps[];
}

const ExperiencesList: React.FC<ExperiencesListProps> = ({ experiences }) => {
  return (
    <div className='experiences-list'>
      {experiences.map(exp => (
        <ExperienceItem
          key={uuidv4()}
          {...exp}
        />
      ))}
    </div>
  );
}

export default ExperiencesList;