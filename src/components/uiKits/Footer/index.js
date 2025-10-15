"use client";
import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row, Table} from "reactstrap";

const Index = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <Container fluid>

                <Row>
                    <Col>
                        <h4 className="main-title">Progress</h4>

                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
										<span>
										  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
										</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Progress</a>
                            </li>
                        </ul>

                    </Col>

                </Row>
            </Container>
        </>
    );
};

export default Index;

