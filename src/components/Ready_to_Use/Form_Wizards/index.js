"use client"

import React from 'react';
import { Col, Container, Row  } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import NumberWizard from "@/components/Ready_to_Use/Form_Wizards/NumberWizard";
import IconWizards from "@/components/Ready_to_Use/Form_Wizards/IconWizards";
import VerticalIconWizards from "@/components/Ready_to_Use/Form_Wizards/VerticalIconWizards";
import VerticalNumberWizard from "@/components/Ready_to_Use/Form_Wizards/VerticalNumberWizard";


const FormWizards = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Form Wizards" title="Other Pages" path={["Form Wizards"]} icon={<i class="ph-duotone  ph-hand-heart f-s-16"></i>}/>

                <Row>
                    <Col xs={12} lg={6}>
                        <NumberWizard />
                    </Col>
                    <Col xs={12} lg={6}>
                        <IconWizards />
                    </Col>
                    <Col xs={12} lg={6}>
                        <VerticalNumberWizard />
                    </Col>
                    <Col xs={12} lg={6}>
                        <VerticalIconWizards />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default FormWizards;
