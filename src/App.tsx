import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import About from './pages/About/about';
import Home from './pages/Home/home';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="myContent">
          <Router>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
