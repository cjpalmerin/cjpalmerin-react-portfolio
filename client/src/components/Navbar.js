import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';



export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link to="/" className="navbar-brand"><img id="header-logo" alt="CJ logo" src="../../assets/images/cjpalmerin_logo_500x500.png" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <span style={spanStyle}>
                        <i className="fas fa-bars"></i>
                    </span>
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Me </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/resume">Resume</Link>
                    </li>
                    <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Me</a>
                        </li>
                </ul>
            </div>
        </nav>
    )
}

const spanStyle = {
    fontSize: '20px',
    color: 'white'
    
}