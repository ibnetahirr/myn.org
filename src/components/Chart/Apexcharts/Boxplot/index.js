"use client"
import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row ,CardFooter } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import ApexCharts from "react-apexcharts";
import {generateDayWiseTimeSeries,getLocalStorageItem} from "@/_helper/index.js";


const BoxplotChart = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Boxplot" title="Chart" path={["Apexchart","Boxplot"]} icon={<i class="ph-duotone  ph-chart-pie-slice f-s-16"></i>}/>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5> Basic Box & Whisker Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            type: 'boxPlot',
                                            data: [
                                                {
                                                    x: 'Jan 2015',
                                                    y: [54, 66, 69, 75, 88]
                                                },
                                                {
                                                    x: 'Jan 2016',
                                                    y: [43, 65, 69, 76, 81]
                                                },
                                                {
                                                    x: 'Jan 2017',
                                                    y: [31, 39, 45, 51, 59]
                                                },
                                                {
                                                    x: 'Jan 2018',
                                                    y: [39, 46, 55, 65, 71]
                                                },
                                                {
                                                    x: 'Jan 2019',
                                                    y: [29, 31, 35, 39, 44]
                                                },
                                                {
                                                    x: 'Jan 2020',
                                                    y: [41, 49, 58, 61, 67]
                                                },
                                                {
                                                    x: 'Jan 2021',
                                                    y: [54, 59, 66, 71, 88]
                                                }
                                            ]
                                        }]
                                    }
                                    type="boxPlot"
                                    height={350}
                                    options={{
                                        chart: {
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        plotOptions: {
                                            boxPlot: {
                                                colors: {
                                                    upper: getLocalStorageItem('color-primary', '#48BECE'),
                                                    lower: getLocalStorageItem('color-secondary', '#8B8476')
                                                }
                                            }
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5> BoxPlot with Scatter Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[
                                        {
                                            name: 'box',
                                            type: 'boxPlot',
                                            data: [
                                                {
                                                    x: new Date('2017-01-01').getTime(),
                                                    y: [54, 66, 69, 75, 88]
                                                },
                                                {
                                                    x: new Date('2018-01-01').getTime(),
                                                    y: [43, 65, 69, 76, 81]
                                                },
                                                {
                                                    x: new Date('2019-01-01').getTime(),
                                                    y: [31, 39, 45, 51, 59]
                                                },
                                                {
                                                    x: new Date('2020-01-01').getTime(),
                                                    y: [39, 46, 55, 65, 71]
                                                },
                                                {
                                                    x: new Date('2021-01-01').getTime(),
                                                    y: [29, 31, 35, 39, 44]
                                                }
                                            ]
                                        },
                                        {
                                            name: 'outliers',
                                            type: 'scatter',
                                            data: [
                                                {
                                                    x: new Date('2017-01-01').getTime(),
                                                    y: 32
                                                },
                                                {
                                                    x: new Date('2018-01-01').getTime(),
                                                    y: 25
                                                },
                                                {
                                                    x: new Date('2019-01-01').getTime(),
                                                    y: 64
                                                },
                                                {
                                                    x: new Date('2020-01-01').getTime(),
                                                    y: 27
                                                },
                                                {
                                                    x: new Date('2020-01-01').getTime(),
                                                    y: 78
                                                },
                                                {
                                                    x: new Date('2021-01-01').getTime(),
                                                    y: 15
                                                }
                                            ]
                                        }
                                    ]}
                                    type={'boxPlot'}
                                    height={350}
                                    options={{
                                        chart: {
                                            type: 'boxPlot',
                                            height: 350
                                        },
                                        title: {
                                            text: '',
                                            align: 'left'
                                        },
                                        xaxis: {
                                            type: 'datetime',
                                            tooltip: {
                                                formatter: function(val) {
                                                    return new Date(val).getFullYear()
                                                }
                                            }
                                        },

                                        tooltip: {
                                            shared: false,
                                            intersect: true
                                        },
                                        plotOptions: {
                                            boxPlot: {
                                                colors: {
                                                    upper: '#AECC34',
                                                    lower: '#FF5E40'
                                                }
                                            }
                                        },
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Horizontal BoxPlot Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[
                                        {
                                            data: [
                                                {
                                                    x: 'Category A',
                                                    y: [54, 66, 75, 88, 100] // [min, Q1, median, Q3, max]
                                                },
                                                {
                                                    x: 'Category B',
                                                    y: [43, 55, 60, 75, 90]
                                                },
                                                {
                                                    x: 'Category C',
                                                    y: [31, 40, 50, 60, 70]
                                                },
                                                {
                                                    x: 'Category D',
                                                    y: [39, 45, 55, 65, 80]
                                                },
                                                {
                                                    x: 'Category E',
                                                    y: [29, 35, 45, 55, 65]
                                                },
                                                {
                                                    x: 'Category F',
                                                    y: [41, 48, 60, 68, 80]
                                                },
                                                {
                                                    x: 'Category G',
                                                    y: [54, 65, 75, 85, 95]
                                                }
                                            ]
                                        }
                                    ]}
                                    type={'boxPlot'}
                                    height={350}
                                    options={{
                                        chart: {
                                            type: 'boxPlot',
                                            height: 350
                                        },
                                        title: {
                                            text: '',
                                            align: 'left'
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true,
                                                barHeight: '50%'
                                            },
                                            boxPlot: {
                                                colors: {
                                                    upper: '#F9D249',
                                                    lower: '#535AE7'
                                                }
                                            }
                                        },

                                        stroke: {
                                            colors: ['#6c757d']
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

export default BoxplotChart;
