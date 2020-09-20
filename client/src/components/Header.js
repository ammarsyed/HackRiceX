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
import { app } from 'firebase';

class Header extends Component{
    render() {
        return(
            <div className="header">
                <div className="header__left">
                    <img src="https://i.imgur.com/xdWq11g.png"></img>
                </div>

                <div className="header__input">
                    <SearchIcon />
                    <input placeholder='Search Contacts' type="text" />
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
                    <a style="display:block" href="/feed">
                        <div className="header__option--active">
                                <RecentActorsIcon fontSize='large'/>
                        </div>
                    </a>
                    
                    <a style="display:block" href="/contacts">
                        <div className="header__option">
                                <PersonIcon fontSize='large'/>
                        </div>
                    </a>

                    <a style="display:block" href="info">
                        <div className="header__option">
                                <InfoIcon fontSize='large'/>
                        </div>
                    </a>
                    
                </div>
    
                <div className="header__right">
                    <div className="header__avatar">
                        <AccountCircleIcon fontSize='large'/>
                        <h4>Sample User</h4>
                    </div>
                    <a style="display:block" href="/login">
                        <div className="header__option">
                            <ExitToAppIcon onClick={() => app.auth().signOut()}/>
                        </div>
                    </a>
                    
                </div>
            </div>
    
        );
    } 
}

export default Header;