import React, {useState} from 'react';
import {
    Input,
    InputGroup,
    InputGroupText,
} from 'reactstrap';
import {emaildraft, emails, emailsent, emailstarred, emailstrash} from "@/Data/AppsData/EmaliData";
import Link from "next/link";

const EmailContent = ({active}) => {


    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center">

                        <div className="d-lg-none">
                            <a className="me-3 toggle-btn" role="button">
                                <i className="ti ti-align-justified"></i>
                            </a>
                        </div>


                        <div className="flex-grow-1">
                            <InputGroup className="b-r-search">
                                <InputGroupText className="bg-primary border-0">
                                    <i className="ti ti-search"></i>
                                </InputGroupText>
                                <Input type="text" placeholder="Search..."/>
                            </InputGroup>
                        </div>


                        <div>
                            <div className="btn-group dropdown-icon-none">
                                <a className="icon-btn dropdown-toggle p-2" role="button" data-bs-toggle="dropdown"
                                   data-bs-auto-close="true" aria-expanded="false">
                                    <i className="ti ti-dots-vertical"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><i className="ti ti-album"></i> Primary </a>
                                    </li>
                                    <li><a className="dropdown-item" href="#"><i className="ti ti-tag"></i> Promotions </a>
                                    </li>
                                    <li><a className="dropdown-item" href="#"><i className="ti ti-users"></i> Social </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="content-wrapper mt-3">
                        <div className={`tabs-content ${active == "tab1" ? "active" : ""}`}>
                            <div className="mail-table">
                                {emails.map((email) => (
                                    <div key={email.id}
                                         className="mail-box d-flex align-items-center p-3 border-bottom">
                                        <Input type="checkbox" id={`checkbox-${email.id}`} className="form-check-input"
                                               value={`option${email.id}`}/>


                                        <span className="ms-2 me-2">
                                             <i className="ti ti-star text-warning star-icon fs-5"></i>
                                        </span>


                                        <div className="flex-grow-1 position-relative d-flex">

                                            <div
                                                className="mail-img h-35 w-35 b-r-50 overflow-hidden text-bg-primary position-absolute mt-1">
                                                <img src={email.avatar} alt={email.name} className="img-fluid"/>
                                            </div>
                                            <div className="mg-s-45 ms-5">
                                                <h6 className="mb-0 f-w-600">{email.name}</h6>
                                                <Link href="/apps/email-page/read_email">
                                                    <span className="f-s-13 text-secondary">{email.content}</span>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Date and Badge */}
                                        <div className="text-center">
                                            <p className="mb-1">{email.date}</p>
                                            <span className={email.badgeClass}>{email.badge}</span>
                                        </div>

                                        {/* Dropdown Menu */}
                                        <div className="ms-3">
                                            <div className="btn-group dropdown-icon-none">
                                                <button className="btn border-0 icon-btn b-r-4 dropdown-toggle"
                                                        type="button"
                                                        data-bs-toggle="dropdown" data-bs-auto-close="true"
                                                        aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#"><i
                                                        className="ti ti-archive"></i> Archive </a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#"><i
                                                        className="ti ti-trash"></i> Delete </a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#"><i
                                                        className="ti ti-mail-opened"></i> Read
                                                        Mali </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`tabs-content ${active == "tab2" ? "active" : ""}`}>
                            <div className="mail-table">
                                {emailsent.map((email) => (
                                    <div key={email.id}
                                         className="mail-box d-flex align-items-center p-3 border-bottom">
                                        <Input type="checkbox" id={`checkbox-${email.id}`} className="form-check-input"
                                               value={`option${email.id}`}/>

                                        <span className="ms-2 me-2">
                                            <i className="ti ti-star text-warning star-icon fs-5"></i>
                                        </span>

                                        <div className="flex-grow-1 position-relative d-flex">

                                            <div
                                                className="mail-img h-35 w-35 b-r-50 overflow-hidden text-bg-primary position-absolute mt-1">
                                                <img src={email.avatar} alt={email.name} className="img-fluid"/>
                                            </div>
                                            <div className="mg-s-45 ms-5">
                                                <h6 className="mb-0 f-w-600">{email.name}</h6>
                                                <Link href="/apps/email-page/read_email">
                                                    <span className="f-s-13 text-secondary">{email.content}</span>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <p className="mb-1">{email.date}</p>
                                            <span className={email.badgeClass}>{email.badge}</span>
                                        </div>

                                        <div className="ms-3">
                                            <div className="btn-group dropdown-icon-none">
                                                <button className="btn border-0 icon-btn b-r-4 dropdown-toggle"
                                                        type="button"
                                                        data-bs-toggle="dropdown" data-bs-auto-close="true"
                                                        aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#"><i
                                                        className="ti ti-archive"></i> Archive </a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#"><i
                                                        className="ti ti-trash"></i> Delete </a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#"><i
                                                        className="ti ti-mail-opened"></i> Read
                                                        Mali </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`tabs-content ${active == "tab3" ? "active" : ""}`}>

                            <div className="mail-table">
                                {emaildraft.map((email) => (
                                    <div key={email.id}
                                         className="mail-box d-flex align-items-center p-3 border-bottom">
                                        <Input type="checkbox" id={`checkbox-${email.id}`} className="form-check-input"
                                               value={`option${email.id}`}/>


                                        <span className="ms-2 me-2">
                                             <i className="ti ti-star text-warning star-icon fs-5"></i>
                                        </span>


                                        <div className="flex-grow-1 position-relative d-flex">

                                            <div
                                                className="mail-img h-35 w-35 b-r-50 overflow-hidden text-bg-primary position-absolute mt-1">
                                                <img src={email.avatar} alt={email.name} className="img-fluid"/>
                                            </div>
                                            <div className="mg-s-45 ms-5">
                                                <h6 className="mb-0 f-w-600">{email.name}</h6>
                                                <Link href="/apps/email-page/read_email">
                                                    <span className="f-s-13 text-secondary">{email.content}</span>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Date and Badge */}
                                        <div className="text-center">
                                            <p className="mb-1">{email.date}</p>
                                            <span className={email.badgeClass}>{email.badge}</span>
                                        </div>

                                        {/* Dropdown Menu */}
                                        <div className="ms-3">
                                            <div className="btn-group dropdown-icon-none">
                                                <button className="btn border-0 icon-btn b-r-4 dropdown-toggle"
                                                        type="button"
                                                        data-bs-toggle="dropdown" data-bs-auto-close="true"
                                                        aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#"><i
                                                        className="ti ti-archive"></i> Archive </a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#"><i
                                                        className="ti ti-trash"></i> Delete </a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#"><i
                                                        className="ti ti-mail-opened"></i> Read
                                                        Mali </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`tabs-content ${active == "tab4" ? "active" : ""}`}>
                            <div className="mail-table">
                                {emailstarred.map((email) => (
                                    <div key={email.id}
                                         className="mail-box d-flex align-items-center p-3 border-bottom">
                                        <Input type="checkbox" id={`checkbox-${email.id}`} className="form-check-input"
                                               value={`option${email.id}`}/>

                                        <span className="ms-2 me-2">
                                              <i className="ti ti-star text-warning star-icon fs-5"></i>
                                        </span>


                                        <div className="flex-grow-1 position-relative d-flex">

                                            <div
                                                className="mail-img h-35 w-35 b-r-50 overflow-hidden text-bg-primary position-absolute mt-1">
                                                <img src={email.avatar} alt={email.name} className="img-fluid"/>
                                            </div>
                                            <div className="mg-s-45 ms-5">
                                                <h6 className="mb-0 f-w-600">{email.name}</h6>
                                                <Link href="/apps/email-page/read_email">
                                                    <span className="f-s-13 text-secondary">{email.content}</span>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Date and Badge */}
                                        <div className="text-center">
                                            <p className="mb-1">{email.date}</p>
                                            <span className={email.badgeClass}>{email.badge}</span>
                                        </div>

                                        {/* Dropdown Menu */}
                                        <div className="ms-3">
                                            <div className="btn-group dropdown-icon-none">
                                                <button className="btn border-0 icon-btn b-r-4 dropdown-toggle"
                                                        type="button"
                                                        data-bs-toggle="dropdown" data-bs-auto-close="true"
                                                        aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#"><i
                                                        className="ti ti-archive"></i> Archive </a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#"><i
                                                        className="ti ti-trash"></i> Delete </a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#"><i
                                                        className="ti ti-mail-opened"></i> Read
                                                        Mali </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`tabs-content ${active == "tab5" ? "active" : ""}`}>
                            <div className="mail-table d-flex align-items-center justify-content-center">
                                <div className="spam-box text-center">
                                    <img src="/images/icons/spam..png" alt=""/>
                                    <h5>No spam here</h5>
                                    <p>The MUA formats the message in email format and uses the submission a
                                        profile of the <br/>
                                        Simple Mail Transfer Protocol (SMTP), to send the message !</p>
                                </div>
                            </div>
                        </div>


                        <div className={`tabs-content ${active == "tab6" ? "active" : ""}`}>
                            <div className="mail-table">
                                {emailstrash.map((email) => (
                                    <div key={email.id}
                                         className="mail-box d-flex align-items-center p-3 border-bottom">
                                        <Input type="checkbox" id={`checkbox-${email.id}`} className="form-check-input"
                                               value={`option${email.id}`}/>


                                        <span className="ms-2 me-2">
                                             <i className="ti ti-star text-warning star-icon fs-5"></i>
                                        </span>


                                        <div className="flex-grow-1 position-relative d-flex">

                                            <div
                                                className="mail-img h-35 w-35 b-r-50 overflow-hidden text-bg-primary position-absolute mt-1">
                                                <img src={email.avatar} alt={email.name} className="img-fluid"/>
                                            </div>
                                            <div className="mg-s-45 ms-5">
                                                <h6 className="mb-0 f-w-600">{email.name}</h6>
                                                <Link href="/apps/email-page/read_email">
                                                    <span className="f-s-13 text-secondary">{email.content}</span>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Date and Badge */}
                                        <div className="text-center">
                                            <p className="mb-1">{email.date}</p>
                                            <span className={email.badgeClass}>{email.badge}</span>
                                        </div>

                                        {/* Dropdown Menu */}
                                        <div className="ms-3">
                                            <div className="btn-group dropdown-icon-none">
                                                <button className="btn border-0 icon-btn b-r-4 dropdown-toggle"
                                                        type="button"
                                                        data-bs-toggle="dropdown" data-bs-auto-close="true"
                                                        aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#"><i
                                                        className="ti ti-archive"></i> Archive </a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#"><i
                                                        className="ti ti-trash"></i> Delete </a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#"><i
                                                        className="ti ti-mail-opened"></i> Read
                                                        Mali </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};

export default EmailContent;