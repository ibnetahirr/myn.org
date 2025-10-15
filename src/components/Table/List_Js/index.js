"use client"

import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row, CardFooter} from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import EditTable from "@/components/Table/List_Js/EditTable";
import ListTable from "@/components/Table/List_Js/ListTable";
import TablesLists from "@/components/Table/List_Js/TablesLists";


const Blank = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs mainTitle="List Table" title="Table" path={["List Table"]} icon={<i
                    class="ph-duotone  ph-table f-s-16"></i>}/>

                <Row>
                    <EditTable/>
                    <ListTable/>
                    <TablesLists/>
                </Row>
            </Container>
        </>
    );
};

export default Blank;
