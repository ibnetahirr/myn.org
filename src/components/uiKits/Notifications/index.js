"use client";
import React, {useEffect, useState} from 'react';
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row, Table} from "reactstrap";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Notifications = () => {
    const [open,setOpen] = useState(false);

    const handleToast = (event) => {
        const ele = event.currentTarget;
        document.querySelector(`.${ele.id}`).classList.remove("d-none");
        setTimeout(() => {
            document.querySelector(`.${ele.id}`).classList.add("d-none");
        }, 5000);
    };

    const toastClose = () => {
        document.querySelector(".app-toast").classList.add("d-block");
    };


    useEffect(() => {
        const closeBtn = document.querySelector(".toast-close");
        closeBtn && closeBtn.addEventListener("click", toastClose);

        Prism.highlightAll();
    }, []);

    const showToast = (options) => {
        Toastify({
            text: options.text,
            duration: options.duration || 3000,
            gravity: options.gravity || "top",
            position: options.position || "center",
            style: {
                background: options.background,
            },
        }).showToast();
    };

    return (
        <>
            <Container fluid>

                <Row>
                    <Col>
                        <h4 className="main-title">Notifications</h4>

                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
										<span>
										  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
										</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Notifications</a>
                            </li>
                        </ul>

                    </Col>

                </Row>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Bootstrap Toasts</h5>
                                <a data-bs-toggle="collapse" href="#Notification1" aria-expanded="false"
                                   aria-controls="Notification1">
                                    <i className="ti ti-code source" data-source="Notifi1"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col lg={4} className="mb-4 mb-lg-0">
                                        <h6 className="mb-3">Default Toast</h6>
                                        <div className="toast d-block b-1-primary bg-light-primary" role="alert"
                                             aria-live="assertive" aria-atomic="true">
                                            <div className="toast-header b-b-1-primary bg-light-primary">
                                                <img src="/images/logo/3.png"
                                                     className="rounded me-2 h-30 w-30 b-r-4 " alt=""/>
                                                <strong className="me-auto">Ra-admin</strong>
                                                <div className="bg-primary pt-1 ms-2 b-r-8">
                                                    <button type="button" className="btn-close m-0 p-2 pt-0 mb-1"
                                                            data-bs-dismiss="toast" aria-label="Close"></button>
                                                </div>
                                            </div>
                                            <div className="toast-body border-primary border-opacity-25">
                                                Hello, world! This is a toast message.
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={4} className="mb-4 mb-lg-0">
                                        <h6 className="mb-3">Custom Content Toast</h6>
                                        <div className="toast custom-content-toast d-block" role="alert"
                                             aria-live="assertive"
                                             aria-atomic="true">
                                            <div className="toast-body">
                                                Hello, world! This is a toast message.
                                                <div className="mt-2 pt-2 border-top">
                                                    <button type="button" className="btn btn-primary ">Take action
                                                    </button>{" "}
                                                    <button type="button" className="btn btn-secondary "
                                                            data-bs-dismiss="toast">Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>


                                    <Col lg={4} className="mb-4 mb-lg-0">
                                        <h6 className="mb-3">Color Schemes Toast</h6>
                                        <div className="toast d-block align-items-center bg-primary border-0 mb-3"
                                             role="alert"
                                             aria-live="assertive" aria-atomic="true">
                                            <div className="d-flex">
                                                <div className="toast-body">
                                                    Hello, world! This is a toast message.
                                                </div>
                                                <button type="button" className="btn-close btn-close-white me-2 m-auto"
                                                        data-bs-dismiss="toast"
                                                        aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="toast d-block align-items-center bg-secondary border-0"
                                             role="alert"
                                             aria-live="assertive" aria-atomic="true">
                                            <div className="d-flex">
                                                <div className="toast-body">
                                                    Hello, world! This is a toast message.
                                                </div>
                                                <button type="button" className="btn-close btn-close-white me-2 m-auto"
                                                        data-bs-dismiss="toast"
                                                        aria-label="Close"></button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>

                            <pre className="Notifi1 collapse mt-3" id="Notification1">
                    <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Bootstrap Toasts</h5>
  </div>
  <div class="card-body">
    <div class="row">
      <div class="col-md-4">
        <h6 class="mb-3">Default Toast</h6>
        <div class="toast d-block border-primary border-opacity-25 bg-light-primary" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header border-primary border-opacity-25 bg-light-primary">
            <img src="/images/logo/3.png" class="rounded me-2 h-30 w-30 b-r-4 " alt="">
            <strong class="me-auto">Ra-admin</strong>
            <small>11 mins ago</small>
            <div class="bg-primary pt-1 ms-2 b-r-8">
              <button type="button" class="btn-close m-0 p-2 pt-0 mb-1" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
          </div>
          <div class="toast-body border-primary border-opacity-25">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h6 class="mb-3">Custom Content Toast</h6>
        <div class="toast d-block" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-body">
            Hello, world! This is a toast message.
            <div class="mt-2 pt-2 border-top">
              <button type="button" class="btn btn-primary ">Take action</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="toast">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h6 class="mb-3">Color Schemes Toast</h6>
        <div class="toast d-block align-items-center bg-primary border-0 mb-3" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
            <div class="toast-body">
              Hello, world! This is a toast message.
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
        <div class="toast d-block align-items-center bg-secondary border-0" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
            <div class="toast-body">
              Hello, world! This is a toast message.
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}

                    </code>
                  </pre>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Placement Toasts</h5>
                                <a data-bs-toggle="collapse" href="#Notification2" aria-expanded="false"
                                   aria-controls="Notification2">
                                    <i className="ti ti-code source" data-source="Notifi2"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <button onClick={() => setOpen(!open)} type="button" className="btn btn-light-primary" id="toastbtn">Show Toast
                                </button>
                                {
                                    open && (
                                        <div
                                            className="toast d-block  mt-3 bg-light-primary border-primary border-opacity-25 b-r-4">
                                            <div className="toast-header bg-light-primary border-primary border-opacity-25">
                                                <strong className="me-auto">Toast Header</strong>
                                                <div className="bg-primary d-flex-center b-r-8">
                                                    <button type="button" className="btn-close m-0 p-2"
                                                            data-bs-dismiss="toast"></button>
                                                </div>
                                            </div>
                                            <div className="toast-body">
                                                <p>Some text inside the toast body</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </CardBody>

                            <pre className="Notifi2 collapse mt-3" id="Notification2">
                    <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Placement Toasts</h5>
  </div>
  <div class="card-body">
    <button type="button" class="btn btn-light-primary" id="toastbtn">Show Toast</button>
    <div class="toast toastbtn mt-3 bg-light-primary border-primary border-opacity-25 b-r-4">
      <div class="toast-header bg-light-primary border-primary border-opacity-25">
        <strong class="me-auto">Toast Header</strong>
        <div class="bg-primary d-flex-center b-r-8">
          <button type="button" class="btn-close m-0 p-2" data-bs-dismiss="toast"></button>
        </div>
      </div>
      <div class="toast-body">
        <p>Some text inside the toast body</p>
      </div>
    </div>
  </div>
</div>`}

                    </code>
                  </pre>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Position Notification</h5>
                                <a data-bs-toggle="collapse" href="#Notification3" aria-expanded="false"
                                   aria-controls="Notification3">
                                    <i className="ti ti-code source" data-source="Notifi3"></i>
                                </a>
                                <p>It is Very Easy to Customize and it uses in website application.</p>
                            </CardHeader>
                            <CardBody>
                                <div className="app-toast-button d-flex flex-wrap gap-2">
                                    <button
                                        className={'btn btn-light-primary'}
                                        id="new-toast"
                                        onClick={() =>
                                            showToast({
                                                text: "Welcome Back! This is a Toast Notification",
                                                position: "center",
                                                background: "rgb(var(--primary),1)",
                                            })
                                        }
                                    >
                                        New Toast
                                    </button>

                                    <button
                                        className={'btn btn-light-secondary'}
                                        id="center-toast"
                                        onClick={() =>
                                            showToast({
                                                text: "Welcome Back! This is a Toast Notification",
                                                position: "center",
                                                background: "rgb(var(--secondary),1)",
                                            })
                                        }
                                    >
                                        Center Toast
                                    </button>

                                    <button
                                        className={'btn btn-light-success'}
                                        id="left-toast"
                                        onClick={() =>
                                            showToast({
                                                text: "Welcome Back! This is a Toast Notification",
                                                position: "left",
                                                background: "rgb(var(--success),1)",
                                            })
                                        }
                                    >
                                        Left Toast
                                    </button>

                                    <button
                                        className={'btn btn-light-info'}
                                        id="right-toast"
                                        onClick={() =>
                                            showToast({
                                                text: "Welcome Back! This is a Toast Notification",
                                                position: "right",
                                                background: "rgb(var(--info),1)",
                                            })
                                        }
                                    >
                                        Right Toast
                                    </button>

                                    <button
                                        className={'btn btn-light-warning'}
                                        id="bottom-toast"
                                        onClick={() =>
                                            showToast({
                                                text: "Welcome Back! This is a Toast Notification",
                                                gravity: "bottom",
                                                position: "center",
                                                background: "rgb(var(--warning),1)",
                                            })
                                        }
                                    >
                                        Bottom Toast
                                    </button>
                                </div>
                            </CardBody>

                            <pre className="Notifi3 collapse mt-3" id="Notification3">
                    <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Position Notification</h5>
    <p>It is Very Easy to Customize and it uses in website application.</p>
  </div>
  <div class="card-body">
    <div class="app-toast-button d-flex flex-wrap gap-2">
      <button class="btn btn-light-primary toast_top" id="new-toast">Top</button>
      <button class="btn btn-light-secondary toast_center" id="center-toast">Center</button>
      <button class="btn btn-light-success toast_left" id="left-toast">Left</button>
      <button class="btn btn-light-info" id="right-toast">Right</button>
      <button class="btn btn-light-warning" id="bottom-toast">Bottom</button>
    </div>
  </div>
</div>`}

                    </code>
                  </pre>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className="code-header">
                                <h5>Color Notification</h5>
                                <a data-bs-toggle="collapse" href="#Notification4" aria-expanded="false"
                                   aria-controls="Notification4">
                                    <i className="ti ti-code source" data-source="Notifi4"></i>
                                </a>
                                <p>It is Very Easy to Customize and it uses in website application.</p>
                            </CardHeader>
                            <CardBody>
                                <div className="app-toast-button">
                                    <div className="d-flex gap-2 flex-wrap">
                                        <button
                                            id="app-toast-primary"
                                            className="btn btn-light-primary toast-primary"
                                            onClick={handleToast}
                                        >
                                            Primary
                                        </button>
                                        <button
                                            id="app-toast-secondary"
                                            className="btn btn-light-secondary toast-secondary"
                                            onClick={handleToast}
                                        >
                                            Primary
                                        </button>
                                        <button
                                            id="app-toast-success"
                                            className="btn btn-light-success toast-success"
                                            onClick={handleToast}
                                        >
                                            Primary
                                        </button>
                                        <button
                                            id="app-toast-danger"
                                            className="btn btn-light-danger toast-danger"
                                            onClick={handleToast}
                                        >
                                            Primary
                                        </button>
                                        <button
                                            id="app-toast-warning"
                                            className="btn btn-light-warning toast-warning"
                                            onClick={handleToast}
                                        >
                                            Primary
                                        </button>
                                        <button
                                            id="app-toast-info"
                                            className="btn btn-light-info toast-info"
                                            onClick={handleToast}
                                        >
                                            Primary
                                        </button>
                                        <button
                                            id="app-toast-light"
                                            className="btn btn-light-light toast-light"
                                            onClick={handleToast}
                                        >
                                            Primary
                                        </button>
                                        <button
                                            id="app-toast-dark"
                                            className="btn btn-light-dark toast-dark"
                                            onClick={handleToast}
                                        >
                                            Primary
                                        </button>


                                    </div>

                                    <div className="app-color-toast app-toast-primary d-none">
                                        <div className="toast-item">
                                            <div className="toast-title text-primary">
                                                <i className="ti ti-download f-s-22"></i> This is a Primary toast
                                                message.
                                            </div>
                                            <div className="toast-line"></div>
                                        </div>
                                        <div className="toast-close"><i className="fa fa-close text-primary"></i></div>
                                    </div>
                                    <div className="app-color-toast app-toast-secondary d-none">
                                        <div className="toast-item">
                                            <div className="toast-icon text-secondary"></div>
                                            <div className="toast-title text-secondary">
                                                <i className="ti ti-butterfly f-s-22"></i>This is a Secondary toast
                                                message.
                                            </div>
                                            <div className="toast-line"></div>
                                        </div>
                                        <div className="toast-close"><i className="fa fa-close text-secondary"></i>
                                        </div>
                                    </div>
                                    <div className="app-color-toast app-toast-success d-none">
                                        <div className="toast-item">
                                            <div className="toast-icon text-success"></div>
                                            <div className="toast-title text-success">
                                                <i className="ti ti-award f-s-22"></i> This is a success toast message.
                                            </div>
                                            <div className="toast-line"></div>
                                        </div>
                                        <div className="toast-close"><i className="fa fa-close text-success"></i></div>
                                    </div>
                                    <div className="app-color-toast app-toast-danger d-none">
                                        <div className="toast-item">
                                            <div className="toast-title text-danger">
                                                <i className="ti ti-power f-s-22"></i> This is a Danger toast message.
                                            </div>
                                            <div className="toast-line"></div>
                                        </div>
                                        <div className="toast-close"><i className="fa fa-close text-danger"></i></div>
                                    </div>
                                    <div className="app-color-toast app-toast-warning d-none">
                                        <div className="toast-item">
                                            <div className="toast-title text-warning">
                                                <i className="ti ti-alert-triangle f-s-22"></i> This is a Warning toast
                                                message.
                                            </div>
                                            <div className="toast-line"></div>
                                        </div>
                                        <div className="toast-close"><i className="fa fa-close text-warning"></i></div>
                                    </div>
                                    <div className="app-color-toast app-toast-info d-none">
                                        <div className="toast-item">
                                            <div className="toast-title text-info">
                                                <i className="ti ti-inbox f-s-22"></i> This is a Info toast message.
                                            </div>
                                            <div className="toast-line"></div>
                                        </div>
                                        <div className="toast-close"><i className="fa fa-close text-info"></i></div>
                                    </div>
                                    <div className="app-color-toast app-toast-light d-none">
                                        <div className="toast-item">
                                            <div className="toast-title text-dark"><i
                                                className="ti ti-download f-s-22"></i> This is a Light
                                                toast message.
                                            </div>
                                            <div className="toast-line"></div>
                                        </div>
                                        <div className="toast-close"><i className="fa fa-close text-dark"></i></div>
                                    </div>
                                    <div className="app-color-toast app-toast-dark d-none">
                                        <div className="toast-item">
                                            <div className="toast-title text-dark">
                                                <i className="ti ti-world-download f-s-22"></i> This is a Dark toast
                                                message.
                                            </div>
                                            <div className="toast-line"></div>
                                        </div>
                                        <div className="toast-close"><i className="fa fa-close text-dark"></i></div>
                                    </div>
                                </div>
                            </CardBody>

                            <pre className="Notifi4 collapse mt-3" id="Notification4">
                                <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Position Notification</h5>
    <p>It is Very Easy to Customize and it uses in website application.</p>
  </div>
  <div class="card-body">
    <div class="app-toast-button">
      <div class="d-flex gap-2 flex-wrap">
        <button id="app-toast-primary" class="btn btn-light-primary toast-primary" onclick="handleToast(this)">Primary</button>
        <button id="app-toast-secondary" class="btn btn-light-secondary toast-secondary" onclick="handleToast(this)">Secondary</button>
        <button id="app-toast-success" class="btn btn-light-success toast-success" onclick="handleToast(this)">Success</button>
        <button id="app-toast-danger" class="btn btn-light-danger toast-danger" onclick="handleToast(this)">Danger</button>
        <button id="app-toast-warning" class="btn btn-light-warning toast-warning" onclick="handleToast(this)">Warning</button>
        <button id="app-toast-info" class="btn btn-light-info toast-info" onclick="handleToast(this)">Info</button>
        <button id="app-toast-light" class="btn btn-light-light toast-light" onclick="handleToast(this)">Light</button>
        <button id="app-toast-dark" class="btn btn-light-dark toast-dark" onclick="handleToast(this)">Dark</button>
      </div>
      <div class="app-color-toast app-toast-primary d-none">
        <div class="toast-item">
          <div class="toast-title text-primary">
            <i class="ti ti-download f-s-22"></i> This is a Primary toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-primary"></i></div>
      </div>
      <div class="app-color-toast app-toast-secondary d-none">
        <div class="toast-item">
          <div class="toast-icon text-secondary"></div>
          <div class="toast-title text-secondary">
            <i class="ti ti-butterfly f-s-22"></i>This is a Secondary toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-secondary"></i></div>
      </div>
      <div class="app-color-toast app-toast-success d-none">
        <div class="toast-item">
          <div class="toast-icon text-success"></div>
          <div class="toast-title text-success">
            <i class="ti ti-award f-s-22"></i> This is a success toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-success"></i></div>
      </div>
      <div class="app-color-toast app-toast-danger d-none">
        <div class="toast-item">
          <div class="toast-title text-danger">
            <i class="ti ti-power f-s-22"></i> This is a Danger toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-danger"></i></div>
      </div>
      <div class="app-color-toast app-toast-warning d-none">
        <div class="toast-item">
          <div class="toast-title text-warning">
            <i class="ti ti-alert-triangle f-s-22"></i> This is a Warning toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-warning"></i></div>
      </div>
      <div class="app-color-toast app-toast-info d-none">
        <div class="toast-item">
          <div class="toast-title text-info">
            <i class="ti ti-inbox f-s-22"></i> This is a Info toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-info"></i></div>
      </div>
      <div class="app-color-toast app-toast-light d-none">
        <div class="toast-item">
          <div class="toast-title text-dark">
            <i class="ti ti-download f-s-22"></i> This is a Light toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-dark"></i></div>
      </div>
      <div class="app-color-toast app-toast-dark d-none">
        <div class="toast-item">
          <div class="toast-title text-dark">
            <i class="ti ti-world-download f-s-22"></i> This is a Dark toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-dark"></i></div>
      </div>
    </div>
  </div>
</div>`}

                            </code>
                          </pre>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Notifications;

