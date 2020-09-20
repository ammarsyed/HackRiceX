import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

class Home extends Component {
    render() {
            return (
                <div className="home-page" style={{display:'flex',flexDirection:"column",alignItems:"center",marginTop:"5em"}}>
                    <div className="home-logo">
                        <img src="https://i.imgur.com/xdWq11g.png"/>
                        <h2>CovidConnect</h2>
                    </div>
                    <NavLink to="/signup" class="btn btn-primary">
                        Sign Up
                    </NavLink>
                    <NavLink to="/login" class="btn btn-primary">
                        Login
                    </NavLink>
                </div>
            );
    }
}

export default Home;