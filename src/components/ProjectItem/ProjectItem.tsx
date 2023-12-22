import React from 'react';

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
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default ProjectItem;
