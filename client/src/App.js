import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={AboutMe} />
      <Route exact path="/projects" component={Projects} />
    </Router>
  );
}

export default App;
