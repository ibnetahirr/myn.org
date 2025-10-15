"use client"

import React from 'react';
import { Col, Container, Row  } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import PatientsTable from "@/components/Ready_to_Use/Ready_To_Use_Tables/PatientsTable";
import StudentsTable from "@/components/Ready_to_Use/Ready_To_Use_Tables/StudentsTable";
import PaymentTable from "@/components/Ready_to_Use/Ready_To_Use_Tables/PaymentTable";
import JobTable from "@/components/Ready_to_Use/Ready_To_Use_Tables/JobTable";
import TicketTable from "@/components/Ready_to_Use/Ready_To_Use_Tables/TicketTable";



const Blank = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Ready to use table" title="Ready to use" path={["Ready to use table"]} icon={<i class="ph-duotone  ph-hand-heart f-s-16"></i>}/>

                <Row>
                    <Col xs={12}>
                        <PatientsTable/>
                    </Col>
                    <Col xs={12}>
                        <StudentsTable/>
                    </Col>
                    <Col xs={12}>
                        <PaymentTable/>
                    </Col>
                    <Col xs={12}>
                        <JobTable/>
                    </Col>
                    <Col xs={12}>
                        <TicketTable/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blank;
