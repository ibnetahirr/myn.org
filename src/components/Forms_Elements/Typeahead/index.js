"use client"
import React, {useEffect} from 'react';
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import { Container, Row, Col, Card, CardHeader, CardBody, Input, Form } from "reactstrap";
const countriesData = require("../../../vendor/typeahead/data/countries.json");
const remoteData = require("../../../vendor/typeahead/data/post_1960.json");
const multipleData1 = require("../../../vendor/typeahead/data/nba.json");
const multipleData2 = require("../../../vendor/typeahead/data/nhl.json");


const Index = () => {

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Dynamically import jQuery and typeahead.js
            const $ = require("jquery");
            const Bloodhound = require("typeahead.js");

            // Basic Typeahead
            const stringMatcher = (strs) => (word, wd) => {
                const strmatches = [];
                const substrRegex = new RegExp(word, "i");
                $.each(strs, (i, str) => {
                    if (substrRegex.test(str)) {
                        strmatches.push(str);
                    }
                });
                wd(strmatches);
            };

            const states = [
                "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
                "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
                "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
                "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
                "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
                "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
                "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
            ];

            // Initialize Typeahead for Basic Example
            $("#basictype .typeahead").typeahead(
                { hint: false, highlight: true, minLength: 1 },
                { name: "states", source: stringMatcher(states) }
            );

            // Bloodhound Example
            const bloodhoundStates = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.whitespace,
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                local: states,
            });

            $("#bloodhoundtype .typeahead").typeahead(
                { hint: false, highlight: false, minLength: 1 },
                { name: "states", source: bloodhoundStates }
            );

            // Prefetch Typeahead
            const countries = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.whitespace,
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                local: countriesData,
            });

            $("#prefetchtype .typeahead").typeahead(
                { hint: false, highlight: true },
                { name: "states", source: countries }
            );

            // Remote Typeahead
            const bestPictures = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace("value"),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                local: remoteData,
            });

            $("#remotetype .typeahead").typeahead(
                { hint: false, highlight: true },
                { hint: false,name: "best-pictures", display: "value", source: bestPictures }
            );

            // Custom Templates for Typeahead
            $("#customtype-templates .typeahead").typeahead(
                { hint: false, highlight: true },
                {
                    hint: false,
                    name: "best-pictures",
                    display: "value",
                    source: bestPictures,
                    templates: {
                        empty: '<div class="empty-message"><i class="ti ti-mood-sad"></i> sorry! Data is not available</div>',
                    },
                }
            );

            // Multiple Datasets Typeahead
            const nbaTeams = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace("team"),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                local: multipleData1,
            });

            const nhlTeams = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace("team"),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                local: multipleData2,
            });

            $("#multiple-datasetstype .typeahead").typeahead(
                { hint: false, highlight: true },
                {
                    name: "nba-teams",
                    display: "team",
                    source: nbaTeams,
                    templates: { header: '<h5 class="league-name">NBA Teams</h5>' },
                },
                {
                    name: "nhl-teams",
                    display: "team",
                    source: nhlTeams,
                    templates: { header: '<h5 class="league-name">NHL Teams</h5>' },
                }
            );

            // Scrollable Dropdown Menu Typeahead
            $("#scrollable-dropdown-menu .typeahead").typeahead(
                { hint: false, highlight: true },
                {  name: "countries", limit: 10, source: countries }
            );

            // RTL Typeahead
            const arabicPhrases = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.whitespace,
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                local: states,
            });

            $("#rtltype .typeahead").typeahead(
                { hint: false },
                { name: "arabic-phrases", source: arabicPhrases }
            );
        }
    }, []);

    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Typeahead" title="Forms elements" path={["Typeahead"]} icon={<i className="ph-duotone  ph-cardholder f-s-16"></i>}/>

                <Row className="app-typeahead typeahead-demo">
                    {/* The Basics */}
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>The Basics</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <div id="basictype">
                                        <Input type="text" className="typeahead" placeholder="States" />
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    {/* Bloodhound */}
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Bloodhound</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <div id="bloodhoundtype">
                                        <Input type="text" className="typeahead" placeholder="States of USA" />
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    {/* Prefetch */}
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Prefetch</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <div id="prefetchtype">
                                        <Input type="text" className="typeahead" placeholder="Countries" />
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    {/* Remote Typeahead */}
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Remote Typeahead</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <div id="remotetype">
                                        <Input type="text" className="typeahead" placeholder="Oscar winners for Best Picture" />
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    {/* Custom Templates */}
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Custom Templates</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <div id="customtype-templates">
                                        <Input type="text" className="typeahead" placeholder="Oscar winners for Best Picture" />
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    {/* Multiple Datasets */}
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Multiple Datasets</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <div id="multiple-datasetstype">
                                        <Input type="text" className="typeahead" placeholder="NBA and NHL teams" />
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    {/* Scrollable Dropdown Menu */}
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Scrollable Dropdown Menu</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <div id="scrollable-dropdown-menu" className="scrollable-dropdown">
                                        <Input type="text" className="typeahead" placeholder="Countries" />
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    {/* RTL Support */}
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>RTL Support</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <div id="rtltype">
                                        <Input type="text" className="typeahead text-end" placeholder="Countries" />
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Index;
