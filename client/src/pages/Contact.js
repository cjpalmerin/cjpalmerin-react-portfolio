import React from 'react';
import '../App.css';

import Navbar from '../components/Navbar'

function Contact() {
    return (
        <>
            <Navbar />
            <div className="jumbotron jumbotron-fluid">
                <div className="container contact-container">
                    <h3>Contact Me</h3>
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
        </>
    )
}


export default Contact;