import React from 'react';
import '../App.css';

import Navbar from '../components/Navbar'

export default function Projects() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 projects-div">

                        <div className="project-div">
                            <h6>Northwestern Bootcamp Project One</h6>
                            <img src="../../assets/images/weatherEats/weatherEats-06.png" className="project-img" alt="weatherEats logo" />
                            <p className="projects-p">First project completed at Northwestern Coding Bootcamp. Utilizing two APIs, Open Weather and the Meal DB my
                            team and I created an app that provides food suggestions based on the weather. I was in charge of front-end
              and made contributions to JavaScript.</p>
                            <span className="projects-icons">
                                <a href="https://cbruder1292.github.io/Project1/" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i></a>
                            </span>
                            <span className="projects-icons">
                                <a href="https://github.com/cbruder1292/Project1" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>
                            </span>
                        </div>

                        <div className="project-div">
                            <h6>Northwestern Bootcamp Project Two</h6>
                            <img src="../../assets/images/localspot/localspot-05.png" className="project-img" alt="LocalSpot logo" />
                            <p className="projects-p">Utilizing node.js, express.js, express-handlebars,
                            materalize, mysql2, and sequelize along Yelp-Fusion API, my team created a curated list of places to go in
                            Chicago. Users can view the list and add a like to whichever spots they like or want to hit up. I was in
              charge of designing the front end and contributed to back end routing and JavaScript.</p>
                            <span className="projects-icons">
                                <a href="https://agile-journey-25400.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i></a>
                            </span>
                            <span className="projects-icons">
                                <a href="https://github.com/blapete/project-2" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>
                            </span>
                        </div>

                        <div className="project-div">
                            <h6>Northwestern Bootcamp Project Three</h6>
                            <img src="../../assets/images/chromacove/chromacove-10.png" className="project-img" alt="LocalSpot logo" />
                            <p className="projects-p">Utilizing React.js node.js, express.js,
                            materalize, MongoDB with Mongoose along the Unsplash API, I led my team as project manager to create an app that places the focus on the individual photographer.
                            By searching for free, high quality images, the user can find photographers, view their info, and build an extensive list of their favorite photographers for future reference. </p>
                            <span className="projects-icons">
                                <a href="https://agile-journey-25400.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i></a>
                            </span>
                            <span className="projects-icons">
                                <a href="https://github.com/blapete/project-2" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>
                            </span>
                        </div>

                        <div className="project-div">
                            <h6>Express & MySQL</h6>
                            <h3 className="project-name">Eat-Da-Burger</h3>
                            <p className="projects-p">Save and devour your own burger ideas with Eat-Da-Burger. This app was created using node.js, express.js, express-handlebars, and mySQL.</p>
                            <span className="projects-icons">
                                <a href="https://eat-da-burger-cjpalmerin.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i></a>
                            </span>
                            <span className="projects-icons">
                                <a href="https://github.com/cjpalmerin/Eat-Da-Burger" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>
                            </span>
                        </div>

                        <div className="project-div">
                            <h6>MongoDB</h6>
                            <h3 className="project-name">Fitness Tracker</h3>
                            <p className="projects-p">Keeping track of your physical health is incredibly important, and with this MongoDB Fitness Tracker, you'll be able to do just that! Add all the exercises you've been doing and check out all the hard work you've put in on the dashboard!</p>
                            <span className="projects-icons">
                                <a href="https://mongodb-fitness-tracker-cjpalm.herokuapp.com/?id=5ec001cb8ff40d0017cb66d0" target="_blank" rel="noopener noreferrer"> <i className="fas fa-link"></i></a>
                            </span>
                            <span className="projects-icons">
                                <a href="https://github.com/cjpalmerin/mongodb-fitness-tracker" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>
                            </span>
                        </div>

                        <div className="project-div">
                            <h6>Third Party APIs</h6>
                            <h3 className="project-name">Work Day Scheduler</h3>
                            <p className="projects-p">This application displays the current date and time inside of the jumbotron. From there you can see what time
                            of day it is based on the coloring of the different rows in the application. Grey rows will show when that
                            time of day has already passed, a red row will show you the current hour slot, and green rows will show the
          future.</p>
                            <span className="projects-icons">
                                <a href="https://cjpalmerin.github.io/Homework-5/"> <i className="fas fa-link"></i></a>
                            </span>
                            <span className="projects-icons">
                                <a href="https://github.com/cjpalmerin/Homework-5" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github-square"></i></a>
                            </span>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
