import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row ,CardFooter } from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";


const Blank = () => {
    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Video Embed" title="Advance UI" path={["Video Embed"]} icon={<i className="ph-duotone  ph-briefcase-metal f-s-16"></i>}/>

                <Row>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Ratio Video 1x1 </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="ratio ratio-1x1">
                                    <div>
                                        <iframe className="w-100 h-100" src="https://www.youtube.com/embed/BcKOz6kAgg0"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader>
                                <h5>Ratio Video 4x3 </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="ratio  ratio-4x3">
                                    <div>
                                        <iframe className="w-100 h-100" src="https://www.youtube.com/embed/BcKOz6kAgg0"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Ratio Video 16x9 </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="ratio ratio-16x9">
                                    <div>
                                        <iframe className="w-100 h-100" src="https://www.youtube.com/embed/PIa17rsNSEE"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5>Custom ratios 50% </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="ratio" style={{"--bs-aspect-ratio": "50%"}}>
                                    <div>
                                        <iframe className="w-100 h-100" src="https://www.youtube.com/embed/EwzynNhx4Y8"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h5> Ratio Video 21x9 </h5>
                            </CardHeader>
                            <CardBody>
                                <div className="ratio ratio-21x9">
                                    <div>
                                        <iframe className="w-100 h-100" src="https://www.youtube.com/embed/Ep5kNwmDRlg"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blank; 
