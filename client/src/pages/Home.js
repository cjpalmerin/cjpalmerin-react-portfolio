import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
// const logo = '../assets/images/cj-web-icon.png'


export default function Home() {
    return (
        <div className="jumbotron-home jumbotron-fluid">
            <div className="container">
            <img src= "../assets/images/cjpalmerin_logo_500x500.png" class="logo" alt="cj palmerin logo" />
                    {/* <div id="front-menu"> */}
                    <Link to ='/about'> About Me </Link>
                    {/* <a href= "/aboutme" className="menu-button">About Me</a> */}
                    {/* <p className="menu-button">About Me</p> */}
                    {/* </Link> */}
                    <p className="separator"> | </p>
                    {/* <a href="/projects" className="menu-button">Projects</a> */}
                    {/* <p className="separator"> | </p> */}
                    {/* <Link to="/resume" className="menu-button">Resume</Link> */}
                    {/* <p className="separator"> | </p> */}
                    {/* <Link to="/contact" className="menu-button">Contact</Link> */}
                    {/* </div> */}
            </div>
        </div>
    )
}