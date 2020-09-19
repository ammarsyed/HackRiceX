import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

class Home extends Component {
    render() {
            return (
                <div>
                    <div style={{width: "50vh"}} class="mx-auto">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Post An Update!</Form.Label>
                                <Form.Control type="post" placeholder="Type post" />
                            </Form.Group>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Add an image" />
                            </Form.Group>
                            <Button variant="primary" type="post">
                                Post!
                            </Button>
                        </Form>
                     </div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/logo192.png'} />
                            <Card.Body>
                                <Card.Title>9/19/20 - Robert H.</Card.Title>
                                <Card.Text>
                                Heyo!
                                </Card.Text>
                                <Button variant="primary">Cheer On</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
                    <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/logo192.png'} />
                            <Card.Body>
                                <Card.Title>9/19/20 - Robert H.</Card.Title>
                                <Card.Text>
                                Heyo!
                                </Card.Text>
                                <Button variant="primary">Cheer On</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}> 
                    <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/logo192.png'} />
                            <Card.Body>
                                <Card.Title>9/17/20 - Robert H.</Card.Title>
                                <Card.Text>
                                Heyo!
                                </Card.Text>
                                <Button variant="primary">Cheer On</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
                    <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/logo192.png'} />
                            <Card.Body>
                                <Card.Title>9/15/20 - Robert H.</Card.Title>
                                <Card.Text>
                                Heyo!
                                </Card.Text>
                                <Button variant="primary">Cheer On</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            );
    }
}

export default Home;