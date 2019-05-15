import React from "react";
import NavbarItem from "./NavbarItem";
import NavbarSearch from "./NavbarSearch";
import { ROUTES } from "../routes";
import { withRouter } from "react-router-dom";
import '../stylesheets/Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        let currentRouteId = this.getCurrentRouteId();
        this.state = { selectedRouteId: currentRouteId };
    }

    getCurrentRouteId = () => {
        if (this.props.location.pathname === "/") {
            return 0;
        } else {
            console.log(this.props.location.pathname.split("/")[1])
            let idx = ROUTES.findIndex(
                route =>
                    "/" + this.props.location.pathname.split("/")[1].toLowerCase() ===
                    route.path.toLowerCase()
            );

            // Default to selecting the homepage tab if route is not found
            return idx >= 0 ? idx : 0;
        }
    };

    onSelectRoute = id => {
        console.log(id);
        this.setState({ selectedRouteId: id });
    };

    renderNavbarItems = () => {
        console.log(ROUTES);

        return ROUTES.map((route, idx) => {
            let active = idx === this.state.selectedRouteId;
            return (
                <NavbarItem
                    key={idx}
                    id={idx}
                    to={route.path}
                    title={route.title}
                    active={active}
                    onClickFunction={this.onSelectRoute}
                />
            );
        });
    };

    render() {
        console.log(this.props);
        return (
            <div className="ui secondary pointing menu">
                <div className="item navbar-title-text">
                    PERRY
                </div>
                <div className="right menu">
                    {this.renderNavbarItems()}
                    <NavbarSearch />
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);
