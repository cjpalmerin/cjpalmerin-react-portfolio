import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects';
import WeatherEats from './pages/WeatherEats';
import LocalSpot from './pages/LocalSpot';
import ChromaCove from './pages/ChromaCove';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Design from './pages/Design'


function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutMe} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/weathereats" component={WeatherEats} />
      <Route exact path="/localspot" component={LocalSpot} />
      <Route exact path="/chromacove" component={ChromaCove} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/design" component={Design} />

    </Router>
  );
}

export default App;
