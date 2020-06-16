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
                        <p> It's easy to find domain free photography and art on the internet at the expense of the artist. With ChromaCove you have the ability to search for photography and find free photos. Instead of just saving said photography, the user actually adds the photographer to their favorites for future reference. This app was created using React, Express, MongoDB, Node, Passport, and the Unsplash API.</p>
                        <p>For the future of ChromaCove, we would like to extend this idea to cover other artists as well from painters to graphic designers to create a massive online encyclopedia for independent artists. Check out our Herkou link below!
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
