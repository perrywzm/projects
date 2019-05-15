import React from "react";
import Project from "./Project";
import { connect } from "react-redux";

import "../stylesheets/ProjectList.css";

class ProjectList extends React.Component {
    renderProjectCategories() {
        return this.props.projects.map(cat => {
            const filteredProjects = this.filterProjectsBySearch(cat.projects);

            if (filteredProjects.length === 0) {
                return (
                    <div className="ui vertical segment">
                        <h2 className="ui header container">{cat.name}</h2>
                        <p className="ui center aligned projects-nomatch-text">
                            <em>No projects match the search term...</em>
                        </p>
                    </div>
                );
            }

            return (
                <div className="ui vertical segment">
                    <h2 className="ui header container">{cat.name}</h2>
                    <div className="ui four column doubling stackable grid">
                        {this.renderProjectList(filteredProjects)}
                    </div>
                </div>
            );
        });
    }

    filterProjectsBySearch(projects) {
        // Case insensitive search
        const searchTerm = this.props.searchTerm.toLowerCase();
        return projects.filter(
            p =>
                p.name.toLowerCase().includes(searchTerm) ||
                p.description.toLowerCase().includes(searchTerm) ||
                p.whatWasUsed.some((e) => e.toLowerCase().includes(searchTerm))
        );
    }

    renderProjectList(projects) {
        return projects.map((p) => {
            return (
                <Project
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    description={p.description}
                    imgsrc={p.imgsrc} //p.staticImgPath}
                    // imgsrc="https://placekitten.com/300/200"
                />
            );
        });
    }

    render() {
        return (
            <div className="ui container">{this.renderProjectCategories()}</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchTerm: state.searchTerm
    };
};

export default connect(mapStateToProps)(ProjectList);
