import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
// const logo = '../assets/images/cj-web-icon.png'


export default function Home() {
    return (
        <div className="jumbotron-home jumbotron-fluid">
            <div className="container">
                <img src="../assets/images/cjpalmerin_logo_500x500.png" id="logo" alt="cj palmerin logo" />
                <div id="front-menu">
                    <Link to='/about'> About Me </Link>
                    <p className="separator"> | </p>
                    <Link to='/projects'> Web Development </Link>
                    <p className="separator"> | </p>
                    <Link to='/resume'> Resume </Link>
                    <p className="separator"> | </p>
                    <Link to='/design'> Design </Link>
                    <p className="separator"> | </p>
                    <Link to='/contact'> Contact </Link>
                </div>
            </div>
        </div>
    )
}