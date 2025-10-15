import React from 'react';
import {useState} from 'react';
import {Button, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card} from 'reactstrap';

const AccountWizard = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    return (
        <>
            <Card className="card">
                <div className="card-header">
                    <h5>Create Account Wizard</h5>
                </div>
                <div className="card-body">


                    <Nav pills className="nav custom-navstpes d-flex" id="justify-about-tab" role="tablist">
                        <NavItem className="flex-grow-1 text-center">
                            <NavLink
                                className={`btn nav-link ${activeTab === '1' ? 'active' : ''}`}
                                onClick={() => toggleTab('1')}
                                role="tab"
                                aria-controls="account-tab-pane"
                                aria-selected={activeTab === '1'}
                            >
                          <span className="d-flex align-items-center">
                            <span><i className="ti ti-user-circle pe-2"></i></span>
                            <span className="text-start ms-3 custom-title d-flex flex-column">
                              <span className="f-w-500 f-s-16">Personal info</span>
                              <span className="f-s-14 text-secondary">Enter step 1 details</span>
                            </span>
                          </span>
                            </NavLink>
                        </NavItem>

                        <NavItem className="flex-grow-1 text-center">
                            <NavLink
                                className={`btn nav-link ${activeTab === '2' ? 'active' : ''}`}
                                onClick={() => toggleTab('2')}
                                role="tab"
                                aria-controls="profile-tab-pane"
                                aria-selected={activeTab === '2'}
                            >
              <span className="d-flex align-items-center">
                <span><i className="ti ti-file-dollar pe-2"></i></span>
                <span className="text-start ms-3 custom-title d-flex flex-column">
                  <span className="f-w-500 f-s-16">Billing Information</span>
                  <span className="f-s-14 text-secondary">Enter step 2 details</span>
                </span>
              </span>
                            </NavLink>
                        </NavItem>

                        <NavItem className="flex-grow-1 text-center">
                            <NavLink
                                className={`btn nav-link ${activeTab === '3' ? 'active' : ''}`}
                                onClick={() => toggleTab('3')}
                                role="tab"
                                aria-controls="review-tab-pane"
                                aria-selected={activeTab === '3'}
                            >
              <span className="d-flex align-items-center">
                <span><i className="ti ti-file-check pe-2"></i></span>
                <span className="text-start ms-3 custom-title d-flex flex-column">
                  <span className="f-w-500 f-s-16">Review Order</span>
                  <span className="f-s-14 text-secondary">Enter step 3 details</span>
                </span>
              </span>
                            </NavLink>
                        </NavItem>

                        <NavItem className="flex-grow-1 text-center">
                            <NavLink
                                className={`btn nav-link ${activeTab === '4' ? 'active' : ''}`}
                                onClick={() => toggleTab('4')}
                                role="tab"
                                aria-controls="finish-tab-pane"
                                aria-selected={activeTab === '4'}
                            >
              <span className="d-flex align-items-center">
                <span><i className="ti ti-checks pe-2"></i></span>
                <span className="text-start ms-3 custom-title d-flex flex-column">
                  <span className="f-w-500 f-s-16">Order Confirmation</span>
                  <span className="f-s-14 text-secondary">Enter step 4 details</span>
                </span>
              </span>
                            </NavLink>
                        </NavItem>
                    </Nav>

                    {/* Tab Content */}
                    <TabContent activeTab={activeTab} className="mt-3">
                        {/* Personal Info (Step 1) */}

                        <TabPane tabId="1">
                            <Form className="app-form">
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Cardholder Name</Label>
                                            <Input type="text" placeholder="Enter Cardholder Name"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Last Name</Label>
                                            <Input type="text" placeholder="Enter Last Name"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Phone Number</Label>
                                            <Input type="text" placeholder="Phone Number"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Email Address</Label>
                                            <Input type="email" placeholder="Enter Email"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Country</Label>
                                            <Input type="select">
                                                <option>Select Country</option>
                                                <option>UK</option>
                                                <option>US</option>
                                                <option>Italy</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Language</Label>
                                            <Input type="select">
                                                <option>Select Language</option>
                                                <option>English</option>
                                                <option>Italian</option>
                                                <option>Spanish</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <div className="text-end">
                                    <Button color="primary" onClick={() => toggleTab(2)}>Next</Button>
                                </div>
                            </Form>
                        </TabPane>

                        {/* Billing Info (Step 2) */}
                        <TabPane tabId="2">
                            <Form className="app-form">
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Username</Label>
                                            <Input type="text" placeholder="Enter Username"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Credit/Debit Card Number</Label>
                                            <Input type="text" placeholder="Enter Card Number"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>ZIP Code</Label>
                                            <Input type="text" placeholder="ZIP Code"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <div className="text-end">
                                    <Button color="secondary" onClick={() => toggleTab(1)}>Previous</Button>{" "}
                                    <Button color="primary" onClick={() => toggleTab(3)}>Next</Button>
                                </div>
                            </Form>
                        </TabPane>

                        {/* Review Order (Step 3) */}
                        <TabPane tabId="3">
                            <Form className="app-form">
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Product Name</Label>
                                            <Input type="text" placeholder="Product Name"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Quantity</Label>
                                            <Input type="number" placeholder="Quantity"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Price per Unit</Label>
                                            <Input type="text" placeholder="Price per Unit"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Total Price</Label>
                                            <Input type="text" placeholder="Total Price"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>Billing Address</Label>
                                            <Input type="text" placeholder="Billing Address"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <div className="text-end">
                                    <Button color="secondary" onClick={() => toggleTab(2)}>Previous</Button>{" "}
                                    <Button color="primary" onClick={() => toggleTab(4)}>Next</Button>
                                </div>
                            </Form>
                        </TabPane>

                        {/* Order Confirmation (Step 4) */}
                        <TabPane tabId="4">
                            <div class="completed-contents">
                                <div class="completbox text-center">
                                    <img src="/images/form/done.png" alt=""/>
                                    <h6 className="mb-0">Thank You !</h6>
                                    <p className="mb-0"> your booking is completed</p>
                                </div>
                            </div>

                        </TabPane>
                    </TabContent>
                </div>
            </Card>
        </>
    );
};

export default AccountWizard;