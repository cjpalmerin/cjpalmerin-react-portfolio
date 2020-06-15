import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects';
import WeatherEats from './pages/WeatherEats';
import LocalSpot from './pages/LocalSpot';
import ChromaCove from './pages/ChromaCove';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutMe} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/weathereats" component={WeatherEats} />
      <Route exact path="/localspot" component={LocalSpot} />
      <Route exact path="/chromacove" component={ChromaCove} />

    </Router>
  );
}

export default App;
