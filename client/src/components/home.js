import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form'

class Home extends Component {
    render() {
            return (
                <div className="home-page" style={{display:'flex',flexDirection:"column",alignItems:"center",marginTop:"5em"}}>
                    <div className="home-logo">
                        <img src="https://i.imgur.com/xdWq11g.png"/>
                        <h2>CovidConnect</h2>
                    </div>
                    <NavLink to="/signup">
                        <Button
                            style={{backgroundColor:"darkCyan", color:"white",margin:'50px',paddingLeft:"10rem",paddingRight:"10rem"}}
                            type="submit"
                            
                            variant="contained">Sign Up</Button>
                    </NavLink>
                    <NavLink to="/login">
                    <Button
                            style={{backgroundColor:"darkCyan", color:"white",margin:',50px',paddingLeft:"10rem",paddingRight:"10rem"}}                     
                            variant="contained">Login</Button>
                    </NavLink>
                </div>
            );
    }
}

export default Home;