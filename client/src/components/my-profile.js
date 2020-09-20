import React, { Component } from "react";
import Home from "./home";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';


class MyProfile extends Component {
    render() {
        return (
            <div>
                <div style={{width: "50vh"}} class="mx-auto">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="post"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="post"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="post"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>When Did you Contract COVID? (DD/MM/YYYY)</Form.Label>
                                <Form.Control type="post"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Weight</Form.Label>
                                <Form.Control type="post"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control type="post"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Race</Form.Label>
                                <Form.Control type="post"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Height</Form.Label>
                                <Form.Control type="post"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Pre-existing Conditions</Form.Label>
                                <Form.Control type="post"/>
                            </Form.Group>
                            <Button variant="primary" type="post" href={'/info'}>
                                Submit!
                            </Button>
                        </Form>
                     </div>
            </div>
        );
    }
}

export default MyProfile;