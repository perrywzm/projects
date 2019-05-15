import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import HomeRoute from "./HomeRoute";
import ProjectsRoute from "./ProjectsRoute";
import ProjectRoute from "./ProjectRoute";
import "../stylesheets/App.css";

const NotFoundRoute = () => {
    return <div className="ui header container">404 Not Found!</div>;
};

class App extends React.Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="ui item app-container">
                    {/* Navbar router switch: Do not show navbar on homepage */}
                    <Switch>
                        <Route path="/" exact component={null} />
                        <Route component={Navbar} />
                    </Switch>

                    {/* Content router switch */}
                    <Switch>
                        <Route path="/" exact component={HomeRoute} />
                        <Route path="/projects" exact component={ProjectsRoute} />
                        <Route path="/projects/:projectId" component={ProjectRoute} />
                        <Route component={NotFoundRoute} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
