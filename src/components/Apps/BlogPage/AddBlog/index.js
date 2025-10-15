"use client"
import React, { useState } from 'react';
import Breadcrumbs from '@/components/CommonElements/Breadcrumbs'
import {Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Label, Row, Input} from "reactstrap";
import TextEditor from "@/components/Apps/E-Shop/AddProduct/TextEditor";


const AddBlog = () => {

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        const rawFile = e.target.files;
        const selectedFile = rawFile[0];
        if (selectedFile) {
            const fileUrl = URL.createObjectURL(selectedFile);
            setFile(fileUrl);
            setFileName(selectedFile.name);
        }
    };

    return (
        <Container fluid>
            <Breadcrumbs mainTitle="Add Blog" title="Apps" path={["Blog page", "Add Blog"]}/>

            <Row>
                <Col xl="12">
                    <Card className="add-blog">
                        <CardHeader>
                            <h5>Add Blog</h5>
                        </CardHeader>
                        <CardBody>
                            <Form className="app-form">
                                <Row>
                                    <Col md="6">
                                        <FormGroup >
                                            <Label for="title">Blog Title</Label>
                                            <Input
                                                className="form-control"
                                                type="text"
                                                name="title"
                                                id="title"
                                                placeholder="Blog Title"
                                            />
                                        </FormGroup>
                                        <FormGroup >
                                            <Label for="category">Category</Label>
                                            <Input
                                                className="form-control"
                                                type="select"
                                                name="category"
                                                id="category"
                                            >
                                                <option value="">Select Category</option>
                                                <option value="1">Category One</option>
                                                <option value="2">Category Two</option>
                                                <option value="3">Category Three</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup >
                                            <Label for="description">Blog Description</Label>
                                            <Input
                                                className="form-control"
                                                type="textarea"
                                                name="description"
                                                id="description"
                                                placeholder="Type a description here"
                                            />
                                        </FormGroup>
                                        <FormGroup >
                                            <Label for="date">Blog Date</Label>
                                            <Input
                                                className="form-control"
                                                type="date"
                                                name="date"
                                                id="date"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup className="file-uploader">
                                            <Label for="file-input" id="uploaded_image">
                                                <i className="fa-solid fa-cloud-arrow-up me-2 fs-1 mb-3 text-secondary"></i>
                                                <span className="fs-5">Choose a file</span>
                                                <span className="fs-6 text-secondary text-center ms-3 me-3">JPEG, PNG & PDF formats, up to 50MB</span>
                                            </Label>
                                            <Input
                                                className="form-control"
                                                type="file"
                                                id="file-input"
                                                name="file"
                                                accept="image/jpeg, image/png, application/pdf"
                                                onChange={handleFileChange} // Handle file change
                                            />

                                            {file && (
                                                <div>
                                                    <img src={file} alt="preview" className="uploaded-image" style={{ maxWidth: '100%', marginTop: '10px' }} />
                                                    <p>{fileName}</p>
                                                </div>
                                            )}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl="12" className="editor-details">
                                        <div className="app-editor" id="editor"/>
                                        <TextEditor/>
                                    </Col>
                                </Row>
                                <Row>
                                <Col className="mt-3">
                                        <div className="text-end">
                                            <Button color="primary" type="submit">Add Blog</Button>
                                            <Button color="outline-primary" type="button" className="ms-2">Cancel</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AddBlog