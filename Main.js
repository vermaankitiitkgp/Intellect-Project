import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Stack, Nav, Button } from 'react-bootstrap';
import Barchart from './Barchart.js';
import Piechart from './Piechart.js';
import '../App.css';

export default function App() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (

        <Stack gap={3}>
            <div>
                <Container>
                    <Row>
                        <Col sm={4} >
                            <Card className="card" bg="lightgray" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" />
                                <Card.Body>
                                    <Nav defaultActiveKey="/home" className="flex-column">
                                        <Nav.Link href="/home">
                                            <div className="d-grid gap-2">
                                                <Button variant="primary" size="lg" >
                                                    <i className="fas fa-columns" style={{ cursor: 'pointer', float: 'left', marginTop: '0.4rem', color: 'white' }} />    Dashboard <i className="fas fa-angle-right" style={{ cursor: 'pointer', float: 'right', marginTop: '0.4rem', color: 'white' }} />
                                                </Button>
                                            </div>
                                        </Nav.Link>
                                        <Nav.Link eventKey="link-1">
                                            <div className="d-grid gap-2">
                                                <Button variant="outline-primary" size="lg">
                                                    SideBar Type
                                                </Button>
                                            </div>
                                        </Nav.Link>
                                        <Nav.Link eventKey="link-2">
                                            <div className="d-grid gap-2">
                                                <Button variant="outline-primary" size="lg">
                                                    Page Layouts
                                                </Button>
                                            </div>
                                        </Nav.Link>
                                        <Nav.Link eventKey="link-2">
                                            <div className="d-grid gap-2">
                                                <Button variant="outline-primary" size="lg">
                                                    Contact Us
                                                </Button>
                                            </div>
                                        </Nav.Link>
                                    </Nav>
                                </Card.Body>

                            </Card>
                        </Col>
                        <Col sm={8}  >
                            <Card className="bg-dark text-white" style={{ height: '35.5rem' }}>
                                <Card.Img className="img-size" src="https://images.unsplash.com/photo-1634913940785-9730051200ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className="text">HELLO Pablo Nicolus</Card.Title>


                                </Card.ImgOverlay>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Nav defaultActiveKey="/home" className="flex-column">
                                        <Nav.Link href="/home">
                                            <div className="d-grid gap-2">
                                                <Button variant="outline-primary">Inbox</Button>
                                            </div>
                                        </Nav.Link>
                                        <Nav.Link eventKey="link-1">
                                            <div className="d-grid gap-2">
                                                <Button variant="outline-primary">Ticket</Button>
                                            </div>
                                        </Nav.Link>
                                        <Nav.Link eventKey="link-2">
                                            <div className="d-grid gap-2">
                                                <Button variant="outline-primary">Extra</Button>
                                            </div>
                                        </Nav.Link>
                                    </Nav>
                                </Card.Body>

                                <Card.Body>
                                    <Nav defaultActiveKey="/home" className="flex-column">
                                        <Nav.Link href="/home">
                                            <div className="d-grid gap-2">
                                                <Button variant="outline-secondary">Ui Elements</Button>
                                            </div>
                                        </Nav.Link>
                                        <Nav.Link eventKey="link-1">
                                            <div className="d-grid gap-2">
                                                <Button variant="outline-secondary">Cards</Button>
                                            </div>
                                        </Nav.Link>
                                        <Nav.Link eventKey="link-2">
                                            <div className="d-grid gap-2">
                                                <Button variant="outline-secondary">Components</Button>
                                            </div>
                                        </Nav.Link>
                                        <Nav.Link eventKey="link-3">
                                            <div className="d-grid gap-2">
                                                <Button variant="outline-secondary">Widgets</Button>
                                            </div>
                                        </Nav.Link>
                                    </Nav>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col ><Card style={{ height: '20rem' }}>

                            <Card.Body>
                                <Card.Title className="text">Income Variations</Card.Title>
                            </Card.Body>
                            <Card.Body>
                                <Piechart />
                            </Card.Body>

                        </Card></Col>
                        <Col ><Card style={{ height: '20rem' }}>
                            <Card.Body>
                                <Card.Title className="text">Net Income</Card.Title>
                            </Card.Body>
                            <Card.Body>
                                <Barchart />
                            </Card.Body>
                        </Card></Col>
                    </Row>
                </Container>
            </div>
        </Stack>



    );
}
