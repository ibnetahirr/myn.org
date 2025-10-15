"use client"
import Breadcrumbs from '@/components/CommonElements/Breadcrumbs';
import React, {useEffect} from 'react'
import {Card, CardBody, Col, Container, Row} from "reactstrap";
import CheckoutTabs from "@/components/Apps/E-Shop/Checkout/CheckoutTabs";
import CheckoutTabsData from "@/components/Apps/E-Shop/Checkout/CheckoutTabsData";
import CheckoutProducts from "@/components/Apps/E-Shop/Checkout/CheckoutProducts";

const Checkout = () => {

    return (
        <Container fluid>
            <Breadcrumbs
                mainTitle="Checkout"
                title="Apps"
                path={["E-shop", "Checkout"]}
            />

            <Row>
                <Col lg={8}>
                    <CheckoutTabs/>
                </Col>

                <Col lg={4}>
                    <Card>
                        <CardBody>
                            <CheckoutProducts/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Checkout;