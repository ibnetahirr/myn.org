"use client"
import Breadcrumbs from '@/components/CommonElements/Breadcrumbs'
import React, { useState} from 'react'
import { Container,Card, CardHeader, Row, Col, Button, CardBody } from 'reactstrap';
import ChatLeftData from './ChatLeftData';
import ChatContainer from './ChatContainer';

const Chat = () => {

  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prevState) => !prevState);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };


  return (
    <Container fluid >
    <Breadcrumbs  mainTitle="Chat" title="Apps" path={["Chat"]}  />
   
    <Row className="row position-relative chat-container-box">
      <Col lg="4" xxl="3" className="box-col-5">
        <div className={`chat-div ${isChatOpen ? "chattoggle" : ""}`}>
          <Card>
            <CardHeader>
              <div className="d-flex align-items-center">
                {/* Avatar and Status Indicator */}
                <span className="chatdp h-45 w-45 d-flex-center b-r-50 position-relative bg-danger">
                  <img src="/images/avtar/09.png" alt="User Avatar" className="img-fluid b-r-50"/>
                  <span className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"/>
                </span>

                {/* User Info */}
                <div className="flex-grow-1 ps-2">
                  <div className="fs-6">Ninfa Monaldo</div>
                  <div className="text-muted f-s-12">Web Developer</div>
                </div>

                {/* Settings Button */}
                <div>
                  <div className="btn-group dropdown-icon-none">
                    <a role="button" data-bs-placement="top" data-bs-toggle="dropdown" data-bs-auto-close="true"
                       aria-expanded="false">
                      <i className="ti ti-settings fs-5"></i>
                    </a>
                    <ul className="dropdown-menu" data-popper-placement="bottom-start">
                      <li><a className="dropdown-item" href="#"><i className="ti ti-brand-hipchat"></i> <span
                          className="f-s-13">Chat Settings</span></a>
                      </li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-phone-call"></i> <span
                          className="f-s-13">Contact Settings</span></a>
                      </li>
                      <li><a className="dropdown-item" href="#"><i className="ti ti-settings"></i> <span
                          className="f-s-13">Settings</span></a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="close-togglebtn">
                  <Button className="toggle-btn p-1" color="te" onClick={closeChat}>
                    <i className="ti ti-align-justified"></i>
                  </Button>

                  {/* Conditional Rendering of Chat Container */}

                </div>
              </div>
            </CardHeader>
            <CardBody>
              <ChatLeftData/>
            </CardBody>
          </Card>
        </div>
      </Col>
      <Col lg="8" xxl="9" className='box-col-7'>
        <ChatContainer toggleChat={toggleChat}/>
      </Col>
    </Row>
  </Container>
  )
}

export default Chat