"use client"
import Breadcrumbs from '@/components/CommonElements/Breadcrumbs';
import React from 'react';
import {Container, Row, Col, Table, Button, Card, CardBody} from "reactstrap";

const InvoicePage = () => {
    return (
        <>
            <div className="container-fluid invoice-container">
                <Breadcrumbs mainTitle="Invoice" title="Apps" path={["Invoice"]}/>
            </div>

            <Container fluid="lg" className="mt-5">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardBody>
                                <div className="table-responsive">
                                    <Table className="table">
                                        <tr>
                                            <td>
                                                <Table className="table table-lg w-100 invoice-header">
                                                    <tbody>
                                                       <tr>
                                                           <td>
                                                               <img
                                                                   src="/images/logo/1.png"
                                                                   alt="Company Logo"
                                                                   className="mb-3"
                                                                   style={{width: "200px"}}
                                                               />
                                                               <address>
                                                                   35 O'Connor, Ottawa Ontario <br/>
                                                                   K1P 5M4, Canada <br/>
                                                                   theme@gmail.com <br/>
                                                                   (613) 233-1222
                                                               </address>
                                                           </td>
                                                           <td>
                                                               <div className="text-end">
                                                                   <h3 className="text-primary">INVOICE</h3>
                                                                   <p>
                                                                       Invoice <strong>#800123</strong>
                                                                   </p>
                                                                   <p>
                                                                       Invoice Date <strong>Apr 18, 2024</strong>
                                                                   </p>
                                                                   <p>
                                                                       Invoice Due <strong>July 18, 2024</strong>
                                                                   </p>
                                                               </div>
                                                           </td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <table className="invoice-details-table table table-lg w-100">
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="mb-3 ">
                                                                <h6 className="fw-bold">Bill From</h6>
                                                                <p>Mark McKenzie</p>
                                                                <address>
                                                                    35 O'Connor, Ottawa Ontario <br/>
                                                                    K1P 5M4, Canada <br/>
                                                                    theme@gmail.com <br/>
                                                                    (613) 233-1222
                                                                </address>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="mb-3">
                                                                <h6 className="fw-bold">Bill To</h6>
                                                                <p>Fleta Walsh</p>
                                                                <address>
                                                                    255 E Flamingo Rd, Las Vegas, <br/>
                                                                    North Carolina, US-89169 <br/>
                                                                    theme@gmail.com <br/>
                                                                    (702) 893-8933
                                                                </address>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className=" text-end mb-3">
                                                                <h6 className="fw-bold">Payment Method</h6>
                                                                <p>Bank: Bank of Us</p>
                                                                <p>Card Holder: Fleta Walsh</p>
                                                                <p>Card Number: xxxx xxxx xxxx 8652</p>
                                                                <p>Payment Method: Debit Card</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Table className="table table-lg table-bottom-border invoice-table w-100">
                                                    <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Item</th>
                                                        <th>Description</th>
                                                        <th>Quantity</th>
                                                        <th>Unit Cost</th>
                                                        <th>Total</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>H & M Round Neck</td>
                                                        <td>Men's Graphic Tees</td>
                                                        <td>2</td>
                                                        <td>$400</td>
                                                        <td>$800</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Mast & Harbour</td>
                                                        <td>Hooded Sweatshirt</td>
                                                        <td>1</td>
                                                        <td>$600</td>
                                                        <td>$600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Adidas</td>
                                                        <td>Running Shoes</td>
                                                        <td>5</td>
                                                        <td>$500</td>
                                                        <td>$2,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Stylist Jackets</td>
                                                        <td>Kid's Jacket</td>
                                                        <td>1</td>
                                                        <td>$200</td>
                                                        <td>$200</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="3"></td>
                                                        <td colSpan="3">
                                                            {/* Summary Section */}
                                                            <Table className=" mt-3">
                                                                <tbody>
                                                                <tr>
                                                                    <td>Sub Total:</td>
                                                                    <td className="text-end">$4,100</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Tax:</td>
                                                                    <td className="text-end">$100</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Shipping:</td>
                                                                    <td className="text-end">$500</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Total:</th>
                                                                    <th className="text-end">$4,700</th>
                                                                </tr>
                                                                </tbody>
                                                            </Table>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>

                        <div className="invoice-footer float-end mb-3">
                            <Button color="primary" className="m-1" onClick={() => window.print()}>
                                <i className="ti ti-printer"></i> Print
                            </Button>
                            <Button color="secondary" className="m-1">
                                <i className="ti ti-send"></i> Send
                            </Button>
                            <Button color="success" className="m-1">
                                <i className="ti ti-download"></i> Download
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    );
};

export default InvoicePage;