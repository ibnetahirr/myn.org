"use client"
import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row ,CardFooter } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import ApexCharts from "react-apexcharts";
import {generateHeatmapData, getLocalStorageItem} from "@/_helper/index.js";
import {ApexChartsData} from "@/Data/ApexCharts/index.js";


const Blank = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Heatmap" title="Chart" path={["Apexchart","Heatmap"]} icon={<i class="ph-duotone  ph-chart-pie-slice f-s-16"></i>}/>

                <Row>
                    <Col xl={6}>
                        <div className="card equal-card">
                            <CardHeader>
                                <h5> Basic Heatmap – Single Series </h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.HeatMapSingleSeries}
                                    type={'heatmap'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'heatmap',
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#74788D'), "#0FB450", "#EA5659", "#FAC10F", "#3C91F3", "#ACB8C8", "#231928"],
                                        title: {
                                            text: ''
                                        },
                                    }}
                                />
                            </CardBody>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <CardHeader>
                                <h5> Heatmap – Multiple Series </h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.HeatMapMultipleSeries}
                                    type={'heatmap'}
                                    height={450}
                                    options={{
                                        chart: {
                                            height: 450,
                                            type: 'heatmap',
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), "#AECC34", "#FF5E40", "#F9D249", "#535AE7", "#E5E3E0", "#48443D"],
                                        xaxis: {
                                            type: 'category',
                                            categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30']
                                        },
                                        title: {
                                            text: ''
                                        },
                                        grid: {
                                            padding: {
                                                right: 20
                                            }
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <CardHeader>
                                <h5> Heatmap – Color Range</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.HeatMapColorRange}
                                    type={'heatmap'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'heatmap',
                                        },
                                        plotOptions: {
                                            heatmap: {
                                                shadeIntensity: 0.5,
                                                radius: 0,
                                                useFillColorAsStroke: true,
                                                colorScale: {
                                                    ranges: [{
                                                        from: -30,
                                                        to: 5,
                                                        name: 'low',
                                                        color: getLocalStorageItem('color-primary', '#48BECE')
                                                    },
                                                        {
                                                            from: 6,
                                                            to: 20,
                                                            name: 'medium',
                                                            color: getLocalStorageItem('color-secondary', '#8B8476')
                                                        },
                                                        {
                                                            from: 21,
                                                            to: 45,
                                                            name: 'high',
                                                            color: '#AECC34'
                                                        },
                                                        {
                                                            from: 46,
                                                            to: 55,
                                                            name: 'extreme',
                                                            color: '#FF5E40'
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            width: 1
                                        },
                                        title: {
                                            text: ''
                                        },
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <CardHeader>
                                <h5> Heatmap – Range without Shades</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.HeatMapRangeShades}
                                    type={'heatmap'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'heatmap',
                                        },
                                        stroke: {
                                            width: 0
                                        },
                                        plotOptions: {
                                            heatmap: {
                                                radius: 30,
                                                enableShades: false,
                                                colorScale: {
                                                    ranges: [{
                                                        from: 0,
                                                        to: 50,
                                                        color: '#535AE7'
                                                    },
                                                        {
                                                            from: 51,
                                                            to: 100,
                                                            color: '#FAC10F'
                                                        },
                                                    ],
                                                },

                                            }
                                        },
                                        dataLabels: {
                                            enabled: true,
                                            style: {
                                                colors: ['#fff']
                                            }
                                        },
                                        xaxis: {
                                            type: 'category',
                                        },
                                        title: {
                                            text: ''
                                        },
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

export default Blank;
