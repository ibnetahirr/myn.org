"use client"
import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row  } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import ApexCharts from "react-apexcharts";
import {getLocalStorageItem} from "@/_helper/index.js";
import {ApexChartsData} from "@/Data/ApexCharts/index.js";


const CandlestickChart = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Candlestick" title="Chart" path={["Apexchart","Candlestick"]} icon={<i class="ph-duotone  ph-chart-pie-slice f-s-16"></i>}/>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader >
                                <h5>Basic Candlestick Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.BasicCandlestickChart}
                                    type={'candlestick'}
                                    height={350}
                                    options={{
                                        chart: {
                                            type: 'candlestick',
                                            height: 350
                                        },
                                        title: {
                                            text: 'CandleStick Chart',
                                            align: 'left'
                                        },
                                        plotOptions: {
                                            candlestick: {
                                                colors: {
                                                    upward: getLocalStorageItem('color-primary', '#48BECE'),
                                                    downward: getLocalStorageItem('color-secondary', '#8B8476')
                                                }
                                            }
                                        },
                                        fill: {
                                            colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34']
                                        },
                                        xaxis: {
                                            type: 'datetime'
                                        },
                                        yaxis: {
                                            tooltip: {
                                                enabled: true
                                            }
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CandlestickChart;
