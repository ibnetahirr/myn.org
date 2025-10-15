"use client"
import Breadcrumbs from '@/components/CommonElements/Breadcrumbs';
import React from 'react'
import { Container, Row, Col, CardBody, Card} from 'reactstrap';
import {tickets} from "@/Data/AppsData/Ticket";

import TicketTableData from "@/components/Apps/Tickets/Ticket/TicketTableData";


const Ticket = () => {



  return (
   <>
       <Container fluid>
           <Breadcrumbs mainTitle="Ticket" title="Apps" path={["Ticket","Ticket"]}/>

           <Row className="ticket-app">
               <Col lg={6}>
                   <div className="row">
                       {tickets.map((ticket, index) => (
                           <Col sm="6" key={index}>
                               <Card className={`ticket-card bg-${ticket.bgColor}`}>
                                   <CardBody>
                                       <i className="ph-bold ph-circle circle-bg-img"></i>
                                       <div className="h-50 w-50 d-flex-center b-r-15 bg-white mb-3">
                                           <i className={`ph-bold ${ticket.icon} f-s-25 text-${ticket.bgColor}`}></i>
                                       </div>
                                       <p className="f-s-16">{ticket.title}</p>
                                       <div className="d-flex justify-content-between align-items-center">
                                           <h3 className="text-white">{ticket.count}</h3>
                                           <ul className="avatar-group">
                                               {ticket.avatars.map((avatar, idx) => (
                                                   <li
                                                       key={idx}
                                                       className={`h-45 w-45 d-flex-center b-r-50 text-bg-${avatar.bgColor} b-2-light position-relative`}
                                                       data-bs-toggle="tooltip"
                                                       data-bs-title={avatar.tooltip}
                                                   >
                                                      <span className={`position-absolute top-0 start-2 p-1 bg-${avatar.bgColor} border border-light rounded-circle`}></span>
                                                       <img
                                                           src={avatar.img}
                                                           alt={avatar.tooltip}
                                                           className="img-fluid b-r-50 overflow-hidden"
                                                       />
                                                   </li>
                                               ))}
                                               <li
                                                   className="bg-white text-dark h-35 w-35 d-flex-center b-r-50"
                                                   data-bs-toggle="tooltip"
                                                   data-bs-title={`${ticket.extraCount} More`}
                                               >
                                                   {`${ticket.extraCount}+`}
                                               </li>
                                           </ul>
                                       </div>
                                   </CardBody>
                               </Card>
                           </Col>
                       ))}
                   </div>
               </Col>

             <TicketTableData/>
           </Row>
       </Container>
   </>
  )
}

export default Ticket