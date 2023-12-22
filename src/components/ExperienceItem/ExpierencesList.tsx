import React from 'react';
import ExperienceItem, { ExperienceItemProps } from './ExpierenceItem';

interface ExperiencesListProps {
  experiences: ExperienceItemProps[];
}

const ExperiencesList: React.FC<ExperiencesListProps> = ({ experiences }) => {
  return (
    <div className='experiences-list'>
      {experiences.map(exp => (
        <ExperienceItem
          key={exp.id}
          {...exp}
        />
      ))}
    </div>
  );
}

export default ExperiencesList;