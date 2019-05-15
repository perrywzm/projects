import React from "react";

import ProjectPageContent from "./ProjectPageContent";
import "../stylesheets/ProjectPage.css";

class ProjectPage extends React.Component {
    render() {
        return (
            <div className="ui relaxed divided items container segment">
                <div className="item">
                    <img
                        className="ui medium image item-window-image"
                        src={this.props.project.imgsrc}
                        alt={this.props.projectId}
                    />
                    <div className="content">
                        <ProjectPageContent projectId={this.props.projectId} project={this.props.project} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectPage;
