"use client"
import React, {useEffect} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row ,CardFooter } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import $ from "jquery";
import "jstree";
import {basicView, checkBox} from "@/Data/TreeView/basicview";


const TreeView = () => {

    useEffect(() => {
        $('#theme_tree').jstree({
            "core": {
                themes: {
                    variant: "large"
                },
                data: basicView
            },
        });
        $('#level_tree').jstree({
            core: {
                themes: {
                    variant: "large"
                },
                data: checkBox
            },
            plugins : [ "themes", "html_data", "checkbox", "sort", "ui" ],
        });
    }, [])

    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Tree View" title="Advance UI" path={["Tree View"]} icon={<i className="ph-duotone  ph-briefcase-metal f-s-16"></i>}/>

                <Row className="tree-view">
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Basic Tree</h5>
                            </CardHeader>

                            <CardBody>
                                <div className="level-nestable">
                                    <div className='jstree-default-large jstree-default'>
                                        <div id="theme_tree"/>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Tree With Checkbox</h5>
                            </CardHeader>

                            <CardBody>
                                <div className="level-nestable">
                                    <div className='jstree-default-large'>
                                        <div id="level_tree"/>
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

export default TreeView;
