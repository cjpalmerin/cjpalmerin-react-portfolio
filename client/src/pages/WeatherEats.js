import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const demopic2 = '../../assets/images/weatherEats/weatherEats-02.png'
const demopic1 = '../../assets/images/weatherEats/weatherEats-01.png'
const demopic3 = '../../assets/images/weatherEats/weatherEats-03.png'
const demopic4 = '../../assets/images/weatherEats/weatherEats-04.png'
const WELogo = '../../assets/images/weatherEats/weatherEats-06.png'

export default function WeatherEats() {
    return (

        <>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <img src= {WELogo} alt="weatherEats logo" className="wE-header" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <img src= {demopic2} alt="weatherEats demo pic" className="wE-pic" />
                    <img src= {demopic1} alt="weatherEats demo pic" className="wE-pic" />
                    <img src= {demopic4} alt="weatherEats demo pic" className="wE-pic" />
                    <img src= {demopic3} alt="weatherEats demo pic" className="wE-pic" />
                </div>
                <div className="col-sm-4">
                    <p>We’ve all experienced being indecisive about what to eat at one point or another and we know that weather
                    plays a big role in making that decision. You probably don’t want beef pot-roast and potatoes when it’s 90
                    degrees outside in Miami and you probably don’t want a Quinoa bowl if you live in a heartier place like
                    Alaska. That’s why we created weatherEats. This app will help users from around the world get some new ideas
                    for recipes that are suited to their climate.
              <br />
                        <span style={spanStyling}>
                            <a href="https://cbruder1292.github.io/Project1/" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i></a>
                        </span>
                        <span style={spanStyling}>
                            <a href="https://github.com/cbruder1292/Project1" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>
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
    fontSizing: '5em',
    color: 'white'
}
