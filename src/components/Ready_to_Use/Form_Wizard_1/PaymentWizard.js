"use client";

import React, {useState} from 'react';
import { Row, Col, Form, Tab, Nav} from 'react-bootstrap';
import {Card, CardBody, CardHeader} from "reactstrap";


const PaymentWizard = () => {
    const [activeTab, setActiveTab] = useState("create-account");

    const [selectedPayment, setSelectedPayment] = useState('creditCard');

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };

    return (
        <>
            <Card>
                <CardHeader>
                    <h5>Payment Method Wizards</h5>
                </CardHeader>
                <CardBody>
                    <div className="form-wizard">
                        <Row>
                            <Col xl={3} className="mb-3">
                                <Nav className="navstpes flex-column" variant="pills" activeKey={activeTab}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="create-account"
                                                  onClick={() => setActiveTab("create-account")}>
                                            <i className="ti ti-user-circle pe-2"></i>
                                            <span className="ms-3">Create Account</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="personal-info"
                                                  onClick={() => setActiveTab("personal-info")}>
                                            <i className="ti ti-info-circle pe-2"></i>
                                            <span className="ms-3">Personal Info</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="payment-method"
                                                  onClick={() => setActiveTab("payment-method")}>
                                            <i className="ti ti-brand-mastercard pe-2"></i>
                                            <span className="ms-3">Payment Method</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="confirm-order"
                                                  onClick={() => setActiveTab("confirm-order")}>
                                            <i className="ti ti-checks pe-2"></i>
                                            <span className="ms-3">Confirm Order</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>

                            <Col xl={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="create-account" active={activeTab === "create-account"}>
                                        <Form className="app-form">
                                            <Row>
                                                <Col xs={12} className="mb-3">
                                                    <Form.Label>Username</Form.Label>
                                                    <Form.Control type="text" placeholder="James"/>
                                                </Col>
                                                <Col xs={12} className="mb-3">
                                                    <Form.Label>Email Address</Form.Label>
                                                    <Form.Control type="email" placeholder="@gmail.com"/>
                                                </Col>
                                                <Col md={6} className="mb-3">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" placeholder="******"/>
                                                </Col>
                                                <Col md={6} className="mb-3">
                                                    <Form.Label>Confirm Password</Form.Label>
                                                    <Form.Control type="password" placeholder="******"/>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="personal-info" active={activeTab === "personal-info"}>
                                        <Form className="app-form">
                                            <Row>
                                                <Col xs={12} className="mb-3">
                                                    <Form.Label>Contact Number</Form.Label>
                                                    <Form.Control type="text" placeholder="+91"/>
                                                </Col>
                                                <Col xs={12} className="mb-3">
                                                    <Form.Label>Address</Form.Label>
                                                    <Form.Control type="text" placeholder="156/A ..."/>
                                                </Col>
                                                <Col md={6} className="mb-3">
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control type="text" placeholder="UK"/>
                                                </Col>
                                                <Col md={4} className="mb-3">
                                                    <Form.Label>State</Form.Label>
                                                    <Form.Select>
                                                        <option>Choose...</option>
                                                        <option>State</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col md={2} className="mb-3">
                                                    <Form.Label>Zip</Form.Label>
                                                    <Form.Control type="text" placeholder="xxxxx" maxLength={5}/>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="payment-method" active={activeTab === "payment-method"}>
                                        <div className="custome-radio-list">
                                            <Row>
                                                {/* Credit / Debit Card Option */}
                                                <Col xs={12}>
                                                    <Card className="shadow-none">
                                                        <CardBody className="select-content">
                                                            <div className="mb-3">
                                                                <Form.Label className="check-box f-w-500">
                                                                    <Form.Control
                                                                        type="radio"
                                                                        name="radio-group1"
                                                                        value="creditCard"
                                                                        checked={selectedPayment === 'creditCard'}
                                                                        onChange={handlePaymentChange}
                                                                    />
                                                                    <span
                                                                        className="radiomark outline-secondary"></span>
                                                                    <span className="fs-6">Credit / Debit Card</span>
                                                                </Form.Label>
                                                            </div>
                                                            {selectedPayment === 'creditCard' && (
                                                                <Form className="app-form">
                                                                    <Row>
                                                                        <Col xs={12}>
                                                                            <div className="mb-3">
                                                                                <Form.Label className="form-label f-w-500">Cardholder
                                                                                    Name</Form.Label>
                                                                                <Form.Control type="text"
                                                                                       className="form-control"
                                                                                       placeholder="Olaf"/>
                                                                            </div>
                                                                        </Col>
                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <Form.Label className="form-label f-w-500">Card
                                                                                    Number</Form.Label>
                                                                                <Form.Control type="text"
                                                                                       className="form-control"
                                                                                       placeholder="xxxx-xxxx-xxxx-xxx"
                                                                                       required/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-xl-3">
                                                                            <div className="mb-3">
                                                                                <Form.Label className="form-label f-w-500">Expiration
                                                                                    Date</Form.Label>
                                                                                <Form.Control type="text"
                                                                                       className="form-control"
                                                                                       placeholder="MM/YY"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-xl-3">
                                                                            <div className="mb-3">
                                                                                <Form.Label className="form-label f-w-500">CVC
                                                                                    code</Form.Label>
                                                                                <Form.Control type="text"
                                                                                       className="form-control"
                                                                                       placeholder="xxx"/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 text-end">
                                                                            <button type="button"
                                                                                    className="btn btn-primary">Submit
                                                                            </button>
                                                                        </div>
                                                                    </Row>
                                                                </Form>
                                                            )}
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                                {/* Visa Card Option */}
                                                <div className="col-md-6">
                                                    <div className="card shadow-none">
                                                        <div className="card-body select-content">
                                                            <Form.Label className="check-box position-relative">
                                                                <Form.Control
                                                                    type="radio"
                                                                    name="radio-group1"
                                                                    value="visa"
                                                                    checked={selectedPayment === 'visa'}
                                                                    onChange={handlePaymentChange}
                                                                />
                                                                <span
                                                                    className="radiomark outline-secondary position-absolute"></span>
                                                                <span className="d-flex align-items-center mg-s-25">
                    <img src="/images/checkbox-radio/logo1.png" className="w-30 h-30" alt=""/>
                    <span className="ms-2">
                      <span className="fs-6 f-w-500">Visa Card</span>
                      <span className="d-block text-secondary">Select Visa card payment method</span>
                    </span>
                  </span>
                                                            </Form.Label>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* PayPal Option */}
                                                <div className="col-md-6">
                                                    <div className="card shadow-none">
                                                        <div className="card-body select-content">
                                                            <Form.Label className="check-box position-relative">
                                                                <Form.Control
                                                                    type="radio"
                                                                    name="radio-group1"
                                                                    value="paypal"
                                                                    checked={selectedPayment === 'paypal'}
                                                                    onChange={handlePaymentChange}
                                                                />
                                                                <span
                                                                    className="radiomark outline-secondary position-absolute"></span>
                                                                <span className="d-flex align-items-center mg-s-25">
                   <img src="/images/checkbox-radio/logo3.png" className="w-30 h-30" alt=""/>
                    <span className="ms-2">
                      <span className="fs-6 f-w-500">PayPal</span>
                      <span className="d-block text-secondary">Select PayPal payment method</span>
                    </span>
                  </span>
                                                            </Form.Label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Row>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="confirm-order" active={activeTab === "confirm-order"}>
                                        <div className="completed-contents">
                                            <div className="completbox text-center">
                                                <img src="/images/form/done.png" alt=""/>
                                                <h6 className="mb-0">Thank You !</h6>
                                                <p>Successfully Completed your order process ! Confirmation will be sent
                                                    your email
                                                </p>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </div>
                </CardBody>

            </Card>

        </>
    );
};

export default PaymentWizard;