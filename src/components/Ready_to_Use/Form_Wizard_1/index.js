"use client"

import { Container, Row, Col  } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import PaymentWizard from "@/components/Ready_to_Use/Form_Wizard_1/PaymentWizard";
import AccountWizard from "@/components/Ready_to_Use/Form_Wizard_1/AccountWizard";
import BusinessWizard from "@/components/Ready_to_Use/Form_Wizard_1/BusinessWizard"




const Blank = () => {


    return (
        <>
            <Container fluid>
                <Breadcrumbs  mainTitle="Form Wizard 1" title=" Ready to use" path={["Form Wizard 1"]} icon={<i class="ph-duotone  ph-hand-heart f-s-16"></i>}/>
                <Row>
                    <Col xs={12}>
                        <PaymentWizard />
                    </Col>
                    <Col xs={12}>
                        <AccountWizard />
                    </Col>
                    <Col xs={12}>
                        <BusinessWizard />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blank;
