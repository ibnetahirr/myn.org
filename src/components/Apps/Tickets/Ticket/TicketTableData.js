import React, {useEffect,useState} from 'react';
import {Card, CardBody, Col, Table,Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input} from "reactstrap";
import Slider from "react-slick";
import {ticketstable} from "@/Data/AppsData/Ticket";
import Link from "next/link";

const TicketTableData = () => {

    useEffect(() => {
        setTimeout(() => {
            $('#ticketdatatable').DataTable();
        }, 300);
    }, []);

    const categories = [
        { name: "Laptop issues", count: 64 },
        { name: "Card issues", count: 52 },
        { name: "Admin issues", count: 32 },
        { name: "Laptop issues", count: 20 },
    ];
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [showModal, setShowModal] = useState(false);
    const [ticket, setTicket] = useState({
        title: '',
        client: '',
        priority: '',
        status: '',
        date: '',
        dueDate: ''
    });


    const [tickets, setTickets] = useState(ticketstable);

    const handleEditTicket = (ticket) => {
        setTicket(ticket);  // Populate the form with selected ticket data
        setShowModal(true);
    };

    const handleSaveTicket = () => {
        if (!ticket.title || !ticket.client) {
            alert('Please fill out all required fields.');
            return;
        }

        const updatedTickets = tickets.map(t => t.id === ticket.id ? ticket : t);
        setTickets(updatedTickets);
        setShowModal(false); // Close the modal after saving changes

        const newTicket = {
            id: Date.now(),
            ...ticket
        };
        setTickets([...tickets, newTicket]);
    };

    const handleDeleteTicket = (id) => {
        const updatedTickets = tickets.filter(ticket => ticket.id !== id);
        setTickets(updatedTickets);
    };


    return (
        <>
            <Col lg={6}>
                <div className="card create-ticket-card">
                    <div className="card-body">
                        <div className="col-xl-12">
                            <div className="row align-items-center">
                                {/* Text Content */}
                                <div className="col-sm-7 col-12">
                                    <div className="ticket-create">
                                        <h5 className="mb-2">The Ticket Component</h5>
                                        <p className="mb-5 mt-3 text-secondary">
                                            Provide a more detailed explanation of the issue. Describe what is happening
                                            versus what should happen.
                                            If it’s a feature request, explain the desired outcome and why it's needed.
                                        </p>

                                        <button className="btn btn-primary" id="create_ticket_key" onClick={() => setShowModal(true)}>
                                            Create Ticket
                                        </button>
                                    </div>
                                </div>
                                {/* Image */}
                                <div className="col-sm-5 col-12">
                                    <img
                                        src="/images/icons/ticket.png"
                                        alt="Ticket Icon"
                                        className="img-fluid w-300 d-block m-auto"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <h5 className="ms-3 mb-2">Top Category</h5>
                <Slider {...settings} className="ticket-slider">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <div className="ticket-catagory p-3">
                                <h6 className="mb-0">{category.name}</h6>
                                <span className="badge text-light-success">{category.count}</span>
                            </div>
                        </li>
                    ))}
                </Slider>

            </Col>

            <Col xs={12}>
                <Card>
                    <CardBody className="px-0">
                        <div className="table-responsive app-scroll app-datatable-default">
                            <Table id="ticketdatatable" className="w-100 display ticket-app-table">
                                <thead>
                                <tr>
                                    <th>
                                        <div className="checkbox-wrapper">
                                            <label className="check-box m-0">
                                                <input type="checkbox" id="select-all1" />
                                                <span className="checkmark outline-secondary"></span>
                                            </label>
                                        </div>
                                    </th>
                                    <th>Id</th>
                                    <th>Agent</th>
                                    <th>Priority</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Due Date</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {tickets.map((ticket, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="checkbox-wrapper">
                                                <label className="check-box m-0">
                                                    <input type="checkbox" />
                                                    <span className="checkmark outline-secondary"></span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>{ticket.id}</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="h-30 w-30 d-flex-center b-r-50 overflow-hidden text-bg-primary me-2">
                                                    <img src="/images/avtar/1.png" alt="" className="img-fluid" />
                                                </div>
                                                {ticket.agent}
                                            </div>
                                        </td>
                                        <td>
                                                              <span  className="badge text-outline-warning">
                                                                  {ticket.priority}
                                                              </span>
                                        </td>
                                        <td>{ticket.title}</td>
                                        <td>
                                                              <span className="badge text-outline-success">
                                                                  {ticket.status}
                                                              </span>
                                        </td>
                                        <td>{ticket.date}</td>
                                        <td>{ticket.dueDate}</td>
                                        <td>
                                            <div className="btn-group dropdown-icon-none">
                                                <button
                                                    className="btn border-0 icon-btn b-r-4 dropdown-toggle active"
                                                    type="button"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="true"
                                                    aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" href="/apps/tickets/tickets-details"><i
                                                        className="ti ti-eye text-primary me-2"></i> View
                                                    </Link></li>
                                                    <li><a className="dropdown-item" href="#" onClick={() => handleEditTicket(ticket)}><i className="ti ti-edit text-success me-2"></i>Edit </a></li>
                                                    <li><a className="dropdown-item delete-btn" href="#" onClick={() => handleDeleteTicket(ticket.id)}><i className="ti ti-trash text-danger me-2"></i> Delete </a></li>
                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </div>

                    </CardBody>
                </Card>
            </Col>

            <Modal isOpen={showModal} toggle={() => setShowModal(!showModal)} backdrop="static" keyboard={false}>
                <ModalHeader toggle={() => setShowModal(!showModal)}>Edit Ticket</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="ticketTitle">Title</Label>
                            <Input
                                type="text"
                                id="ticketTitle"
                                value={ticket.title}
                                onChange={(e) => setTicket({ ...ticket, title: e.target.value })}
                                placeholder="Enter Ticket Title"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="ticketClient">Client</Label>
                            <Input
                                type="text"
                                id="ticketClient"
                                value={ticket.client}
                                onChange={(e) => setTicket({ ...ticket, client: e.target.value })}
                                placeholder="Enter Client Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="ticketPriority">Priority</Label>
                            <Input
                                type="select"
                                id="ticketPriority"
                                value={ticket.priority}
                                onChange={(e) => setTicket({ ...ticket, priority: e.target.value })}
                            >
                                <option>Select Priority</option>
                                <option>Medium</option>
                                <option>Low</option>
                                <option>High</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="ticketStatus">Status</Label>
                            <Input
                                type="select"
                                id="ticketStatus"
                                value={ticket.status}
                                onChange={(e) => setTicket({ ...ticket, status: e.target.value })}
                            >
                                <option>Select Status</option>
                                <option>Open</option>
                                <option>In Progress</option>
                                <option>Closed</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="ticketDate">Date</Label>
                            <Input
                                type="date"
                                id="ticketDate"
                                value={ticket.date}
                                onChange={(e) => setTicket({ ...ticket, date: e.target.value })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="ticketDueDate">Due Date</Label>
                            <Input
                                type="date"
                                id="ticketDueDate"
                                value={ticket.dueDate}
                                onChange={(e) => setTicket({ ...ticket, dueDate: e.target.value })}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button color="primary" onClick={handleSaveTicket}>Save Changes</Button>
                </ModalFooter>
            </Modal>
        </>

    );
};

export default TicketTableData;