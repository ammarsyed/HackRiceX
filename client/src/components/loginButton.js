import React, { Component } from 'react';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button
} from 'reactstrap';

class LoginButton extends Component{

    constructor(props) {
        super(props);

        //BINDING. IMPLICIT WITH LAMBDA. 
        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen:false
        }
    }

    toggle = function(){
        this.setState({isOpen: !this.state.isOpen});
    }

    render(){
        return(

            <Container>
                <Button 
                    color="dark" 
                    style={{marginBottom: '2rem'}}
                    //Callback function has no reference to this, bind 
                    onClick = {function(){
                        console.log("Clicked the LoginButton!");
                    }.bind(this)}
                >
                    Login
                </Button>
            </Container>

        );
    }

}

export default LoginButton;