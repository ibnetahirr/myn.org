"use client"
import React, {useEffect, useState} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import {FlagIconsList} from "@/Data/Icons/FlagIcons";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';


const Blank = () => {

    const [iconList, setIconList] = useState(FlagIconsList);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (searchValue === '') {
            setIconList(FlagIconsList);
        } else {
            setIconList(FlagIconsList.filter(icon =>
                icon.name.toLowerCase().includes(searchValue.toLowerCase())
            ));
        }
    }, [searchValue, FlagIconsList]);

    useEffect(() => {
        $(document).on('click','.flag-icon-toggle .btn',function () {
            $(".flag-icon-toggle .btn").removeClass("active");
            $(this).addClass("active");
            if($(this).text().trim() === "Squared") {
                $(".flag-icon").addClass("flag-icon-squared");
            } else {
                $(".flag-icon").removeClass("flag-icon-squared");
            }
        });
    }, []);

    const copyText = (element) => {
        navigator.clipboard.writeText(`<i class="${element}"></i>`);
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
            } // Callback after click
        }).showToast();
    }

    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Flag" title="Icons" path={["Flag"]} icon={<i class="ph-duotone  ph-shapes f-s-16"></i>}/>

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
                                    <Col md={8} className="text-end pt-2">
                                        <div className="btn-group btn-group-sm flag-icon-toggle" role="group"
                                             aria-label="Flag Icon button group">
                                            <button type="button" className="btn btn-outline-secondary active">
                                                Default
                                            </button>
                                            <button type="button" className="btn btn-outline-secondary">
                                                Squared
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <ul className="icon-list space-top-icon">
                                    {iconList.map((flag, index) => (
                                        <li
                                            className="icon-box"
                                            onClick={() => copyText(flag.flagIcon)}
                                            key={index}
                                        >
                                            <i className={flag.flagIcon}></i>
                                            <strong>{flag.name} </strong>
                                            <span className="badge text-bg-primary mb-3">{flag.code}</span>
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
