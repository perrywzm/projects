import React from "react";
import { withRouter } from "react-router-dom";
import ProjectPage from "../components/ProjectPage";

import { PROJECTS } from "../data/projects";

class ProjectRoute extends React.Component {
    getProjectInfo = () => {
        const id = this.props.match.params.projectId;
        console.log(id)
        for(var catIdx=0; catIdx < PROJECTS.length; catIdx++) {
            const projects = PROJECTS[catIdx].projects.filter(p => p.id === id);
            if (projects.length > 0) {
                return projects[0];
            }
        }
        return null;
    };

    render() {
        return (
            <ProjectPage
                projectId={this.props.match.params.projectId}
                project={this.getProjectInfo()}
            />
        );
    }
}

export default withRouter(ProjectRoute);
