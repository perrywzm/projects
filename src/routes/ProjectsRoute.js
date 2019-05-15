import React from 'react';
import Scrollable from "../components/Scrollable";
import ProjectList from "../components/ProjectList";

import { PROJECTS } from "../data/projects";

const ProjectsRoute = () => {
    return (
        <Scrollable>
            <ProjectList projects={PROJECTS} />
        </Scrollable>
    );
};

export default ProjectsRoute;