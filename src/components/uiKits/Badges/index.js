"use client";
import React, {useEffect} from 'react';
import {Badge, Button, Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Prism from "prismjs";

const Badges = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);


    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <h4 className="main-title">Badges</h4>

                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
									<span>
									  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
									</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Badges</a>
                            </li>
                        </ul>

                    </Col>

                </Row>

                <Row>
                    <Col sm={12} xl={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5> Basic Badges</h5>
                                <a data-bs-toggle="collapse" href="#basicbadgesExample" aria-expanded="false"
                                   aria-controls="basicbadgesExample">
                                    <i className="ti ti-code source" data-source="basicbadges"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-2 flex-wrap">
                                    <Badge color="primary">Primary</Badge>{' '}
                                    <Badge color="secondary">Secondary</Badge>{' '}
                                    <Badge color="success">Success</Badge>{' '}
                                    <Badge color="danger">Danger</Badge>{' '}
                                    <Badge color="warning">Warning</Badge>{' '}
                                    <Badge color="info">Info</Badge>{' '}
                                    <Badge color="light">Light</Badge>{' '}
                                    <Badge color="dark">Dark</Badge>
                                </div>

                                <pre className="basicbadges collapse mt-3" id="basicbadgesExample">
                                  <code className="language-html">
{`
<span class="badge text-bg-primary">...</span>
<span class="badge text-bg-secondary">...</span>
<span class="badge text-bg-success">...</span>
<span class="badge text-bg-danger">...</span>
<span class="badge text-bg-warning">...</span>
<span class="badge text-bg-info">...</span>
<span class="badge text-bg-light">...</span>
<span class="badge text-bg-dark">...</span>
`}
                                  </code>
                              </pre>

                            </CardBody>

                        </Card>
                    </Col>
                    <Col sm={12} xl={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5> Outline Badges</h5>
                                <a data-bs-toggle="collapse" href="#outlinebadgeexample" aria-expanded="false"
                                   aria-controls="outlinebadgeexample">
                                    <i className="ti ti-code source" data-source="outlinebadge"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-2 flex-wrap">
                                    <span className="badge text-outline-primary">Primary</span>
                                    <span className="badge text-outline-secondary">Secondary</span>
                                    <span className="badge text-outline-success">Success</span>
                                    <span className="badge text-outline-danger">Danger</span>
                                    <span className="badge text-outline-warning">Warning</span>
                                    <span className="badge text-outline-info">Info</span>
                                    <span className="badge text-outline-dark">Dark</span>
                                </div>

                                <pre className="outlinebadge collapse mt-3" id="outlinebadgeexample">
                                  <code className="language-html">
{`
 <span class="badge text-outline-primary">...</span>
 <span class="badge text-outline-secondary">...</span>
 <span class="badge text-outline-success">...</span>
 <span class="badge text-outline-danger">...</span>
 <span class="badge text-outline-warning">...</span>
 <span class="badge text-outline-info">...</span>
 <span class="badge text-outline-dark">...</span>
`}
                                  </code>
                              </pre>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col sm={12} xl={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5> Light Badges</h5>
                                <a data-bs-toggle="collapse" href="#lightbadgeExample" aria-expanded="false"
                                   aria-controls="lightbadgeExample">
                                    <i className="ti ti-code source" data-source="lightborder"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-2 flex-wrap">
                                    <span className="badge text-light-primary"> <i className="ti ti-download me-1"></i>Primary</span>
                                    <span className="badge text-light-secondary">Secondary</span>
                                    <span className="badge text-light-success">Success</span>
                                    <span className="badge text-light-danger">Danger</span>
                                    <span className="badge text-light-warning">Warning</span>
                                    <span className="badge text-light-info">Info</span>
                                    <span className="badge text-light-dark">Dark</span>
                                </div>

                                <pre className="lightborder collapse mt-3" id="lightbadgeExample">
                                  <code className="language-html">
{`
  <span class="badge text-light-primary"> <i class="ti ti-download me-1"></i>...</span>
  <span class="badge text-light-secondary">...</span>
  <span class="badge text-light-success">...</span>
  <span class="badge text-light-danger">...</span>
  <span class="badge text-light-warning">...</span>
  <span class="badge text-light-info">...</span>
  <span class="badge text-light-dark">...</span>
`}
                                  </code>
                              </pre>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col sm={12} xl={6}>
                        <Card className="equal-card">
                            <CardHeader className="code-header">
                                <h5 className="txt-ellipsis">Radius option on Badges</h5>
                                <a data-bs-toggle="collapse" href="#radiusbadgeExample" aria-expanded="false"
                                   aria-controls="radiusbadgeExample">
                                    <i className="ti ti-code source" data-source="radiusbadge"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-2 flex-wrap">
                                    <span className="badge text-bg-primary b-r-0">Primary</span>
                                    <span className="badge text-bg-secondary b-r-6">Secondary</span>
                                    <span className="badge text-bg-success b-r-8">Success</span>
                                    <span className="badge text-bg-danger b-r-10">Danger</span>
                                </div>
                                <pre className="radiusbadge collapse mt-3" id="radiusbadgeExample">
                                  <code className="language-html">
{`
   <span class="badge text-bg-primary b-r-0">...</span>
  <span class="badge text-bg-secondary b-r-6">...</span>
  <span class="badge text-bg-success b-r-8">...</span>
  <span class="badge text-bg-danger b-r-10">...</span>
`}
                                  </code>
                              </pre>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col sm={12} xl={6}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Badges position</h5>
                                <a data-bs-toggle="collapse" href="#badgepositiontExample" aria-expanded="false"
                                   aria-controls="badgepositiontExample">
                                    <i className="ti ti-code source" data-source="badgeposition"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-3 flex-wrap">
                                    <Button type="button" className="btn btn-outline-danger position-relative">
                                        Offline
                                        <span
                                            className="position-absolute top-0 start-0 translate-middle p-1 bg-danger border border-light rounded-circle">
                                          <span className="visually-hidden">Offline</span>
                                        </span>
                                    </Button>
                                    <Button type="button" className="btn btn-outline-warning position-relative">
                                        Busy
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle p-1 bg-warning border border-light rounded-circle">
                                          <span className="visually-hidden">Busy</span>
                                        </span>
                                    </Button>
                                    <Button type="button" className="btn btn-outline-success position-relative">
                                        Online
                                        <span
                                            className="position-absolute top-100 start-0 translate-middle p-1 bg-success border border-light rounded-circle">
                                          <span className="visually-hidden">Online</span>
                                        </span>
                                    </Button>
                                    <Button type="button" className="btn btn-outline-secondary position-relative">
                                        Disable
                                        <span
                                            className="position-absolute top-100 start-100 translate-middle p-1 bg-secondary border border-light rounded-circle">
                                          <span className="visually-hidden">Disable</span>
                                        </span>
                                    </Button>
                                </div>
                                <pre className="badgeposition collapse mt-3" id="badgepositiontExample">
                                  <code className="language-html">
{`
 <span class="badge text-outline-primary">...</span>
 <span class="badge text-outline-secondary">...</span>
 <span class="badge text-outline-success">...</span>
 <span class="badge text-outline-danger">...</span>
 <span class="badge text-outline-warning">...</span>
 <span class="badge text-outline-info">...</span>
 <span class="badge text-outline-dark">...</span>
`}
                                  </code>
                              </pre>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col sm={12} xl={6}>
                        <Card className="equal-card">
                            <CardHeader className="code-header">
                                <h5>Icon's badges</h5>
                                <a data-bs-toggle="collapse" href="#iconbadgeExample" aria-expanded="false"
                                   aria-controls="iconbadgeExample">
                                    <i className="ti ti-code source" data-source="iconbadge"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-3 flex-wrap">
                                    <a href="#" className="position-relative bg-light-primary px-2 py-1 b-r-10">
                                        <i className="ti ti-shopping-cart f-s-22"></i>
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle p-1 bg-primary rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast"></span>
                                    </a>
                                    <a href="#" className="position-relative bg-light-secondary px-2 py-1 b-r-10">
                                        <i className="ti ti-line-dashed f-s-22"></i>
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle p-1 bg-secondary rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast"></span>
                                    </a>
                                    <a href="#" className="position-relative bg-light-success px-2 py-1 b-r-10">
                                        <i className="ti ti-speakerphone f-s-22"></i>
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle p-1 bg-success rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast"></span>
                                    </a>
                                    <a href="#" className="position-relative bg-light-danger px-2 py-1 b-r-10">
                                        <i className="ti ti-mail f-s-22"></i>
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle p-1 bg-danger rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast"></span>
                                    </a>
                                    <a href="#" className="position-relative bg-light-dark px-2 py-1 b-r-10">
                                        <i className="ti ti-moon-filled f-s-22"></i>
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle p-1 bg-dark rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast"></span>
                                    </a>
                                </div>
                                <pre className="iconbadge collapse mt-3" id="iconbadgeExample">
                                  <code className="language-html">
{`
 <span class="badge text-outline-primary">...</span>
 <span class="badge text-outline-secondary">...</span>
 <span class="badge text-outline-success">...</span>
 <span class="badge text-outline-danger">...</span>
 <span class="badge text-outline-warning">...</span>
 <span class="badge text-outline-info">...</span>
 <span class="badge text-outline-dark">...</span>
`}
                                  </code>
                              </pre>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col xl={12}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Badges with button</h5>
                                <a data-bs-toggle="collapse" href="#bagdeWithButtonExample" aria-expanded="false"
                                   aria-controls="bagdeWithButtonExample">
                                    <i className="ti ti-code source" data-source="badgewithbtn"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex gap-4 flex-wrap">
                                    <button type="button" className="btn btn-light-primary">
                                        Notifications <span
                                        className="badge text-bg-primary badge-notification">4</span>
                                    </button>
                                    <button type="button" className="btn btn-light-secondary position-relative">
                                        Disable
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle p-2 bg-secondary border border-light rounded-circle">
                                          <span className="visually-hidden">Disable</span>
                                        </span>
                                    </button>
                                    <button type="button" className="btn btn-light-success position-relative">
                                        Inbox
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success badge-notification">
                                          99+
                                          <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                    <button type="button" className="btn btn-light-danger position-relative">
                                        Unread
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-notification">
                                          <i className="ti ti-bell-ringing"></i>
                                        </span>
                                    </button>
                                    <button type="button" className="btn btn-outline-warning position-relative">
                                        Inbox &nbsp;
                                        <span className="badge rounded-pill bg-warning badge-notification">
                                          99+
                                          <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                    <button type="button" className="btn btn-light-info position-relative f-s-14">
                                        <b>50%</b> Off
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle bg-info b-r-6 badge-notification p-1 f-s-12">
                                          New
                                        </span>
                                    </button>
                                    <button type="button" className="btn btn-light-dark position-relative">
                                        <b> 1 </b> missed call
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle p-2 bg-dark border border-light rounded-circle animate__animated animate__fadeIn animate__infinite animate__slower">
                                          <span className="visually-hidden">Busy</span>
                                        </span>
                                    </button>
                                </div>
                                <pre className="badgewithbtn collapse mt-3" id="bagdeWithButtonExample">
                                  <code className="language-html">
{`
 <button type="button" class="btn btn-light-primary">
    Notifications <span class="badge text-bg-primary badge-notification">4</span>
</button>

<button type="button" class="btn btn-light-secondary position-relative">
    Disable
    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-secondary border border-light rounded-circle">
        <span class="visually-hidden">Disable</span>
    </span>
</button>

<button type="button" class="btn btn-light-success position-relative">
    Inbox
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success badge-notification">
        99+
        <span class="visually-hidden">unread messages</span>
    </span>
</button>

<button type="button" class="btn btn-light-danger position-relative">
    Unread
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-notification">
        <i class="ti ti-bell-ringing"></i>
    </span>
</button>

<button type="button" class="btn btn-outline-warning position-relative">
    Inbox
    <span class="badge rounded-pill bg-warning badge-notification">
        99+
        <span class="visually-hidden">unread messages</span>
    </span>
</button>

<button type="button" class="btn btn-light-info position-relative f-s-14">
    <b>50%</b> Off
    <span class="position-absolute top-0 start-100 translate-middle bg-info b-r-6 badge-notification p-1 f-s-12">
        New
    </span>
</button>

<button type="button" class="btn btn-light-dark position-relative">
    <b>1</b> missed call
    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-dark border border-light rounded-circle animate__animated animate__fadeIn animate__infinite animate__slower">
        <span class="visually-hidden">Busy</span>
    </span>
</button>
`}
                                  </code>
                              </pre>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col xl={12}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Radius Badges</h5>
                                <a data-bs-toggle="collapse" href="#radiousbadgeExample" aria-expanded="false"
                                   aria-controls="radiousbadgeExample">
                                    <i className="ti ti-code source" data-source="radiusbadge"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <div>
                                    <h1 className="mb-3">Heading <span className="badge bg-secondary">New</span></h1>
                                    <h2 className="mb-3">Heading <span className="badge bg-secondary">New</span></h2>
                                    <h3 className="mb-3">Heading <span className="badge bg-secondary">New</span></h3>
                                    <h4 className="mb-3">Heading <span className="badge bg-secondary">New</span></h4>
                                    <h5 className="mb-3">Heading <span className="badge bg-secondary">New</span></h5>
                                    <h6 className="mb-3">Heading <span className="badge bg-secondary">New</span></h6>
                                </div>

                                <pre className="radiusbadge collapse mt-3" id="radiousbadgeExample">
                                  <code className="language-html">
{`
 <h1 class="mb-3">Heading <span class="badge bg-secondary">New</span></h1>
 <h2 class="mb-3">Heading <span class="badge bg-secondary">New</span></h2>
 <h3 class="mb-3">Heading <span class="badge bg-secondary">New</span></h3>
 <h4 class="mb-3">Heading <span class="badge bg-secondary">New</span></h4>
 <h5 class="mb-3">Heading <span class="badge bg-secondary">New</span></h5>
 <h6 class="mb-3">Heading <span class="badge bg-secondary">New</span></h6>
`}
                                  </code>
                              </pre>
                            </CardBody>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Badges;