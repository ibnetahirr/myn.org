"use client"
import React from 'react';
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import {Container, Row} from "reactstrap";
import EcommerceChartCard from "@/components/Widgets/EcommerceChartCard";
import WidgetsCards from "@/components/Widgets/WidgetsCards";


const Widgets = () => {
    return (
        <>
            <Container fluid>
                <Breadcrumbs  mainTitle="Widget" title=" Widget" path={[""]} icon={<i className="ph-duotone  ph-squares-four f-s-16"></i>}/>

                <Row>
                    <EcommerceChartCard/>
                    <WidgetsCards/>
                </Row>
            </Container>

        </>
    );
};

export default Widgets;