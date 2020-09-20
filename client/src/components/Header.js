import React from 'react';
import { Component } from 'react';
import "./Header.css";
import Navbar from "./Navbar";

class Header extends Component{
    render() {
        return(
            <div className="header">
                <div className="header__left">
                    <img src="https://i.imgur.com/xdWq11g.png"></img>
                </div>
    
                <div className="header__middle">
                    <Navbar></Navbar>
                </div>
    
                <div className="header__right"></div>
            </div>
    
        );
    } 
}

export default Header;