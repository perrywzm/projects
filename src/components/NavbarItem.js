import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ id, to, title, active, onClickFunction }) => {
    return (
        <Link
            to={to}
            className={"item " + (active ? "active" : "")}
            onClick={() => onClickFunction(id)}
        >
            {title}
        </Link>
    );
};

export default NavbarItem;
