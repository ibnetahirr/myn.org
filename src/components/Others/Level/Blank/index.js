import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row ,CardFooter } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";


const Index = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Blank" title="Other Pages" path={["Blank"]} icon={<i class="ph-duotone  ph-newspaper f-s-16"></i>}/>

                <Row>
               
                </Row>
            </Container>
        </>
    );
};

export default Index;