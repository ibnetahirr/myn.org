import React from 'react';
import {Button, Card, CardBody} from 'reactstrap';

const EmailTabs = ({ active, setActive,toggleModal  }) => {

    return (
        <>
            <Card>
                <CardBody>
                    <div className="d-flex">

                        <Button color="primary" className="w-100" onClick={toggleModal}>
                            Compose
                        </Button>

                        <div className="close-togglebtn">
                            <a className="ms-2 close-toggle" role="button"><i className="ti ti-align-justified fs-5"/></a>
                        </div>
                    </div>

                    <div className="horizontal-tab-wrapper">
                        <ul className="email-list mt-3 tabs">
                            <li className={`tab-link ${active == "tab1" ? "active" : ""}`} onClick={() => setActive("tab1")}>
                                <i className="ti ti-mail fs-5 pe-2"/> <span className="flex-grow-1">Inbox</span> 10+
                            </li>
                            <li className={`tab-link ${active == "tab2" ? "active" : ""}`} onClick={() => setActive("tab2")}><i className="ti ti-send fs-5 pe-2"/><span
                                className="flex-grow-1">Sent</span></li>
                            <li className={`tab-link ${active == "tab3" ? "active" : ""}`} onClick={() => setActive("tab3")}><i className="ti ti-file fs-5 pe-2"/><span
                                className="flex-grow-1">Draft</span> </li>
                            <li className={`tab-link ${active == "tab4" ? "active" : ""}`} onClick={() => setActive("tab4")}><i className="ti ti-star fs-5 pe-2"/><span
                                className="flex-grow-1">
                              Starred </span>
                                2+</li>
                            <li className={`tab-link ${active == "tab5" ? "active" : ""}`} onClick={() => setActive("tab5")}><i className="ti ti-alert-octagon fs-5 pe-2"/><span
                                className="flex-grow-1">Spam</span> </li>
                            <li className={`tab-link ${active == "tab6" ? "active" : ""}`} onClick={() => setActive("tab6")}><i className="ti ti-trash fs-5 pe-2 "/><span
                                className="flex-grow-1">Trash</span> </li>
                        </ul>
                    </div>
                    <div className="app-divider-v dashed p-2 m-0"/>
                    <ul className="email-list">
                        <li>
                            <h6>Labels</h6>
                        </li>
                        <li><i className="ti ti-circle-filled pe-2 text-danger"/> Social</li>
                        <li><i className="ti ti-circle-filled pe-2 text-primary"/> Company</li>
                        <li><i className="ti ti-circle-filled pe-2 text-success"/> Important</li>
                        <li><i className="ti ti-circle-filled pe-2 text-info"/> Private</li>
                    </ul>
                    <div className="app-divider-v dashed p-2 m-0"/>
                    <ul className="email-list">
                        <li><i className="ti ti-mail fs-5 pe-2"/>All Mail</li>
                        <li><i className="ti ti-album fs-5 pe-2"/>Primary</li>
                        <li><i className="ti ti-tag fs-5 pe-2"/>Promotions</li>
                        <li><i className="ti ti-users fs-5 pe-2"/>Social</li>
                    </ul>
                </CardBody>
            </Card>
        </>
    );
};

export default EmailTabs;