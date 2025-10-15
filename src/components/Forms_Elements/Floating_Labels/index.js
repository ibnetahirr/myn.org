"use client"
import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Form, Input, Label, FormGroup, InputGroup, InputGroupText, FormFeedback, Select } from 'reactstrap';
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import {FormSelect} from "react-bootstrap";


const Floating_Labels = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Floating Labels" title="Forms elements" path={["Floating Labels"]} icon={<i class="ph-duotone  ph-cardholder f-s-16"></i>}/>

                <Row>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Custom Floating labels</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="app-form">
                                    <Row>
                                        <Col md={12}>
                                            <FormGroup className="floating-form mb-3">
                                                <Input type="text" name="name" className="form-control" placeholder="none" required />
                                                <Label className="form-label">Name</Label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={12}>
                                            <FormGroup className="floating-form">
                                                <Input type="password" className="form-control" placeholder="password" required />
                                                <Label className="form-label">Password</Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Basic Floating Label</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <FormGroup className="form-floating mb-3">
                                        <Input type="email" className="form-control" id="floatingInput" placeholder="Email address" />
                                        <Label for="floatingInput">Email address</Label>
                                    </FormGroup>
                                    <FormGroup className="form-floating">
                                        <Input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <Label for="floatingPassword">Password</Label>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Textareas Floating labels</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <FormGroup className="form-floating mb-3">
                                        <Input type="textarea" className="form-control" placeholder="Type a comment here" />
                                        <Label>Comments</Label>
                                    </FormGroup>
                                    <FormGroup className="form-floating mb-3">
                                        <Input type="textarea" className="form-control" placeholder="Type a Massage here" />
                                        <Label>Massage</Label>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Input groups Floating labels</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">

                                    <InputGroup className="mb-3">
                                        <InputGroupText>@</InputGroupText>
                                        <div className="form-floating">
                                            <Input
                                                type="text"
                                                className="form-control b-r-right"
                                                id="floatingInputGroup1"
                                                placeholder="Username"
                                            />
                                            <Label for="floatingInputGroup1">Username</Label>
                                        </div>
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <InputGroupText>@</InputGroupText>
                                        <div className="form-floating">
                                            <Input
                                                type="text"
                                                className="form-control b-r-right"
                                                placeholder="Email Address"
                                            />
                                            <Label for="floatingInputGroup1">Email Address</Label>
                                        </div>
                                    </InputGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Readonly plaintext Floating labels</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <FormGroup className="form-floating mb-3">
                                        <Input type="email" readOnly className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="name@example.com" />
                                        <Label for="floatingEmptyPlaintextInput">Empty input</Label>
                                    </FormGroup>
                                    <FormGroup className="form-floating">
                                        <Input type="email" readOnly className="form-control-plaintext" id="floatingPlaintextInput" placeholder="name@example.com" value="name@example.com" />
                                        <Label for="floatingPlaintextInput">Input with value</Label>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Floating Input Value</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <FormGroup className="form-floating mb-3">
                                        <Input type="email" className="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com" />
                                        <Label for="floatingInputValue">Input with value</Label>
                                    </FormGroup>
                                    <FormGroup className="form-floating floating-invalid">
                                        <Input type="email" className="form-control is-invalid pe-4" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com" />
                                        <Label for="floatingInputInvalid">Invalid input</Label>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Select Floating labels</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form floating-select">
                                    <FormGroup className="form-floating mb-3">
                                        <FormSelect className="form-select" id="floatingSelect" aria-label="Floating label select example"  defaultValue="1">
                                            <option value="0">Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </FormSelect>
                                        <Label for="floatingSelect">Works with selects</Label>
                                    </FormGroup>
                                    <FormGroup className="form-floating">
                                        <FormSelect className="form-select" id="floatingSelectDisabled" aria-label="Floating label disabled select example" disabled  defaultValue="1">
                                            <option value="0">Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </FormSelect>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Floating labels Layout</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <Row className="g-2">
                                        <Col md={6}>
                                            <FormGroup className="form-floating">
                                                <Input type="email" className="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com" />
                                                <Label for="floatingInputGrid">Email address</Label>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6} className="floating-select">
                                            <FormGroup className="form-floating">
                                                <FormSelect className="form-select form-select-labels" id="floatingSelectGrid"  defaultValue="2">
                                                    <option value="0">Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </FormSelect>
                                                <Label for="floatingSelectGrid">Works with selects</Label>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={12}>
                                            <FormGroup className="form-floating">
                                                <Input type="password" className="form-control" id="floatingPassword1" placeholder="Password" />
                                                <Label for="floatingPassword1">Password</Label>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Floating_Labels;
