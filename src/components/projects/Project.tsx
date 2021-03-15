import React from 'react';
import {ProjectContainer, ProjectDescription, ProjectImage, ProjectTitle} from "./elements/Project";
import ProjectTechnologies from "./elements/ProjectTechnologies";

export interface Project {
    name: string;
    description: string;
    technologies: string[];
    image: string;
    gitHub: string;
    url: string;
    background: string;
}

export interface ProjectProps {
    project: Project;
}

const Project = ({ project}: ProjectProps) => {

    return (
        <ProjectContainer background={project.background}>
            <ProjectImage src={project.image}/>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTechnologies technologies={project.technologies}/>
        </ProjectContainer>
    );
};

export default Project;