import React from "react";
import { connect } from "react-redux";

import { enterSearchTerm } from "../actions";

class NavbarSearch extends React.Component {
    state = { searchTerm: "" };

    onInputChange = e => {
        this.setState({ searchTerm: e.target.value });
        this.props.enterSearchTerm(e.target.value);
    };

    handleKeydown = e => {
        if (e.keyCode === 27) {
            this.setState({ searchTerm: "" });
            this.props.enterSearchTerm("");
        }
    }

    render() {
        return (
            <div className="item">
                <div className="ui icon input">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={this.state.searchTerm}
                        onChange={this.onInputChange}
                        onKeyDown={this.handleKeydown}
                    />
                    <i className="search link icon" />
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    { enterSearchTerm }
)(NavbarSearch);
