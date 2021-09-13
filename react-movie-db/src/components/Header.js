import React from 'react'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink exact className="navbar-brand" to="/">Movie DB</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/" activeClassName="nav-link--active" >Home</NavLink>
                        </li>
                    </ul>
                    <NavLink className="btn btn-link btn-link--search" to="/Search" activeClassName="btn-link--active">Search <FontAwesomeIcon icon="search"/></NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header