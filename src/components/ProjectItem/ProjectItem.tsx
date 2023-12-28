import React from 'react';
import './ProjectItem.scss';

export interface ProjectItemProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="project-item">
            <img src={imageUrl} alt={title} />
            <h2 className='title small'>{title}</h2>
            <p className='text small'>{description}</p>
        </div>
    );
};

export default ProjectItem;
