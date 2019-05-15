import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Homepage.css";
import Scrollable from "./Scrollable";

const Homepage = () => {
    return (
        <div
            className="home-bg-container"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/bg.png)` }}
        >
            <Scrollable>
                <div className="ui container">
                    <div className="home-header">
                        Hi, I'm Perry,
                        <br />
                        Full stack developer &#38; AI enthusiast.
                    </div>
                    <p className="home-subtitle">

                    </p>
                    <div className="centered-flexbox">
                        <Link to="/projects" className="ui home-button">
                            <p>View My Projects</p>
                        </Link>
                    </div>
                </div>
            </Scrollable>
        </div>
    );
};

export default Homepage;
