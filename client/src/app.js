import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Friends from "./components/friends";
import MyProfile from "./components/my-profile";
import Resources from "./components/resources";
import Login from "./components/login";
import { Jumbotron } from './components/Jumbotron';
import Header from './components/Header';

class App extends Component {

    render() {
        return (
            <React.Fragment>
                    <Header></Header>
            </React.Fragment>
        );
    }
}

export default App;
