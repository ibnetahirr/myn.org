"use client"
import React from "react";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import {tableData} from "@/Data/AppsData/Orderdetails";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import OrderInfoTable from "@/components/Apps/E-Shop/OrdersDetails/OrderInfoTable";

const OrdersDetails = () => {
    return (


        <Container fluid>
            <Breadcrumbs
                mainTitle="Orders Details"
                title="Apps"
                path={["E-shop", "Orders Details"]}
            />

            <Row className="order-details">
                <Col xxl={9}>
                    <Row>
                        <Col lg={4}>
                            <Card className="order-details-card">
                                <CardHeader>
                                    <h5 className="text-nowrap">Order Details (#12311)</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="f-w-600 text-dark"><i
                                            className="ti ti-calendar f-s-18 me-2 text-secondary"></i>Date</h6>
                                        <div className="text-end">
                                            <p>01/1/2024</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <h6 className="f-w-600 text-dark"><i
                                            className="ti ti-credit-card f-s-18 me-2"></i>Payment</h6>
                                        <div className="text-end">
                                            <p>Online</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <h6 className="f-w-600 text-dark"><i
                                            className="ti ti-truck-delivery f-s-18 me-2"></i>Shipping</h6>
                                        <div className="text-end">
                                            <p> Fast Shipping</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card className="order-details-card">
                                <CardHeader>
                                    <h5>Customer Details</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="f-w-600 text-dark"><i
                                            className="ti ti-file-invoice text-secondary f-s-18 me-2"></i>Customer
                                        </h6>
                                        <div className="text-end">
                                            <p>Chris Coyier</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <h6 className="f-w-600 text-dark"><i
                                            className="ti ti-mail f-s-18 text-secondary me-2"></i>Email</h6>
                                        <div className="text-end">
                                            <p>dam@1234.com</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <h6 className="f-w-600 text-dark"><i
                                            className="ti ti-device-mobile f-s-18 text-secondary me-2"></i>contact
                                        </h6>
                                        <div className="text-end">
                                            <p>+1 111 134 111</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card className="order-details-card">
                                <CardHeader>
                                    <h5>Documents</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="f-w-600 text-dark"><i
                                            className="ti ti-file-invoice text-secondary f-s-18 text-secondary me-2"></i>Invoice
                                        </h6>
                                        <div className="text-end">
                                            <p> #ABC-101011</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <h6 className="f-w-600 text-dark"><i
                                            className="ti ti-truck-delivery f-s-18 text-secondary me-2"></i>Shipping
                                        </h6>
                                        <div className="text-end">
                                            <p>#AD-01009099</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <h6 className="f-w-600 text-dark"><i
                                            className="ti ti-award f-s-18 text-secondary me-2"></i>Reward Points
                                        </h6>
                                        <div className="text-end">
                                            <p>100</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                   <OrderInfoTable/>

                </Col>

                <Col xxl={3}>
                    <Card className="equal-card">
                        <CardHeader>
                            <h5>Order Status</h5>
                        </CardHeader>
                        <CardBody>
                            <ul className="app-timeline-box">

                                <li className="timeline-section">
                                    <div className="timeline-icon">
                                         <span className="text-light-primary h-35 w-35 d-flex-center b-r-50">
                                           <i className="ti ti-shopping-cart f-s-20"></i>
                                         </span>
                                    </div>
                                    <div className="timeline-content bg-light-primary b-1-primary">
                                        <div
                                            className="d-flex justify-content-between align-items-center timeline-flex">
                                            <h6 className="mt-2 text-primary">Order Placed</h6>
                                            <span className="badge text-bg-primary ms-2">20 Min ago</span>
                                        </div>
                                        <p className="mt-2 text-dark">An order has been placed.</p>
                                        <p className="text-secondary">Wed, 15 Dec 2024 - 05:34PM</p>
                                    </div>
                                </li>
                                <li className="timeline-section">
                                    <div className="timeline-icon">
                                         <span className="text-light-secondary h-35 w-35 d-flex-center b-r-50">
                                           <i className="ti ti-checks f-s-20"></i>
                                         </span>
                                    </div>
                                    <div className="timeline-content bg-light-secondary b-1-secondary">
                                        <div
                                            className="d-flex justify-content-between align-items-center timeline-flex">
                                            <h6 className="mt-2 text-secondary">Packed</h6>
                                            <span className="color-light">50 Min ago</span>
                                        </div>
                                        <p className="mt-2">
                                            Your Item has been picked up by courier partner
                                        </p>
                                        <p className="text-secondary">Thu, 20 Dec 2024 - 6:48AM</p>
                                        <span className="badge bg-primary-900">Design</span>{' '}
                                        <span className="badge bg-primary-900">HTML</span>
                                    </div>
                                </li>
                                <li className="timeline-section">
                                    <div className="timeline-icon">
                                        <span className="text-light-success h-35 w-35 d-flex-center b-r-50">
                                          <i className="ti ti-truck-delivery f-s-20"></i>
                                        </span>
                                    </div>
                                    <div className="timeline-content bg-light-success b-1-success">
                                        <div
                                            className="d-flex justify-content-between align-items-center timeline-flex">
                                            <h6 className="mt-2 text-success">Shipping</h6>
                                            <span className="badge text-bg-success ms-2">1 hours ago</span>
                                        </div>
                                        <p className="mt-2 text-dark">
                                            Your Item has been picked up by courier partner
                                        </p>
                                        <p className="text-secondary">Thu, 20 Dec 2024 - 5:48AM</p>
                                    </div>
                                </li>
                                <li className="timeline-section">
                                    <div className="timeline-icon">
                                      <span className="text-light-info h-35 w-35 d-flex-center b-r-50">
                                        <i className="ti ti-package f-s-20"></i>
                                      </span>
                                    </div>
                                    <div className="timeline-content bg-light-info b-1-info">
                                        <div
                                            className="d-flex justify-content-between align-items-center timeline-flex">
                                            <h6 className="mt-2 text-info">Delivered</h6>
                                            <span className="badge text-bg-dark ms-2">Nov 10, 14:00</span>
                                        </div>
                                        <p className="text-secondary">Mon, 26 Dec 2024 - 5:00AM</p>
                                    </div>
                                </li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>


            </Row>

        </Container>
    );
};

export default OrdersDetails;
