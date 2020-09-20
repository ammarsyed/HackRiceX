import React from 'react';
import { Component } from 'react';
import "./Header.css";
import Navbar from "./Navbar";
import SearchIcon from '@material-ui/icons/Search';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import app from 'firebase';
import Avatar from '@material-ui/core/Avatar';

class Header extends Component{
    render() {
        return(
            <div className="header">
                <div className="header__left">
                    <img src="https://i.imgur.com/xdWq11g.png"></img>
                    <h4>Covid Connect</h4>
                </div>

                {/* <div className="header__input">
                    <SearchIcon />
                    <input placeholder='Search Contacts' type="text" />
                </div> */}

                {
                    /*<li className="navbar-item">
                    </li>
                    <li className="navbar-item">
                    </li>
                    <li className="navbar-item">
                    </li>
                    <li className="navbar-item">
                    </li>
                    <li className="navbar-item">
                    </li>*/
                }
                <div className="header__middle">
                    <div className="header__option--active" onClick={() => {
                        window.location.href="/feed";
                    }}>
                            <RecentActorsIcon fontSize='large'/>
                    </div>
                    
                    <div className="header__option" onClick={() => {
                        window.location.href="/contacts";
                    }}>
                        <PersonIcon fontSize='large'/>
                    </div>

                    <div className="header__option" onClick={() => {
                        window.location.href="/info";
                    }}>
                        <InfoIcon fontSize='large'/>
                    </div>
                    
                </div>
    
                <div className="header__right">
                    <div className="header__avatar">
                        <Avatar alt="Sample User" src=""/>
                        <h4>Sample User</h4>
                    </div>
                    <div className="header__logout">
                        <ExitToAppIcon  onClick={() => app.auth().signOut()}/>
                    </div>                    
                </div>
            </div>
    
        );
    } 
}

export default Header;