"use client";

import React from 'react';
import { Col, Container, Row  } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import TooltipsValidation from "@/components/Forms_Elements/Form_Validation/TooltipsValidation";
import CustomValidation from "@/components/Forms_Elements/Form_Validation/CustomValidation";
import DefaultsValidation from "@/components/Forms_Elements/Form_Validation/DefaultsValidation";
import SupportedValidation from "@/components/Forms_Elements/Form_Validation/SupportedValidation";

const Index = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Form Validation" title="Forms elements" path={["Form Validation"]} icon={<i class="ph-duotone  ph-cardholder f-s-16"></i>}/>

                <Row>
                    <Col xs={12}>
                        <TooltipsValidation/>
                    </Col>
                    <Col xs={12}>
                        <CustomValidation/>
                    </Col>
                    <Col xs={12}>
                        <DefaultsValidation/>
                    </Col>
                    <Col xs={12}>
                        <SupportedValidation/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Index; 
