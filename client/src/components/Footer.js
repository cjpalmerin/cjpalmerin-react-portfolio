import React from 'react';
import '../App.css';

export default function Footer() {
    return (
        <div className="row">
            <div className="col-sm-12 footer">
                <p className="p-footer">© CJ Palmerin 2020</p>
                <p>
                    <span className="footer-icons">
                        <a href="mailto: cjpalmerin@gmail.com"><i className="fas fa-envelope-square"></i></a>
                    </span>
                    <span className="footer-icons">
                        <a href="https://www.linkedin.com/in/cj-palmerin-86257996/" target="_blank" rel="noopener noreferrer"><i
                            className="fab fa-linkedin"></i></a>
                    </span>
                    <span className="footer-icons">
                        <a href="https://github.com/cjpalmerin" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github-square"></i></a>
                    </span>
                    <span className="footer-icons">
                        <a href="https://www.instagram.com/cj.palmerin/" target="_blank" rel="noopener noreferrer"><i
                            className="fab fa-instagram-square"></i></a>
                    </span>
                </p>

            </div>
        </div>
    )
}
