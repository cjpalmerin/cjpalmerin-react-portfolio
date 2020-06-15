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
                        <div className="col-sm-12">
                            <img id="profile-pic" alt="face" src="../../assets/images/profile_pic.JPG" />
                            <br />
                            <h3 className="about-me-text">Hello! I'm CJ</h3>
                            <p className="about-me-text">I'm a web developer with a background in graphic design. I recently survived and graduated from the Northwestern Coding Bootcamp in June 2020 and am looking forward to getting out into the field of front end web development. After working through this bootcamp, I have experience working with: </p>
                            <ul className="about-me-text">
                                <li>JavaScript ES5 + ES6</li>
                                <li>HTML5 + CSS3</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB + Mongoose</li>
                                <li>MySQL + Sequelize</li>
                                <li>Third Party APIs</li>
                            </ul>
                            <p className="about-me-text">During my years in graphic design, I created brand identites, marketing material, graphics, animations, and videos using:</p>
                            <ul className="about-me-text">
                                <li>Illustrator</li>
                                <li>Photoshop</li>
                                <li>InDesign</li>
                                <li>Animate</li>
                                <li>Premiere Pro</li>

                            </ul>

                            <p className="about-me-text">
                                When I'm not perfecting the art of
                                coding or designing something, I'm probably playing bass, doodling, cooking up something good, or
                                playing Nintendo.

                                <br />
                                <br />
                                <p className="contact-icon-span">
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
                                        <a href="https://www.instagram.com/cj.palmerin/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram-square"></i></a>
                                    </span>
                                </p>
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export default AboutMe;