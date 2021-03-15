import React from 'react';
import data from "./data/projects.json"
import {Header, ProjectsContainer} from "./elements/Projects";
import Project from "./Project";

const Projects = () => {

    return (
        <div>
            <Header>Projects</Header>
            <ProjectsContainer>

                {
                    data.projects.map((project: any) => {
                        return <Project project={project}/>
                    })
                }
            </ProjectsContainer>
        </div>
    );
};

export default Projects;