
import React from 'react';
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";


const Misc = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Misc" title="Other Pages" path={["Misc"]} icon={<i class="ph-duotone  ph-newspaper f-s-16"></i>}/>

                <Row>
                    <div className="col-lg-5">
                        <Card>
                            <CardHeader>
                                <h5>Breadcrumbs</h5>
                            </CardHeader>
                            <CardBody className="app-breadcrumb">

                                <div>
                                    <ol className="breadcrumb bg-light-secondary p-2">
                                        <li className="breadcrumb-item">
                                            <a href="#">
                                                <i className="ti ti-home"></i> Home
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            <i className="ti ti-books"></i> Library
                                        </li>
                                    </ol>
                                </div>

                                <div>
                                    <ol className="breadcrumb bg-light-secondary p-2">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Library
                                        </li>
                                    </ol>
                                </div>

                                <div>
                                    <ol className="breadcrumb flex-wrap bg-light-secondary p-2">
                                        <li className="breadcrumb-item">
                                            <a href="#">
                                                <i className="ti ti-home"></i> Home
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">
                                                <i className="ti ti-books"></i> Library
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            <i className="ti ti-file-filled"></i> File
                                        </li>
                                    </ol>
                                </div>

                                <div className="bootstrap-breadcrumb divider">
                                    <ol className="breadcrumb bg-light-secondary p-2">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Library
                                        </li>
                                    </ol>
                                </div>

                                <div className="bootstrap-breadcrumb divider1">
                                    <ol className="breadcrumb bg-light-secondary p-2 mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="#">
                                                <i className="ti ti-home"></i> Home
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            <i className="ti ti-books"></i> Library
                                        </li>
                                    </ol>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="col-lg-7">
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Custom Breadcrumbs</h5>
                            </CardHeader>
                            <CardBody>
                                <div>
                                    <ul className="line-breadcrumbs">
                                        <li><a href="#" className="active">Page 1</a></li>
                                        <li className="active"><a href="#">Page 2</a></li>
                                        <li><a href="#">Page 3</a></li>
                                        <li><a href="#">Page 4</a></li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <ul className="breadcrumbs">
                                        <li><a href="#" className="active"><i className="fa fa-home"></i> Page 1</a>
                                        </li>
                                        <li className="active"><a href="#"><i className="fa fa-book"></i> Page 2</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-file"></i> Page 3</a></li>
                                        <li><a href="#"><i className="fa fa-database"></i> Page 4</a></li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <ul className="circle-breadcrumbs breadcrumbs-primary">
                                        <li className="active"><a href="#"><i className="fa fa-home"></i></a></li>
                                        <li><a href="#"><i className="fa fa-book"></i></a></li>
                                        <li><a href="#"><i className="fa fa-file"></i></a></li>
                                        <li><a href="#"><i className="fa fa-database"></i></a></li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <ul className="simple-breadcrumbs">
                                        <li className="active"><a href="#">Page 1</a></li>
                                        <li><a href="#">Page 2</a></li>
                                        <li><a href="#">Page 3</a></li>
                                        <li><a href="#">Page 4</a></li>
                                        <li><a href="#">Page 5</a></li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <ul className="simple-shape-breadcrumbs">
                                        <li className="active"><a href="#">Page 1</a></li>
                                        <li className="active"><a href="#">Page 2</a></li>
                                        <li><a href="#">Page 3</a></li>
                                        <li><a href="#">Page 4</a></li>
                                        <li><a href="#">Page 5</a></li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <Col xl={6}>
                        <Card className="equal-card">
                            <CardHeader className="card-header">
                                <h5>Custom Breadcrumb</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="mb-3">
                                    <ul className="shape-breadcrumbs">
                                        <li className="active">
                                            <a href="#">Page 1</a>
                                        </li>
                                        <li className="active">
                                            <a href="#">Page 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Page 3</a>
                                        </li>
                                        <li>
                                            <a href="#">Page 4</a>
                                        </li>
                                        <li>
                                            <a href="#">Page 5</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="shape-breadcrumbs">
                                        <li className="active">
                                            <a href="#">Page 1</a>
                                        </li>
                                        <li className="active">
                                            <a href="#">
                                                <i className="ti ti-clipboard-data"></i>Page 2
                                            </a>
                                        </li>
                                        <li className="active">
                                            <a href="#">Page 3</a>
                                        </li>
                                        <li>
                                            <a href="#">Page 4</a>
                                        </li>
                                        <li>
                                            <a href="#">Page 5</a>
                                        </li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card className="equal-card">
                            <CardHeader className="card-header">
                                <h5>Rounded Breadcrumb</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="mb-3">
                                    <ul className="rounded-breadcrumbs">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Gallery</a>
                                        </li>
                                        <li>
                                            <a href="#">Library</a>
                                        </li>
                                        <li>
                                            <a href="#">Web</a>
                                        </li>
                                        <li className="active">Data</li>
                                    </ul>
                                </div>

                                <div className="mb-3">
                                    <ul className="rounded-breadcrumbs">
                                        <li>
                                            <a href="#">
                                                <i className="ti ti-home mg-e-4 f-s-18"></i>Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ti ti-books mg-e-4 f-s-18"></i>Gallery
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ti ti-file-filled mg-e-4 f-s-18"></i>Library
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ti ti-database-export mg-e-4 f-s-18"></i>Web
                                            </a>
                                        </li>
                                        <li className="active">
                                            <i className="ti ti-clipboard-data mg-e-4 f-s-18"></i>Data
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul className="rounded-breadcrumbs">
                                        <li>
                                            <a href="#">
                                                <i className="ti ti-home mg-e-4 f-s-22"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ti ti-books mg-e-4 f-s-22"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ti ti-file-filled mg-e-4 f-s-22"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ti ti-database-export mg-e-4 f-s-22"></i>
                                            </a>
                                        </li>
                                        <li className="active">
                                            <i className="ti ti-clipboard-data mg-e-4 f-s-22"></i>
                                        </li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <CardHeader className="card-header">
                                <h5>Steps</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="form-wizard">
                                    <div className="form-wizard-header">
                                        <ul className="form-wizard-steps">
                                            <li className="active">
                                                <span className="wizard-steps">1</span>
                                            </li>
                                            <li>
                                                <span className="wizard-steps">2</span>
                                            </li>
                                            <li>
                                                <span className="wizard-steps">3</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="form-wizard">
                                    <div className="form-wizard-header">
                                        <ul className="form-wizard-steps">
                                            <li className="active">
                    <span className="wizard-steps circle-steps">
                      <i className="ti ti-users"></i>
                    </span>
                                            </li>
                                            <li>
                    <span className="wizard-steps circle-steps">
                      <i className="ti ti-info-circle"></i>
                    </span>
                                            </li>
                                            <li>
                    <span className="wizard-steps circle-steps">
                      <i className="ti ti-table-export"></i>
                    </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <ul className="shape-step">
                                        <li className="active">
                                            <a href="#">
                                                <i className="ti ti-circle-check-filled"></i>Cart
                                            </a>
                                        </li>
                                        <li className="active">
                                            <a href="#">Billing</a>
                                        </li>
                                        <li>
                                            <a href="#">Shipping</a>
                                        </li>
                                        <li>
                                            <a href="#">Payment</a>
                                        </li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card className="equal-card">
                            <CardHeader className="card-header">
                                <h5>Pagination</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="app-pagination-link">
                                    <ul className="pagination app-pagination">
                                        <li className="page-item">
                                            <a className="page-link b-r-left" href="#">
                                                Previous
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <ul className="pagination app-pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <ul className="pagination app-pagination">
                                        <li className="page-item disabled">
                                            <a className="page-link b-r-left">Previous</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item active" aria-current="page">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-3">
                                    <div>
                                        <ul className="pagination pagination-lg justify-content-end app-pagination">
                                            <li className="page-item disabled">
                                                <a className="page-link b-r-left">«</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item active" aria-current="page">
                                                <a className="page-link" href="#">
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item d-none d-sm-block">
                                                <a className="page-link" href="#">
                                                    3
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link b-r-right" href="#">
                                                    »
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    );
};

export default Misc;