"use client"
import Breadcrumbs from '@/components/CommonElements/Breadcrumbs'
import React, {useState} from 'react'
import {
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from "reactstrap";
import EmailTabs from "@/components/Apps/EmailPage/Email/EmailTabs";
import EmailContent from "@/components/Apps/EmailPage/Email/EmailContent";

const Email = () => {

    const [active, setActive] = useState('tab1');

    const [showModal, setShowModal] = useState(false);
    const [emailData, setEmailData] = useState({
        to: '',
        subject: '',
        status: '',
        message: '',
        file: null,
    });

    const toggleModal = () => setShowModal(!showModal);


    const handleChange = (e) => {
        const { id, value } = e.target;
        setEmailData({ ...emailData, [id]: value });
    };

    const handleFileChange = (e) => {
        setEmailData({ ...emailData, file: e.target.files[0] });
    };

    const handleSendEmail = () => {
        // Here you can perform the actual sending functionality (e.g., API request)
        alert('Email Sent!');
        setShowModal(false); // Close modal after sending email
    };

  return (
    <Container fluid>
            <Breadcrumbs mainTitle="Email" title="Apps" path={["Email Page","Email"]}  />

      <Row>
          <Col lg={3}>
              <EmailTabs active={active} setActive={setActive} toggleModal={toggleModal} />
          </Col>

          <Col lg={9}>
              <EmailContent active={active} />
          </Col>

          <Modal isOpen={showModal} toggle={toggleModal} backdrop="static" keyboard={false}>
              <ModalHeader toggle={toggleModal}>New Message</ModalHeader>
              <ModalBody>
                  <Form className="app-form">
                      <FormGroup>
                          <Label for="to">To:</Label>
                          <Input
                              type="email"
                              id="to"
                              value={emailData.to}
                              onChange={handleChange}
                              placeholder="@gmail.com"
                          />
                      </FormGroup>
                      <FormGroup>
                          <Label for="subject">Subject:</Label>
                          <Input
                              type="text"
                              id="subject"
                              value={emailData.subject}
                              onChange={handleChange}
                              placeholder="Type subject..."
                          />
                      </FormGroup>
                      <FormGroup>
                          <Label for="status">Status:</Label>
                          <Input
                              type="select"
                              id="status"
                              value={emailData.status}
                              onChange={handleChange}
                          >
                              <option value="">Status</option>
                              <option value="Important">Important</option>
                              <option value="Company">Company</option>
                              <option value="Social">Social</option>
                              <option value="Private">Private</option>
                          </Input>
                      </FormGroup>
                      <FormGroup>
                          <Label for="message">Message:</Label>
                          <Input
                              type="textarea"
                              id="message"
                              value={emailData.message}
                              onChange={handleChange}
                          />
                      </FormGroup>
                      <FormGroup>
                          <Label for="file">Attached File:</Label>
                          <Input
                              type="file"
                              id="file"
                              onChange={handleFileChange}
                          />
                      </FormGroup>
                  </Form>
              </ModalBody>
              <ModalFooter>
                  <Button color="secondary" onClick={toggleModal}>
                      Close
                  </Button>
                  <Button color="primary" onClick={handleSendEmail}>
                      Send
                  </Button>
              </ModalFooter>
          </Modal>
      </Row>
    </Container>
  )
}

export default Email