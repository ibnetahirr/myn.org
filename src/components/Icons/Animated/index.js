"use client"
import React, {useEffect, useState} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import {AnimatedIcons} from "@/Data/Icons/animated";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';


const Blank = () => {

    const [iconList, setIconList] = useState(AnimatedIcons);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (searchValue === '') {
            setIconList(AnimatedIcons);
        } else {
            setIconList(AnimatedIcons.filter(icon =>
                icon.className.toLowerCase().includes(searchValue.toLowerCase())
            ));
        }
    }, [searchValue, AnimatedIcons]);

    const searchAnimatedIcons = (className) => {
        setTimeout(() => {
            navigator.clipboard.writeText(`<iconify-icon icon="${className}"></iconify-icon>`);
            Toastify({
                text: "Copied to the clipboard successfully",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {background: "rgba(var(--success),1)"},
                onClick: function () {
                }
            }).showToast();
        }, 100)
    }

    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Animated" title="Icons" path={["Animated"]} icon={<i class="ph-duotone  ph-shapes f-s-16"></i>}/>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <Row>
                                    <Col md={4}>
                                        <div className="search-bar app-form app-icon-form position-relative">
                                            <input
                                                type="search"
                                                className="form-control"
                                                name="search"
                                                placeholder="type to search"
                                                onChange={(e) => setSearchValue(e.target.value)}
                                            />
                                            <i className="ti ti-search"></i>
                                        </div>
                                    </Col>
                                    <Col md={8} className="text-end pt-2"/>
                                </Row>
                            </CardHeader>
                            <CardBody >
                                <ul className="icon-list ">
                                    {(iconList || []).map((icon, index) => (
                                        <li
                                            className="icon-box"
                                            onClick={() => searchAnimatedIcons(icon.className)}
                                            key={index}
                                        >
                                            <i>
                                                <iconify-icon icon={icon.className}/>
                                            </i>
                                            <strong className="mb-3">{icon.iconCode}</strong>

                                        </li>
                                    ))}
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blank;
