"use client"
import React from 'react';
import { Col, Container, Row ,CardFooter } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import BasicFileupload from "@/components/Forms_Elements/File_Upload/BasicFileupload";
import FilepondUploader from "@/components/Forms_Elements/File_Upload/FilepondUploader";
import CircleUploader from "@/components/Forms_Elements/File_Upload/CircleUploader";
import SolidFileupload from "@/components/Forms_Elements/File_Upload/SolidFileupload";
import LightFileupload from "@/components/Forms_Elements/File_Upload/LightFileupload";


const Index = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="File upload" title="Forms elements" path={["File upload"]} icon={<i class="ph-duotone  ph-cardholder f-s-16"></i>}/>

                <Row>
                    <Col xs={12}>
                        <BasicFileupload/>
                    </Col>
                    <Col xl={8}>
                        <FilepondUploader />
                    </Col>
                    <Col xl={4}>
                        <CircleUploader />
                    </Col>
                    <Col xs={12}>
                        <SolidFileupload/>
                    </Col>
                    <Col xs={12}>
                        <LightFileupload/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Index; 
