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

class login extends Component{

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
            <div>
                <Button 
                        color="dark" 
                        style={{marginBottom: '2rem'}}
                >
                    Login
                </Button>
            </div>
        );
    }

}

export default login;