import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Friends from "./components/friends";
import MyProfile from "./components/my-profile";
import Resources from "./components/resources";
import Login from "./components/login";
import { Layout } from './components/layout';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Layout>
                    <Router>
                        <div className="container">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="collpase navbar-collapse">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="navbar-item">
                                            <Link to="/" className="navbar-brand">COVID Connect</Link>
                                        </li>
                                        <li className="navbar-item">
                                            <Link to="/friend" className="nav-link">Friends</Link>
                                        </li>
                                        <li className="navbar-item">
                                            <Link to="/profile" className="nav-link">My Profile</Link>
                                        </li>
                                        <li className="navbar-item">
                                            <Link to="/resources" className="nav-link">COVID Resources</Link>
                                        </li>
                                        <li className="navbar-item">
                                            <Link to="/button" className="nav-link">Login</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <br/>
                        <Route path="/" exact component={Home} />
                        <Route path="/friend" component={Friends} />
                        <Route path="/profile" component={MyProfile} />
                        <Route path="/resources" component={Resources} />
                        <Route path="/button" component={Login} />
                    </Router>
                </Layout>
            </React.Fragment>
        );
    }
}

export default App;
