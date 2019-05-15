import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { viewItem } from "../actions";
import "../stylesheets/Project.css";

class Project extends React.Component {
    onViewItem = () => {
        if (this.props.active) {
            this.props.viewItem(this.props.id);
        }
    };

    render() {
        let { id, name, description, imgsrc } = this.props;

        return (
            <div className="column">
                <div className="ui segment segment-expanded project-item">
                    <div className="ui item">
                        <h3 className="ui center aligned header">{name}</h3>
                        <p>{description}</p>
                    </div>
                    
                    <img className="ui fluid image project-image" src={imgsrc} alt={name} />
                    <Link
                        to={`/projects/${id}`}
                        className="ui teal basic button"
                        onClick={this.onViewItem}
                    >
                        View
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        active: state.viewedItem == null
    };
};

export default connect(
    mapStateToProps,
    { viewItem }
)(Project);
