"use client"
import React from "react";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import {Container, Row} from "reactstrap";
import SettingTabs from "./SettingTabs";

const Setting = () => {

    return (
        <>
            <Container fluid>
                <Breadcrumbs mainTitle="Profile" title="Apps" path={["Profile", "Profile"]}/>
                <Row>
                    <SettingTabs/>
                </Row>
            </Container>
        </>
    );
};

export default Setting;
