import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const ComingSoon = () => {
    return (
        <>
            <div class="container-fluid">

                <div class="row">
                    <div class="col-12 p-0">
                        <div class="coming-soon">
                            <div class="coundown-timmer p-5">
                                <div class="content">
                                    <h2 class="text-dark">Ra-admin Coming Soon</h2>
                                    <p class="font-coming-p">
                                        Our Website Under Construction, We Are Working on it, We Will Ready to Lunch it
                                        After
                                    </p>
                                </div>
                                <div class="timmer-content">
                                    <div class="time">
                                        <span id="days" class="numbers">00</span>
                                        <span>Days</span>
                                    </div>
                                    <div class="time">
                                        <span id="hours" class="numbers">00</span>
                                        <span>Hours</span>
                                    </div>
                                    <div class="time">
                                        <span id="minutes" class="numbers">00</span>
                                        <span>Minutes</span>
                                    </div>
                                    <div class="time">
                                        <span id="seconds" class="numbers">00</span>
                                        <span>Second</span>
                                    </div>
                                </div>

                                <div class="app-form mb-3 mt-4">
                                    <input type="email"
                                           className="form-control form-control-lg m-auto text-center coming-soon-input"
                                           placeholder="Enter an Email" id="username"/>

                                </div>
                                <a className="btn btn-primary btn-xl" href="coming_soon.html">Subscribe Now</a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ComingSoon;
