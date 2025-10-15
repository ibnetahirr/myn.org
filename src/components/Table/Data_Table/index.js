"use client"
import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row,} from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import DefaultDatatable from "@/components/Table/Data_Table/DefaultDatatable";
import BorderedDatatable from "@/components/Table/Data_Table/BorderedDatatable";
import ButtonsDatatable from "@/components/Table/Data_Table/ButtonsDatatable";
import CallbackDatatable from "@/components/Table/Data_Table/CallbackDatatable";
import ChildRowsDatatable from "@/components/Table/Data_Table/ChildRowsDatatable";


const Blank = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs mainTitle="Data Table" title="Table" path={["Data Table"]}
                             icon={<i class="ph-duotone  ph-table f-s-16"></i>}/>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Default Datatable</h5>
                                <p>DataTables has most features enabled by default, so all you need to do to use it with
                                    your own
                                    tables is to call the construction function: <code>$().DataTable();</code>. </p>
                            </CardHeader>

                            <CardBody className="p-0">
                                <DefaultDatatable/>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Row Border Bottom Example</h5>
                                <p>DataTables has most features enabled by default, so all you need to do to use it with
                                    your own
                                    ables is to call the construction function: <code>$().DataTable();</code> and border
                                    bottom
                                </p>
                            </CardHeader>

                            <CardBody className="p-0">
                                <BorderedDatatable/>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Buttons Example</h5>
                                <p>The Buttons extension for DataTables provides a common set of options, API methods
                                    and styling to
                                    display buttons on a page that will interact with a DataTable. The core library
                                    provides the based
                                    framework upon which plug-ins can be built.</p>
                            </CardHeader>

                            <CardBody className="p-0">
                                <ButtonsDatatable/>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Row Created Callback Example</h5>
                                <p>The Buttons extension for DataTables provides a common set of options, API methods
                                    and styling to
                                    display buttons on a page that will interact with a DataTable. The core library
                                    provides the based
                                    framework upon which plug-ins can be built.</p>
                            </CardHeader>

                            <CardBody className="p-0">
                                <CallbackDatatable/>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Child Rows Example</h5>
                                <p>The DataTables API has a number of methods for attaching child rows to a parent row
                                    in the
                                    DataTable. This can be used to show additional information about a row, useful for
                                    cases where you
                                    wish to convey more information about a row than there is space for in the host
                                    table.</p>
                            </CardHeader>

                            <CardBody className="p-0">
                                {/*<ChildRowsDatatable/>*/}
                            </CardBody>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blank;
