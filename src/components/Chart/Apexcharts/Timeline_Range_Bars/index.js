"use client"
import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row  } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import moment from 'moment';
import ApexCharts from "react-apexcharts";
import {getLocalStorageItem} from "@/_helper/index.js";
import {ApexChartsData} from "@/Data/ApexCharts/index.js";

const Blank = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Line" title="Chart" path={["Apexchart","Line"]} icon={<i class="ph-duotone  ph-chart-pie-slice f-s-16"></i>}/>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5> Basic Timeline Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            data: [
                                                {
                                                    x: 'Code',
                                                    y: [
                                                        new Date('2019-03-02').getTime(),
                                                        new Date('2019-03-04').getTime()
                                                    ]
                                                },
                                                {
                                                    x: 'Test',
                                                    y: [
                                                        new Date('2019-03-04').getTime(),
                                                        new Date('2019-03-08').getTime()
                                                    ]
                                                },
                                                {
                                                    x: 'Validation',
                                                    y: [
                                                        new Date('2019-03-08').getTime(),
                                                        new Date('2019-03-12').getTime()
                                                    ]
                                                },
                                                {
                                                    x: 'Deployment',
                                                    y: [
                                                        new Date('2019-03-12').getTime(),
                                                        new Date('2019-03-18').getTime()
                                                    ]
                                                }
                                            ]
                                        }]
                                    }
                                    type={'rangeBar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'rangeBar',
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true
                                            }
                                        },
                                        xaxis: {
                                            type: 'datetime'
                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE')],
                                        responsive: [{
                                            breakpoint: 768,
                                            options: {
                                                chart: {
                                                    height: 280,
                                                },
                                                yaxis: {
                                                    show: false
                                                },
                                            },
                                        }]
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Different color for each bar</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            data: [
                                                {
                                                    x: 'Analysis',
                                                    y: [
                                                        new Date('2019-02-27').getTime(),
                                                        new Date('2019-03-04').getTime()
                                                    ],
                                                    fillColor: getLocalStorageItem('color-secondary', '#8B8476')
                                                },
                                                {
                                                    x: 'Design',
                                                    y: [
                                                        new Date('2019-03-04').getTime(),
                                                        new Date('2019-03-08').getTime()
                                                    ],
                                                    fillColor: '#AECC34'
                                                },
                                                {
                                                    x: 'Coding',
                                                    y: [
                                                        new Date('2019-03-07').getTime(),
                                                        new Date('2019-03-10').getTime()
                                                    ],
                                                    fillColor: '#FF5E40'
                                                },
                                                {
                                                    x: 'Testing',
                                                    y: [
                                                        new Date('2019-03-08').getTime(),
                                                        new Date('2019-03-12').getTime()
                                                    ],
                                                    fillColor: '#F9D249'
                                                },
                                                {
                                                    x: 'Deployment',
                                                    y: [
                                                        new Date('2019-03-12').getTime(),
                                                        new Date('2019-03-17').getTime()
                                                    ],
                                                    fillColor: '#535AE7'
                                                }
                                            ]
                                        }]
                                    }
                                    type={'rangeBar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'rangeBar',
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true,
                                                distributed: true,
                                                dataLabels: {
                                                    hideOverflowingLabels: false
                                                }
                                            }
                                        },
                                        dataLabels: {
                                            enabled: true,
                                            formatter: function (val, opts) {
                                                var label = opts.w.globals.labels[opts.dataPointIndex]
                                                var a = moment(val[0])
                                                var b = moment(val[1])
                                                var diff = b.diff(a, 'days')
                                                return label + ': ' + diff + (diff > 1 ? ' days' : ' day')
                                            },
                                            style: {
                                                colors: ['#f3f4f5', '#fff']
                                            }
                                        },
                                        xaxis: {
                                            type: 'datetime'
                                        },
                                        yaxis: {
                                            show: false
                                        },
                                        grid: {
                                            row: {
                                                opacity: 1
                                            }
                                        },
                                        responsive: [{
                                            breakpoint: 768,
                                            options: {
                                                chart: {
                                                    height: 280,
                                                },
                                                yaxis: {
                                                    show: false
                                                },
                                            },
                                        }]
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Multi-series Timeline</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'Bob',
                                            data: [
                                                {
                                                    x: 'Design',
                                                    y: [
                                                        new Date('2019-03-05').getTime(),
                                                        new Date('2019-03-08').getTime()
                                                    ]
                                                },
                                                {
                                                    x: 'Code',
                                                    y: [
                                                        new Date('2019-03-08').getTime(),
                                                        new Date('2019-03-11').getTime()
                                                    ]
                                                },
                                                {
                                                    x: 'Test',
                                                    y: [
                                                        new Date('2019-03-11').getTime(),
                                                        new Date('2019-03-16').getTime()
                                                    ]
                                                }
                                            ]
                                        },
                                            {
                                                name: 'Joe',
                                                data: [
                                                    {
                                                        x: 'Design',
                                                        y: [
                                                            new Date('2019-03-02').getTime(),
                                                            new Date('2019-03-05').getTime()
                                                        ]
                                                    },
                                                    {
                                                        x: 'Code',
                                                        y: [
                                                            new Date('2019-03-06').getTime(),
                                                            new Date('2019-03-09').getTime()
                                                        ]
                                                    },
                                                    {
                                                        x: 'Test',
                                                        y: [
                                                            new Date('2019-03-10').getTime(),
                                                            new Date('2019-03-19').getTime()
                                                        ]
                                                    }
                                                ]
                                            }]
                                    }
                                    type={'rangeBar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'rangeBar',
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true
                                            }
                                        },
                                        dataLabels: {
                                            enabled: true,
                                            formatter: function (val) {
                                                var a = moment(val[0])
                                                var b = moment(val[1])
                                                var diff = b.diff(a, 'days')
                                                return diff + (diff > 1 ? ' days' : ' day')
                                            }
                                        },
                                        fill: {
                                            type: 'gradient',
                                            gradient: {
                                                shade: 'light',
                                                type: 'vertical',
                                                shadeIntensity: 0.25,
                                                gradientToColors: undefined,
                                                inverseColors: true,
                                                opacityFrom: 1,
                                                opacityTo: 1,
                                                stops: [50, 0, 100, 100]
                                            }
                                        },

                                        colors: ['#231928', getLocalStorageItem('color-primary', '#48BECE')],
                                        xaxis: {
                                            type: 'datetime'
                                        },
                                        legend: {
                                            position: 'top'
                                        },
                                        responsive: [{
                                            breakpoint: 768,
                                            options: {
                                                chart: {
                                                    height: 280,
                                                },
                                                yaxis: {
                                                    show: false
                                                },
                                            },
                                        }]
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Advanced Timeline (Multiple range)</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.AdvanceTimeline}
                                    type={'rangeBar'}
                                    height={450}
                                    options={{
                                        chart: {
                                            height: 450,
                                            type: 'rangeBar',
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true,
                                                barHeight: '80%'
                                            }
                                        },
                                        xaxis: {
                                            type: 'datetime'
                                        },
                                        stroke: {
                                            width: 1
                                        },
                                        fill: {
                                            type: 'solid',
                                            opacity: 0.6
                                        },

                                        colors: ['#8B8476', '#AECC34', '#FF5E40'],
                                        legend: {
                                            position: 'top',
                                            horizontalAlign: 'left'
                                        },
                                        responsive: [{
                                            breakpoint: 768,
                                            options: {
                                                chart: {
                                                    height: 280,
                                                },
                                                yaxis: {
                                                    show: false
                                                },
                                            },
                                        }]
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5> Timeline – Grouped Rows</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.AdvanceGroupedRows}
                                    type={'rangeBar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'rangeBar',
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true,
                                                barHeight: '50%',
                                                rangeBarGroupRows: true,
                                            }
                                        },
                                        colors: [getLocalStorageItem('color-primary','#48BECE'), getLocalStorageItem('color-secondary','#8B8476'), '#AECC34', '#FF5E40', '#F9D249', '#535AE7', '#ACB8C8', '#231928'],
                                        fill: {
                                            type: 'solid'
                                        },
                                        xaxis: {
                                            type: 'datetime'
                                        },
                                        legend: {
                                            position: 'right'
                                        },
                                        tooltip: {
                                            custom: function () {
                                                return '';
                                            }
                                        },
                                        responsive: [{
                                            breakpoint: 768,
                                            options: {
                                                chart: {
                                                    height: 280,
                                                },
                                                yaxis: {
                                                    show: false
                                                },
                                                legend: {
                                                    show:false
                                                },
                                            },
                                        }]
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
