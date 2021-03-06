import React, { useContext } from 'react';
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
import { AuthContext } from "./firebase";

const Header =(props)=>{
    console.log(window.location.pathname);
    const {currentUser} = useContext(AuthContext);
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
                    <div className={window.location.pathname=="/feed"?"header__option--active":"header__option"} onClick={() => {
                        window.location.pathname="/feed";
                    }}>
                            <RecentActorsIcon fontSize='large'/>
                    </div>
                    
                    <div className={window.location.pathname=="/profile"?"header__option--active":"header__option"} onClick={() => {
                        window.location.pathname="/profile";
                    }}>
                        <PersonIcon fontSize='large'/>
                    </div>

                    <div className={window.location.pathname=="/info"?"header__option--active":"header__option"} onClick={() => {
                        window.location.pathname="/info";
                    }}>
                        <InfoIcon fontSize='large'/>
                    </div>
                    
                </div>
    
                <div className="header__right">
                    <div style= {{marginTop: "15px"}} className="header__avatar">
                        <Avatar alt="Sample User" src=""/>
                        <h4 style= {{marginLeft: "0px", fontSize: 15}}>{currentUser.email}</h4>
                    </div>
                    <div className="header__logout">
                        <ExitToAppIcon  onClick={() => app.auth().signOut()}/>
                        <div className="header__logout--text">
                          <h2 style= {{marginLeft: "40px",fontSize: 10}}>Logout</h2>  
                        </div>
                        
                    </div>                    
                </div>
            </div>
    
        );
    
}

export default Header;