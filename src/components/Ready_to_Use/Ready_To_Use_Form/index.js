"use client"

import React from 'react';
import { Col, Container, Row  } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import AppointmentForm from "@/components/Ready_to_Use/Ready_To_Use_Form/AppointmentForm";
import PaymentForm from "@/components/Ready_to_Use/Ready_To_Use_Form/PaymentForm";
import DepartmentsForm from "@/components/Ready_to_Use/Ready_To_Use_Form/DepartmentsForm";
import StudentForm from "@/components/Ready_to_Use/Ready_To_Use_Form/StudentForm";
import ClientRegistration from "@/components/Ready_to_Use/Ready_To_Use_Form/ClientRegistration";


const Blank = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Ready to use form" title="Ready to use" path={["Ready to use form"]} icon={<i class="ph-duotone  ph-hand-heart f-s-16"></i>}/>

                <Row>
                    <Col xs={12}>
                        <AppointmentForm />
                    </Col>
                    <Col xs={12}>
                        <PaymentForm />
                    </Col>
                    <Col xs={12}>
                        <DepartmentsForm />
                    </Col>
                    <Col xs={12}>
                        <StudentForm />
                    </Col>
                    <Col xs={12}>
                        <ClientRegistration />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blank;
