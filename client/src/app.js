import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Friends from "./components/friends";
import Call from "./components/call";
import MyProfile from "./components/my-profile";
import Resources from "./components/resources";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="navbar-brand">COVID Coalition</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/friend" className="nav-link">COVID Pals</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/call" className="nav-link">Live Call</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/profile" className="nav-link">My Profile</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/resources" className="nav-link">COVID Resources</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <br/>
                <Route path="/" exact component={Home} />
                <Route path="/friend" component={Friends} />
                <Route path="/call" component={Call} />
                <Route path="/profile" component={MyProfile} />
                <Route path="/resources" component={Resources} />

            </Router>
        );
    }
}

export default App;
