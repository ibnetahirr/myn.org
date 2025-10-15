"use client"

import React from 'react';
import { Col, Container, Row  } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import Checkout from "@/components/Ready_to_Use/Form_Wizard_2/Checkout";
import Financial from "@/components/Ready_to_Use/Form_Wizard_2/Financial";
import Booking from "@/components/Ready_to_Use/Form_Wizard_2/Booking";



const Blank = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Form Wizard 2" title=" Ready to use" path={["Form Wizard 2"]} icon={<i class="ph-duotone  ph-hand-heart f-s-16"></i>}/>

                <Row>
                    <Col xs={12}>
                        <Checkout />
                    </Col>
                    <Col xs={12}>
                        <Financial/>
                    </Col>
                    <Col xs={12}>
                        <Booking/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blank;
