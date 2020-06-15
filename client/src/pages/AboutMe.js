import React from 'react';
import '../App.css';

import Navbar from '../components/Navbar'

function AboutMe() {
    return (
        <>
        <Navbar />
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row">
                    <div className ="col-md-1"></div>
                    <div className="col-md-4">
                        {/* <img id="profile-pic" alt="face" src='../assets/images/08449DB0-F0BD-4670-B919-44936B033F4B_copy.JPG' /> */}
                    </div>
                    <div className="col-md-6">
                        <br />
                        <br />
                        <h3>Hello! I'm CJ</h3>
                        <p>I'm a web developer in the making with a background in graphic design. When I'm not perfecting the art of
                        coding or designing something pretty, I'm probably playing bass, doodling, cooking something good, or
                        wasting time on my Nintendo Switch.
                                    </p>
                        <p>
                            <span className="contact-icons">
                                <a href="mailto: cjpalmerin@gmail.com"><i className="fas fa-envelope-square"></i></a>
                            </span>
                            <span className="contact-icons">
                                <a href="https://www.linkedin.com/in/cj-palmerin-86257996/" target="_blank" rel="noopener noreferrer"><i
                                    className="fab fa-linkedin"></i></a>
                            </span>
                            <span className="contact-icons">
                                <a href="https://github.com/cjpalmerin" target="_blank" rel="noopener noreferrer"> 
                                <i className="fab fa-github-square"></i></a>
                            </span>
                            <span className="contact-icons">
                                <a href="https://www.instagram.com/cj.palmerin/" target="_blank" rel="noopener noreferrer"><i
                                    className="fab fa-instagram-square"></i></a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}


export default AboutMe;