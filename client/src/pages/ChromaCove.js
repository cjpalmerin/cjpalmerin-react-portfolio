import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LSLogo = "../assets/images/chromacove/chromacove-10.png";
const LSdemo6 = "../assets/images/chromacove/chomacove_project_layout2_data_flow.png";
const LSdemo7 = "../assets/images/chromacove/chomacove_project_layout2_photo_card.png";
const LSscreenshot = "../assets/images/chromacove/chomacove_project_layout2_photog_info_page.png";
const LSadminshot = "../assets/images/chromacove/chomacove_project_layout2_user_story.png";


export default function ChromaCove() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img src={LSLogo} alt="LocalSpot Logo" className="wE-header" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={LSdemo6} alt="LocalSpot Demo" className="wE-pic" />
                        <img src={LSdemo7} alt="LocalSpot Demo" className="wE-pic" />
                        <img src={LSscreenshot} alt="LocalSpot Demo" className="wE-pic" />
                        <img src={LSadminshot} alt="LocalSpot Demo" className="wE-pic" />
                    </div>
                    <div className="col-sm-4">
                        <p> Whenever visitors come to Chicago, they're always told about the same places; head over to the Museum Campus
                        or Navy Pier then grab a slice of decent pizza at Giordano's. We have no problem with at, but there's so much
              more to Chicago than the tourist spots. What about the spots the locals hit up? </p>
                        <p>Check out LocalSpot for a
                        curated selection of locations around town. Visitors and Chicago natives alike could find a new spot to check
                        out or see a familiar spot they love. In which case, they can give it a like!
              <br />
                            <br />
                            <span style={spanStyling}>
                                <a href="https://afternoon-waters-22064.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i></a>
                            </span>
                            <span style={spanStyling}>
                                <a href="https://github.com/cjpalmerin/chroma-cove" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>
                            </span>
                            <br />
                            <Link to="/projects"><button className="back-button">Back</button></Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

const spanStyling = {
    fontSizing: '3em',
    color: 'white'
}
