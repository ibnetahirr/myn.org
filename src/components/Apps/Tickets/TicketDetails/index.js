"use client"
import React from 'react';
import Breadcrumbs from '@/components/CommonElements/Breadcrumbs';
import {Col, Container, Row} from "reactstrap";
import TicketInfo from "@/components/Apps/Tickets/TicketDetails/TicketInfo";
import TicketFileUpload from "@/components/Apps/Tickets/TicketDetails/TicketFileUpload";
import TicketDetailsData from "@/components/Apps/Tickets/TicketDetails/TicketDetailsData";

const TicketDetails = () => {
    return (
        <Container fluid>
            <Breadcrumbs  mainTitle="Ticket Details" title="Apps" path={["Ticket","Ticket Details"]}  />
            <Row className="ticket-details">
                <Col md={5} lg={4} xxl={3}>
                    <TicketInfo/>
                    <TicketFileUpload/>
                </Col>
                <Col md={7} lg={8} xxl={9}>
                    <TicketDetailsData/>
                </Col>
            </Row>
          </Container>
    );
};

export default TicketDetails;