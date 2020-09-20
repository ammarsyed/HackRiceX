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
import PrivateRoute from './components/privateroute'
import "./app.css"
// class App extends Component {
//     render() {
//         return (
//             <AuthProvider>
//                 <PrivateRoute exact path="/feed" component={Feed}/>
//                 <Route exact path="/" component={Home}/>
//                 <Route exact path="/login" component={Login}/>
//                 <Route exact path="/signup" component={Signup} />
//             </AuthProvider>
//         );
//     }
// }

function App() {
    const user = null;

    return (
        <AuthProvider>
            <div className = "app_body">
                <PrivateRoute exact path="/feed" component={Feed} />
            </div>
            
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup} />
            </AuthProvider>
    )
}

export default App;
