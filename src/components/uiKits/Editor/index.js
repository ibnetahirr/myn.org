"use client";
import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Col, Container, Row} from "reactstrap";
import TextEditor from "@/components/Apps/E-Shop/AddProduct/TextEditor";

const Editor = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <h4 className="main-title">Editor</h4>

                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
										<span>
										  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
										</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Editor</a>
                            </li>
                        </ul>

                    </Col>

                </Row>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="app-editor" id="editor">
                                    <p>Hello !</p>
                                </div>
                                <TextEditor/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="app-editor" id="editor1">
                                    <p>Hello !</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Editor;

