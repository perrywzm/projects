import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/ProjectPage.css";

class ProjectPageContent extends React.Component {
    renderTechnologiesList(techs) {
        return techs.map(e => {
            return <div className="item">{e}</div>;
        });
    }

    renderButtons = () => {
        return this.props.project.btns.map(btn => {
            if (btn.link === "none") {
                return (
                    <a className="fluid ui teal basic button item-btn">
                        {btn.text}
                    </a>
                );
            }

            return (
                <a
                    className="fluid ui teal basic button item-btn"
                    href={btn.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {btn.text}
                </a>
            );
        });
    };

    parseNewlineToPara = text => {
        return text.split("\n").map(str => {
            return <p>{str}</p>;
        });
    };

    render() {
        const { project } = this.props;
        return (
            <div className="item-window-content">
                <div className="ui item">
                    <h3 className="ui center aligned header">
                        <span>{project.name}</span>
                        <span style={{ float: "right", width: "0" }}>
                            <Link to="/projects">
                                <i
                                    className="teal right ui close icon"
                                    style={{ transform: "translate(-100%,0%)" }}
                                />
                            </Link>
                        </span>
                    </h3>
                    <div className="item-window-text">
                        {this.parseNewlineToPara(project.longDescription)}
                    </div>
                    <div className="ui divider" />
                    <div className="ui horizontal bulleted list">
                        {this.renderTechnologiesList(project.whatWasUsed)}
                    </div>
                </div>
                <div className="item">{this.renderButtons()}</div>
            </div>
        );
    }
}

export default ProjectPageContent;
