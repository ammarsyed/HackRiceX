import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Friends from "./components/friends";
import MyProfile from "./components/my-profile";
import Resources from "./components/resources";
import Login from "./components/login";
import Signup from "./components/signup"
import { Jumbotron } from './components/Jumbotron';
import Header from './components/Header';
import { AuthProvider } from "./components/firebase"
import Feed from './components/Feed.js';



class App extends Component {

    render() {
        return (
            <AuthProvider>
                <Header></Header>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/feed" component={Feed}/>

            </AuthProvider>
        );
    }
}



export default App;
