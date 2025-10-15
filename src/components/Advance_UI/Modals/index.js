"use client"
import React, {useState} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";


const Blank = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [smallModal, setSmallModal] = useState(false);
    const [largeModal, setLargeModal] = useState(false);
    const [extraLargeModal, setExtraLargeModal] = useState(false);
    const [centerModal, setCenterModal] = useState(false);
    const [scrollableModal, setScrollableModal] = useState(false);
    const [modalFullscreen, setModalFullscreen] = useState(false);
    const [modalFullscreenSm, setModalFullscreenSm] = useState(false);
    const [modalFullscreenMd, setModalFullscreenMd] = useState(false);
    const [modalLg, setModalLg] = useState(false);
    const [modalXl, setModalXl] = useState(false);
    const [modalXxl, setModalXxl] = useState(false);



    // Toggle modals
    const toggleModal = () => setModalOpen(!modalOpen);
    const toggleSmallModal = () => setSmallModal(!smallModal);
    const toggleLargeModal = () => setLargeModal(!largeModal);
    const toggleExtraLargeModal = () => setExtraLargeModal(!extraLargeModal);
    const toggleCenterModal = () => setCenterModal(!centerModal);
    const toggleScrollableModal = () => setScrollableModal(!scrollableModal);
    const toggleFullscreenModal = () => setModalFullscreen(!modalFullscreen);
    const toggleFullscreenSmModal = () => setModalFullscreenSm(!modalFullscreenSm);
    const toggleFullscreenMdModal = () => setModalFullscreenMd(!modalFullscreenMd);
    const toggleLg = () => setModalLg(!modalLg);
    const toggleXl = () => setModalXl(!modalXl);
    const toggleXxl = () => setModalXxl(!modalXxl);



    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="Animation" title="Advance UI" path={["Animation"]} icon={<i className="ph-duotone  ph-briefcase-metal f-s-16"></i>}/>

                <Row>
                    <Col sm={12} md={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Default Modal</h5>
                                <p className="mb-0 text-secondary">
                                    If you want to keep the default modal, you can use{' '}
                                    <span className="text-danger">modal-dialog</span>.
                                </p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button color="primary" size="md" onClick={toggleModal}>
                                    Default Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12} md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Small Modal</h5>
                                <p className="mb-0 text-secondary">
                                    If you want to keep the default modal, you can keep it using{' '}
                                    <span className="text-danger">modal-dialog or app_modal_sm</span>
                                </p>
                            </CardHeader>
                            <div className="card-body modal-btn">
                                <Button type="button" className="btn btn-primary btn-md" color="primary"
                                        onClick={toggleSmallModal}>
                                    Small Modal
                                </Button>
                                <Button type="button" className="btn btn-secondary btn-md" onClick={toggleLargeModal}>
                                    Large Modal
                                </Button>
                                <Button type="button" className="btn btn-success btn-md"
                                        onClick={toggleExtraLargeModal}>
                                    Extra Large Modal
                                </Button>
                            </div>
                        </Card>
                    </Col>

                    <Col sm={12} md={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Center Modal</h5>
                                <p className="mb-0 text-secondary">
                                    If you want to keep the default modal, you can keep it using{' '}
                                    <span className="text-danger">modal-dialog-centered</span>
                                </p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button type="button" className="btn btn-danger btn-md" onClick={toggleCenterModal}>
                                    Center Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12} md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Scrollable Modal</h5>
                                <p className="mb-0 text-secondary">
                                    If you want to keep the default modal, you can keep it using{' '}
                                    <span
                                        className="text-danger">modal-dialog-centered or modal-dialog-scrollable</span>
                                </p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button type="button" className="btn btn-info btn-md" onClick={toggleScrollableModal}>
                                    Scrollable Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12} md={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Full Screen Modal</h5>
                                <p className="mb-0 text-secondary">Use <span
                                    className="text-danger">modal-fullscreen</span></p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button type="button" className="btn btn-dark btn-md" onClick={toggleFullscreenModal}>
                                    Full Screen Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12} md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Full Screen Sm Down Modal</h5>
                                <p className="mb-0 text-secondary">Use <span
                                    className="text-danger">modal-fullscreen-sm-down</span></p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button type="button" className="btn btn-secondary btn-md"
                                        onClick={toggleFullscreenSmModal}>
                                    Full Screen Sm Down Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12} md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Full-Screen Md Down Modal</h5>
                                <p className="mb-0 text-secondary">Use <span
                                    className="text-danger">modal-fullscreen-md-down</span></p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button type="button" className="btn btn-success btn-md"
                                        onClick={toggleFullscreenMdModal}>
                                    Full Screen Md Down Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12} md={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Full Screen Lg Down Modal</h5>
                                <p className="mb-0 text-secondary">
                                    If you want to keep the default modal, you can use <span
                                    className="text-danger">modal-fullscreen-lg-down</span>
                                </p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button
                                    color="danger"
                                    size="md"
                                    onClick={toggleLg}
                                >
                                    Full Screen Lg Down Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12} md={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Full Screen Xl Down Modal</h5>
                                <p className="mb-0 text-secondary">
                                    If you want to keep the default modal, you can use <span
                                    className="text-danger">modal-fullscreen-xl-down</span>
                                </p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button
                                    color="info"
                                    size="md"
                                    onClick={toggleXl}
                                >
                                    Full Screen Xl Down Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12} md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Full Screen Xxl Down Modal</h5>
                                <p className="mb-0 text-secondary">
                                    If you want to keep the default modal, you can use <span
                                    className="text-danger">modal-fullscreen-xxl-down</span>
                                </p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button
                                    color="warning"
                                    size="md"
                                    onClick={toggleXxl}
                                >
                                    Full Screen Xxl Down Modal
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h4 className="">Themes Modal</h4>
                                <p>You can use custom modals with themes colors.</p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button className="btn m-1 btn-outline-primary" color="primary" data-bs-toggle="modal"
                                        data-bs-target="#box_1">Primary
                                </Button>
                                <Button className="btn m-1 btn-outline-secondary" data-bs-toggle="modal"
                                        data-bs-target="#box_2">secondary
                                </Button>
                                <Button className="btn m-1 btn-outline-success" data-bs-toggle="modal"
                                        data-bs-target="#box_3">success
                                </Button>
                                <Button className="btn m-1 btn-outline-warning" data-bs-toggle="modal"
                                        data-bs-target="#box_4">warning
                                </Button>
                                <Button className="btn m-1 btn-outline-info" data-bs-toggle="modal"
                                        data-bs-target="#box_5">info
                                </Button>
                                <Button className="btn m-1 btn-outline-danger" data-bs-toggle="modal"
                                        data-bs-target="#box_6">danger
                                </Button>
                                <Button className="btn m-1 btn-outline-dark" data-bs-toggle="modal"
                                        data-bs-target="#box_7">dark
                                </Button>
                                {/*box-1-start*/}
                                <div className="modal fade" id="box_1" aria-hidden="true"
                                     tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header justify-content-between bg-primary ">
                                                <h5 className="modal-title text-white"
                                                    id="exampleModalToggleLabel4">Primary Modal</h5>
                                                <button type="button" className="btn-close m-0 fs-5"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <h5 className="mt-0 text-primary">Quos modi tempora illo fuga blanditiis
                                                    voluptatum atque.</h5>
                                            </div>
                                            <div className="modal-footer">
                                                <Button type="button" className="badge text-light-primary fs-6">
                                                    Save changes
                                                </Button>
                                                <Button type="button" className="btn btn-light-secondary"
                                                        data-bs-dismiss="modal">Close
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*box-1-end*/}
                                {/*box-2-start*/}
                                <div className="modal fade" id="box_2" aria-hidden="true"
                                     tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header justify-content-between bg-secondary ">
                                                <h5 className="modal-title text-white"
                                                    id="exampleModalToggleLabel5">Secondary Modal</h5>
                                                <button type="button" className="btn-close m-0 fs-5"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <h5 className="mt-0 text-secondary">Quos modi tempora illo fuga
                                                    blanditiis voluptatum atque.
                                                </h5>

                                            </div>
                                            <div className="modal-footer">
                                                <Button type="button" className="badge text-light-secondary fs-6">Save
                                                    changes
                                                </Button>
                                                <Button type="button" className="btn btn-light-secondary"
                                                        data-bs-dismiss="modal">Close
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*box-2-end*/}
                                {/*box-3-start*/}
                                <div className="modal fade" id="box_3" aria-hidden="true"
                                     tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header justify-content-between bg-success ">
                                                <h5 className="modal-title text-white"
                                                    id="exampleModalToggleLabel13">Success Modal</h5>
                                                <button type="button" className="btn-close m-0 fs-5"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <h5 className="mt-0 text-success">Quos modi tempora illo fuga blanditiis
                                                    voluptatum atque.</h5>

                                            </div>
                                            <div className="modal-footer">
                                                <Button type="button" className="badge text-light-success fs-6">Save
                                                    changes
                                                </Button>
                                                <Button type="button" className="btn btn-light-secondary"
                                                        data-bs-dismiss="modal">Close
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*box-3-end*/}
                                {/* box-4-start*/}
                                <div className="modal fade" id="box_4" aria-hidden="true"
                                     tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header justify-content-between bg-warning ">
                                                <h5 className="modal-title text-white"
                                                    id="exampleModalToggleLabel12">Warning Modal</h5>
                                                <button type="button" className="btn-close m-0 fs-5"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <h5 className="mt-0 text-warning">Quos modi tempora illo fuga blanditiis
                                                    voluptatum atque.</h5>

                                            </div>
                                            <div className="modal-footer">
                                                <Button type="button" className="badge text-light-warning fs-6">Save
                                                    changes
                                                </Button>
                                                <Button type="button" className="btn btn-light-secondary"
                                                        data-bs-dismiss="modal">Close
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*box-4-end*/}
                                {/*   box-5-start*/}
                                <div className="modal fade" id="box_5" aria-hidden="true"
                                     tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header justify-content-between bg-info">
                                                <h5 className="modal-title text-white"
                                                    id="exampleModalToggleLabel7">Info Modal</h5>
                                                <button type="button" className="btn-close m-0 fs-5"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <h5 className="mt-0 text-info">Quos modi tempora illo fuga blanditiis
                                                    voluptatum atque.</h5>

                                            </div>
                                            <div className="modal-footer">
                                                <Button type="button" className="badge text-light-info fs-6">Save
                                                    changes
                                                </Button>
                                                <Button type="button" className="btn btn-light-secondary"
                                                        data-bs-dismiss="modal">Close
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*box-5-end*/}
                                {/*box-6-start*/}
                                <div className="modal fade" id="box_6" aria-hidden="true"
                                     tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header justify-content-between bg-danger ">
                                                <h5 className="modal-title text-white"
                                                    id="exampleModalToggleLabel9">Danger Modal</h5>
                                                <button type="button" className="btn-close m-0 fs-5"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <h5 className="mt-0 text-danger">Quos modi tempora illo fuga blanditiis
                                                    voluptatum atque.</h5>

                                            </div>
                                            <div className="modal-footer">
                                                <Button type="button" className="badge text-light-danger fs-6">Save
                                                    changes
                                                </Button>
                                                <Button type="button" className="btn btn-light-secondary"
                                                        data-bs-dismiss="modal">Close
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*box-6-end*/}

                                {/*box-7-start*/}
                                <div className="modal fade" id="box_7" aria-hidden="true"
                                     tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header justify-content-between bg-secondary-900">
                                                <h5 className="modal-title text-white"
                                                    id="exampleModalToggleLabel11">Dark Modal</h5>
                                                <button type="button" className="btn-close m-0 fs-5"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <h5 className="mt-0 text-dark">Quos modi tempora illo fuga blanditiis
                                                    voluptatum atque.</h5>

                                            </div>
                                            <div className="modal-footer">
                                                <Button type="button" className="badge text-light-dark fs-6">Save
                                                    changes
                                                </Button>
                                                <Button type="button" className="btn btn-light-secondary"
                                                        data-bs-dismiss="modal">Close
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*box-7-end*/}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Modal isOpen={modalOpen} toggle={toggleModal} className="app_modal_sm">
                    <ModalHeader toggle={toggleModal} className="bg-primary-800">
                        <h1 className="modal-title fs-5 text-white">Small Modal</h1>
                    </ModalHeader>
                    <ModalBody className="text-center">
                        <div className="d-flex gap-2">
                            <img
                                src="/images/modals/06.jpg"
                                alt=""
                                className="rounded-pill object-fit-cover h-90 w-90 b-r-10"
                            />
                            <div className="text-start d-flex flex-column gap-2">
                                <h5>Content marketing</h5>
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" className="btn btn-light-secondary" onClick={toggleModal}>
                            Close
                        </Button>
                        <Button type="button" color="primary" className="btn btn-light-primary">
                            Save changes
                        </Button>
                    </ModalFooter>
                </Modal>

                {/* Small Modal */}
                <Modal isOpen={smallModal} toggle={toggleSmallModal} className="app_modal_sm">
                    <ModalHeader toggle={toggleSmallModal} className="bg-primary-800">
                        <h1 className="modal-title fs-5 text-white">Small Modal</h1>
                    </ModalHeader>
                    <ModalBody className="text-center">
                        <div className="d-flex gap-2">
                            <img
                                src="/images/modals/06.jpg"
                                alt=""
                                className="rounded-pill object-fit-cover h-90 w-90 b-r-10"
                            />
                            <div className="text-start d-flex flex-column gap-2">
                                <h5>Content Marketing</h5>
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" className="btn btn-light-secondary" onClick={toggleSmallModal}>
                            Close
                        </Button>
                        <Button type="button" className="btn btn-light-primary" color="primary">
                            Save Changes
                        </Button>
                    </ModalFooter>
                </Modal>

                {/* Large Modal */}
                <Modal isOpen={largeModal} toggle={toggleLargeModal} className="app_modal_lg">
                    <ModalHeader toggle={toggleLargeModal} className="bg-primary-800">
                        <h1 className="modal-title fs-5 text-white">Large Modal</h1>
                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-lg-4 text-center">
                                <img src="/images/modals/05.png" alt="" className="img-fluid"/>
                            </div>
                            <div className="col-lg-8 align-self-center">
                                <div className="error-content text-center">
                                    <h4 className="mb-3">DO NOT ENTER</h4>
                                    <Button type="button" className="btn btn-light-primary" color="primary">
                                        Back to Dashboard
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" className="btn btn-light-secondary" onClick={toggleLargeModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>

                {/* Extra Large Modal */}
                <Modal isOpen={extraLargeModal} toggle={toggleExtraLargeModal} className="app_modal_xl">
                    <ModalHeader toggle={toggleExtraLargeModal} className="bg-primary-800">
                        <h1 className="modal-title fs-5 text-white">Extra Large Modal</h1>
                    </ModalHeader>
                    <ModalBody>
                        <p>
                            In a professional context, it often happens that private or corporate clients order a
                            publication to be made and presented with the actual content still not being ready. Think of
                            a
                            news blog that's filled with content hourly on the day of going live.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" className="btn btn-light-primary" color="primary">
                            Save Changes
                        </Button>
                        <Button type="button" className="btn btn-light-secondary" onClick={toggleExtraLargeModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>

                {/* Center Modal */}
                <Modal isOpen={centerModal} toggle={toggleCenterModal} className="modal-dialog-centered">
                    <ModalHeader toggle={toggleCenterModal}>
                        <h5 className="modal-title">Center Modal</h5>
                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-lg-3 text-center align-self-center">
                                <img src="/images/modals/04.png" alt="" className="img-fluid b-r-10"/>
                            </div>
                            <div className="col-lg-9 ps-4">
                                <h5>Web Designer</h5>
                                <ul className="mt-3 mb-0 list-disc">
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                </ul>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" color="primary" className="btn btn-light-primary">
                            Save Changes
                        </Button>
                        <Button type="button" className="btn btn-light-secondary" onClick={toggleCenterModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>

                {/* Scrollable Modal */}
                <Modal isOpen={scrollableModal} toggle={toggleScrollableModal}
                       className="modal-dialog-centered modal-dialog-scrollable">
                    <ModalHeader toggle={toggleScrollableModal}>
                        <h5 className="modal-title">Scrollable Modal</h5>
                    </ModalHeader>
                    <ModalBody className="h-90">
                        <p>
                            <i className="ti ti-chevron-right text-secondary f-w-600"></i> However, reviewers tend to be
                            distracted by comprehensible content, say, a random text copied from a newspaper or the
                            internet. They are likely to focus on the text, disregarding the layout and its elements.
                        </p>
                        <p>
                            <i className="ti ti-chevron-right text-secondary f-w-600"></i> It was found by Richard
                            McClintock, a philologist, director of publications at Hampden-Sydney College in Virginia;
                            he searched for citings of consectetur in classical Latin literature, a term of remarkably
                            low frequency in that literary corpus.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" color="primary" className="btn btn-light-primary">
                            Save Changes
                        </Button>
                        <Button type="button" className="btn btn-light-secondary" onClick={toggleScrollableModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>

                {/* Fullscreen Modal */}
                <Modal isOpen={modalFullscreen} toggle={toggleFullscreenModal} className="modal-fullscreen">
                    <ModalHeader toggle={toggleFullscreenModal}>Full Screen Modal</ModalHeader>
                    <ModalBody>
                        <p>Content inside the full screen modal...</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggleFullscreenModal}>Close</Button>
                    </ModalFooter>
                </Modal>

                {/* Fullscreen Sm Down Modal */}
                <Modal isOpen={modalFullscreenSm} toggle={toggleFullscreenSmModal} className="modal-fullscreen-sm-down">
                    <ModalHeader toggle={toggleFullscreenSmModal}>Full Screen Below Sm</ModalHeader>
                    <ModalBody>
                        <p>Content inside the full screen below sm modal...</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggleFullscreenSmModal}>Close</Button>
                    </ModalFooter>
                </Modal>

                {/* Fullscreen Md Down Modal */}
                <Modal isOpen={modalFullscreenMd} toggle={toggleFullscreenMdModal} className="modal-fullscreen-md-down">
                    <ModalHeader toggle={toggleFullscreenMdModal}>Full Screen Below Md</ModalHeader>
                    <ModalBody>
                        <p>Content inside the full screen below md modal...</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggleFullscreenMdModal}>Close</Button>
                    </ModalFooter>
                </Modal>

                {/* Full Screen Lg Down Modal */}
                <Modal isOpen={modalLg} toggle={toggleLg} size="lg" className="modal-fullscreen-lg-down">
                    <ModalHeader toggle={toggleLg}>Full screen below lg</ModalHeader>
                    <ModalBody>
                        <p><i className="ti ti-arrow-right text-secondary f-w-600"></i> I must explain to you how all
                            this mistaken idea of denouncing pleasure and praising pain was born...</p>
                        <p><i className="ti ti-arrow-right text-secondary f-w-600"></i> I will give you a complete
                            account of the system...</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" size="sm" onClick={toggleLg}>Close</Button>
                    </ModalFooter>
                </Modal>

                {/* Full Screen Xl Down Modal */}
                <Modal isOpen={modalXl} toggle={toggleXl} size="xl" className="modal-fullscreen-xl-down">
                    <ModalHeader toggle={toggleXl}>Full screen below xl</ModalHeader>
                    <ModalBody>
                        <p><i className="ti ti-arrow-big-right text-secondary f-w-600"></i> I must explain to you how
                            all this mistaken idea of denouncing pleasure and praising pain was born...</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" size="sm" onClick={toggleXl}>Close</Button>
                    </ModalFooter>
                </Modal>

                {/* Full Screen Xxl Down Modal */}
                <Modal isOpen={modalXxl} toggle={toggleXxl} size="xxl" className="modal-fullscreen-xxl-down">
                    <ModalHeader toggle={toggleXxl}>Full screen below xxl</ModalHeader>
                    <ModalBody>
                        <p><i className="ti ti-arrow-big-right-lines text-secondary f-w-600"></i> I must explain to you
                            how all this mistaken idea of denouncing pleasure and praising pain was born...</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" size="sm" onClick={toggleXxl}>Close</Button>
                    </ModalFooter>
                </Modal>

            </Container>
        </>
    );
};

export default Blank; 
