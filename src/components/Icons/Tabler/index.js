"use client"
import React, {useEffect, useState} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import {TablerIconsList} from "@/Data/Icons/TablerIconsList";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';


const Blank = () => {

    const [iconList, setIconList] = useState(TablerIconsList);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (searchValue === '') {
            setIconList(TablerIconsList);
        } else {
            setIconList(TablerIconsList.filter(icon =>
                icon.name.toLowerCase().includes(searchValue.toLowerCase())
            ));
        }
    }, [searchValue, TablerIconsList]);

    const tabler_icons = (className) => {
        navigator.clipboard.writeText(`<i class="${className}"></i>`);
        Toastify({
            text: "Copied to the clipboard successfully",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "rgba(var(--success),1)",
            },
            onClick: function () {
            }
        }).showToast();
    }

    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Tabler" title="Icons" path={["Tabler"]} icon={<i class="ph-duotone  ph-shapes f-s-16"></i>}/>

                <Row>
                    <Col xs={12} >
                        <Card>
                            <CardHeader>
                                <Row>
                                    <Col md={12}>
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
                                    <Col md={8} className="text-center text-md-end pt-2">
                                        <h5>4140 Icons</h5>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <ul className="icon-list">
                                    {(iconList || []).map((icon, index) => (
                                        <li
                                            className="icon-box"
                                            onClick={() => tabler_icons(icon.code)}
                                            key={index}
                                        >
                                            <i className={icon.code}/>
                                            <strong>{icon.name}</strong>
                                            <div className="icon-box-codes">
                                                <code>{icon.code}</code>
                                                <br/>
                                                <code>{icon.unicode}</code>
                                            </div>
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
