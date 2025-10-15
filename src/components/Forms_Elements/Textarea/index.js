"use client"
import React, {useState} from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Form,
    Label,
    Input,
    Row,
    Col,
    FormGroup,
    FormFeedback,
    Container,
    Button
} from 'reactstrap';
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";


const Index = () => {

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const [textareaValue, setTextareaValue] = useState('');
    const [output, setOutput] = useState('');

    const handleTextareaChange = (e) => {
        setTextareaValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOutput(textareaValue); // Set the output to the current textarea value
    };

    return (
        <>
            <Container fluid>

                <Breadcrumbs  mainTitle="textarea" title="Forms elements" path={["Textarea"]} icon={<i class="ph-duotone  ph-cardholder f-s-16"></i>}/>

                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Basic Textarea</h5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="6">
                                        <Form className="app-form">
                                            <Label for="textareaexample">Simple textarea</Label>
                                            <Input
                                                type="textarea"
                                                id="textareaexample"
                                                placeholder="Some text..."
                                                rows="2"
                                            />
                                        </Form>
                                    </Col>
                                    <Col md="6">
                                        <Form className="app-form">
                                            <Label for="floatingTextarea2">Floating textarea</Label>
                                            <div className="form-floating">
                                                <Input
                                                    type="textarea"
                                                    id="floatingTextarea2"
                                                    placeholder="Type Your Address"
                                                />
                                                <Label for="floatingTextarea2">Address</Label>
                                            </div>
                                        </Form>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>


                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Horizontal Textarea</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <Row className="mb-3">
                                        <Label for="textareaexample1" sm="4" lg="2">Small Textarea</Label>
                                        <Col sm="8" lg="10">
                                            <Input
                                                type="textarea"
                                                id="textareaexample1"
                                                placeholder="Some text..."
                                                rows="1"
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Label for="textareaexample2" sm="4" lg="2">Default Textarea</Label>
                                        <Col sm="8" lg="10">
                                            <Input
                                                type="textarea"
                                                id="textareaexample2"
                                                placeholder="Some text..."
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Label for="textareaexample3" sm="4" lg="2">Large Textarea</Label>
                                        <Col sm="8" lg="10">
                                            <Input
                                                type="textarea"
                                                id="textareaexample3"
                                                placeholder="Some text..."
                                                rows="6"
                                            />
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Textarea With States</h5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm="12">
                                        <Form className="app-form was-validated">
                                            <FormGroup>
                                                <Label for="validationTextarea">Textarea</Label>
                                                <Input
                                                    type="textarea"
                                                    id="validationTextarea"
                                                    placeholder="Required example textarea"
                                                    required
                                                />
                                                <FormFeedback> Please enter a message in the textarea. </FormFeedback>
                                            </FormGroup>
                                        </Form>
                                    </Col>

                                    <Col sm="12">
                                        <Form className="app-form was-validated">
                                            <FormGroup>
                                                <Label for="validationTextarea1">Textarea</Label>
                                                <Input
                                                    type="textarea"
                                                    id="validationTextarea1"
                                                    placeholder="Required example textarea"
                                                    valid
                                                />
                                                <FormFeedback> Please enter a message in the textarea. </FormFeedback>
                                            </FormGroup>
                                        </Form>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Textarea Formatter</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <div className="mb-3">
                                        <Label for="write-textarea">Write some text:</Label>
                                        <Input
                                            type="textarea"
                                            id="write-textarea"
                                            placeholder="Write some text..."
                                            value={text}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-control h-40" id="code-output">
                                        {text}
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Custom Textarea Formatter</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <div className="mb-3">
                                        <Label for="myTextarea">Write some text:</Label>
                                        <Input type="textarea" id="myTextarea" placeholder="Write some text..." value={textareaValue} onChange={handleTextareaChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <Button id="submitBtn" color="primary" onClick={handleSubmit}>
                                            Submit Code
                                        </Button>
                                    </div>
                                    <div className="form-control h-40" id="output">
                                        {output}
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Index; 
