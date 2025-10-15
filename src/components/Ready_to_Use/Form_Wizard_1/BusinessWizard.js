import React from 'react';
import {Card, Nav, Tab, Form, Button, Row, Col} from 'react-bootstrap';


const BusinessAccountWizards = () => {
    return (
        <Card>
            <Card.Header>
                <h5>Business Account Wizards</h5>
            </Card.Header>
            <Card.Body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="details-tab-pane">
                    <Nav className="nav business-nav d-flex" id="justify-about-tab1" role="tablist">
                        <Nav.Item className="flex-grow-1 text-center nav-item">
                            <Nav.Link eventKey="details-tab-pane" className="btn nav-link">
                                <i className="ph-duotone ph-user-circle-plus"></i>
                                <span className="f-s-18 f-w-500">Create account</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="flex-grow-1 text-center nav-item">
                            <Nav.Link eventKey="personal-tab-pane" className="btn nav-link">
                                <i className="ph-duotone ph-user-switch"></i>
                                <span className="f-s-18 f-w-500">Personal account</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="flex-grow-1 text-center nav-item">
                            <Nav.Link eventKey="payment-tab-pane" className="btn nav-link">
                                <i className="ph-duotone ph-credit-card"></i>
                                <span className="f-s-18 f-w-500">Payment method</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content className="mt-3" id="justify-LightContent1">
                        {/* Create Account Tab */}
                        <Tab.Pane eventKey="details-tab-pane">
                            <Form className="app-form">
                                <Row>
                                    <Col xs={12}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="f-w-500">Username</Form.Label>
                                            <Form.Control type="text" placeholder="James"/>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="f-w-500">Email Address</Form.Label>
                                            <Form.Control type="email" placeholder="@gmail.com"/>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="f-w-500">Password</Form.Label>
                                            <Form.Control type="password" placeholder="******"/>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="f-w-500">Confirm Password</Form.Label>
                                            <Form.Control type="password" placeholder="******"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Tab.Pane>

                        {/* Personal Account Tab */}
                        <Tab.Pane eventKey="personal-tab-pane">
                            <Form className="app-form">
                                <Row>
                                    <Col xs={12} className="mb-3">
                                        <Form.Label className="f-w-500">Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="+91"/>
                                    </Col>
                                    <Col xs={12} className="mb-3">
                                        <Form.Label className="f-w-500">Address</Form.Label>
                                        <Form.Control type="text" placeholder="156/A ..."/>
                                    </Col>
                                    <Col xs={12} className="mb-3">
                                        <Form.Label className="f-w-500">Address 2</Form.Label>
                                        <Form.Control type="text" placeholder="Apartment, studio, or floor"/>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Label className="f-w-500">City</Form.Label>
                                        <Form.Control type="text" placeholder="UK"/>
                                    </Col>
                                    <Col md={4} className="mb-3">
                                        <Form.Label className="f-w-500">State</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={2} className="mb-3">
                                        <Form.Label className="f-w-500">Zip</Form.Label>
                                        <Form.Control type="text" placeholder="xxxxx" maxLength="5"/>
                                    </Col>
                                    <Col xs={12} className="mb-3">
                                        <Form.Check  type="checkbox" label="Check me out" defaultChecked={false} />
                                    </Col>
                                </Row>
                            </Form>
                        </Tab.Pane>

                        {/* Payment Method Tab */}
                        <Tab.Pane eventKey="payment-tab-pane">
                            <Form className="app-form">
                                <Row>
                                    <Col xs={12}>
                                        <div className="card shadow-none">
                                            <div className="card-body select-content">
                                                <Form.Check
                                                    className="fs-6 f-w-500 mb-3"
                                                    type="radio"
                                                    label="Credit / Debit Card"
                                                    name="paymentMethod"
                                                    id="credit-card-option"

                                                />
                                                <Row>
                                                    <Col xs={12} className="mb-3">
                                                        <Form.Label className="f-w-500">Cardholder Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Olaf"/>
                                                    </Col>
                                                    <Col md={6} className="mb-3">
                                                        <Form.Label className="f-w-500">Card Number</Form.Label>
                                                        <Form.Control type="text" placeholder="xxxx-xxxx-xxxx-xxx"
                                                                      required/>
                                                    </Col>
                                                    <Col md={6} className="col-xl-3 mb-3">
                                                        <Form.Label className="f-w-500">Expiration Date</Form.Label>
                                                        <Form.Control type="text" placeholder="MM/YY"/>
                                                    </Col>
                                                    <Col md={6} className="col-xl-3 mb-3">
                                                        <Form.Label className="f-w-500">CVC code</Form.Label>
                                                        <Form.Control type="text" placeholder="xxx"/>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <div className="text-end">
                                                            <Button variant="primary">Submit</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    {/* Visa & Paypal options */}
                                    <Col md={6}>
                                        <div className="card shadow-none">
                                            <div className="card-body select-content">
                                                <Form.Check
                                                    className="d-flex align-items-center gap-3"
                                                    type="radio"
                                                    label={
                                                        <span className="d-flex align-items-center">
                                                    <img
                                                        src="/images/checkbox-radio/logo1.png"
                                                        className="w-30 h-30"
                                                        alt="Visa Logo"
                                                    />
                                                    <span className="ms-2">
                                                      <span className="fs-6 f-w-500">Visa Card</span>
                                                      <span className="d-block text-secondary">Select Visa card payment method</span>
                                                    </span>
                                                </span>
                                                    }
                                                    name="paymentMethod"
                                                    id="visa-card-option"
                                                />
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <div className="card shadow-none">
                                            <div className="card-body select-content">
                                                <Form.Check
                                                    className="d-flex align-items-center gap-3"
                                                    type="radio"
                                                    label={
                                                        <span className="d-flex align-items-center">
                  <img
                      src="/images/checkbox-radio/logo3.png"
                      className="w-30 h-30"
                      alt="PayPal Logo"
                  />
                  <span className="ms-2">
                    <span className="fs-6 f-w-500">Paypal</span>
                    <span className="d-block text-secondary">Select PayPal payment method</span>
                  </span>
                </span>
                                                    }
                                                    name="paymentMethod"
                                                    id="paypal-option"
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Card.Body>
        </Card>
    );
};

export default BusinessAccountWizards;
