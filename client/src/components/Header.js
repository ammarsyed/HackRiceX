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

class Header extends Component{
    render() {
        return(
            <div className="header">
                <div className="header__left">
                    <img src="https://i.imgur.com/xdWq11g.png"></img>
                </div>

                <div className="header__input">
                    <SearchIcon />
                    <input type="text" />
                </div>

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
                    <div className="header__option">
                        <RecentActorsIcon fontSize='large'/>
                    </div>
                    <div className="header__option">
                        <PersonIcon fontSize='large'/>
                    </div>
                    <div className="header__option">
                        <InfoIcon fontSize='large'/>
                    </div>
                    
                </div>
    
                <div className="header__right">
                    <div className="avatar">
                        <AccountCircleIcon fontSize='large'/>
                        <h4>Sample User</h4>
                    </div>
                    <div className="header__option">
                        <ExitToAppIcon fontSize='large'/>
                    </div>
                </div>
            </div>
    
        );
    } 
}

export default Header;