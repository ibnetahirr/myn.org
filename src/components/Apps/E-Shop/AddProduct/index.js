"use client";
import React, {useState} from "react";
import CustomSelect from "./CustomSelect";
import {options, options2} from "./addProductData";
import TextEditor from "./TextEditor";
import UploadProduct from "./UploadProduct";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import Link from "next/link";
import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    Form,
    FormGroup,
    Label,
    Row,
    Input,
    Modal,
    ModalHeader, ModalBody, ModalFooter
} from "reactstrap";

const AddProduct = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModal = () => setModalOpen(!isModalOpen);

    return (
        <Container fluid>
            <Breadcrumbs mainTitle="Add Product" title="Apps" path={["E-shop", "Add Product"]}/>
            <Row>
                <Col lg={8}>
                    <Card>
                        <CardBody>
                            <div className="app-product-section">
                                <div className="main-title">
                                    <h6>General Information</h6>
                                </div>
                                <Form className="app-form">
                                    <FormGroup>
                                        <Label>Product Title</Label>
                                        <Input type="text" placeholder="Enter product title"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Brand Name</Label>
                                        <Input type="text" placeholder="Enter brand name"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Product Description</Label>
                                        <div className="app-editor" id="editor"/>
                                        <TextEditor/>
                                    </FormGroup>
                                </Form>

                                <div className="app-divider-v dashed py-4"></div>

                                <div className="main-title">
                                    <h6>Category</h6>
                                </div>
                                <Form className="app-form">
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label>Product Category</Label>
                                                <CustomSelect options={options}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label>Product Tags</Label>
                                                <CustomSelect options={options2}/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>

                                <div className="app-divider-v dashed py-4"></div>

                                <div className="main-title">
                                    <h6>Inventory</h6>
                                </div>
                                <Form className="app-form">
                                    <Row>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label>SKU (Optional)</Label>
                                                <Input type="text" placeholder="Enter SKU"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label>Barcode</Label>
                                                <Input type="text" placeholder="Enter barcode"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label>Quantity</Label>
                                                <Input type="text" placeholder="Enter quantity"/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>

                                <div className="app-divider-v dashed py-4"></div>

                                <div className="main-title">
                                    <h6>Shipping</h6>
                                </div>
                                <Form className="app-form">
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label>Weight</Label>
                                                <Input type="text" placeholder="Enter weight"/>
                                                <small className="form-text text-muted">
                                                    Package Size (The package you use to ship your product)
                                                </small>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label>Shipping Days</Label>
                                                <Input type="text" placeholder="Enter shipping days"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label>Length</Label>
                                                <Input type="text" placeholder="Enter length"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label>Breadth</Label>
                                                <Input type="text" placeholder="Enter breadth"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label>Width</Label>
                                                <Input type="text" placeholder="Enter width"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={12} className="text-end">
                                            <Button type="button" color="secondary" className="me-2">
                                                Discard
                                            </Button>
                                            <Link href="/apps/e-shop/product-details" passHref>
                                                <Button color="primary">Add Product</Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <CardBody>
                            <div className="app-product-section">

                                <div className="main-title">
                                    <h6>Product Media</h6>
                                </div>
                                <div className="mb-4">
                                    <UploadProduct />
                                </div>

                                <div className="app-divider-v dashed py-4"></div>

                                <div className="main-title">
                                    <h6>Pricing</h6>
                                </div>
                                <Form className="app-form">
                                    <FormGroup>
                                        <Label>Price</Label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">$</span>
                                            <Input type="text" placeholder="Enter price"/>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Compare at price</Label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">$</span>
                                            <Input type="text" placeholder="Enter compare at price"/>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Discount (%)</Label>
                                        <Input type="text" placeholder="Enter discount"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Discount Type</Label>
                                        <Input type="text" placeholder="Enter discount type"/>
                                    </FormGroup>
                                </Form>

                                <div className="app-divider-v dashed py-4"></div>

                                <div className="main-title">
                                    <h6>Product Variants</h6>
                                </div>
                                <div className="variants-box mb-3">
                                    <Button color="text-primary" onClick={toggleModal}>
                                        <i className="ti ti-plus"></i> Add Variants
                                    </Button>
                                </div>
                                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                                    <ModalHeader toggle={toggleModal}>Add Variants</ModalHeader>
                                    <ModalBody>
                                        <Form>
                                            <FormGroup>
                                                <Label>Variant Type</Label>
                                                <Input type="select">
                                                    <option value="">Select Option</option>
                                                    <option value="size">Size</option>
                                                    <option value="weight">Weight</option>
                                                    <option value="color">Color</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Product Height</Label>
                                                <Input type="number" placeholder="Enter product height"/>
                                            </FormGroup>
                                        </Form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="secondary" onClick={toggleModal}>
                                            Close
                                        </Button>
                                        <Button color="primary" onClick={toggleModal}>
                                            Add Variants
                                        </Button>
                                    </ModalFooter>
                                </Modal>

                                <div className="app-divider-v dashed py-4"></div>

                                <div className="main-title">
                                    <h6>Visibility</h6>
                                </div>
                                <div>
                                    <FormGroup check className="d-flex align-items-center">
                                        <Input type="radio" name="visibility" id="published"/>
                                        <Label check for="published" className="ms-2">
                                            Published
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="d-flex align-items-center">
                                        <Input type="radio" name="visibility" id="schedule"/>
                                        <Label check for="schedule" className="ms-2">
                                            Schedule
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="d-flex align-items-center">
                                        <Input type="radio" name="visibility" id="hidden"/>
                                        <Label check for="hidden" className="ms-2">
                                            Hidden
                                        </Label>
                                    </FormGroup>
                                </div>
                                <Form className="app-form mt-4">
                                    <FormGroup>
                                        <Label>Publish Date</Label>
                                        <Input type="text" placeholder="Enter publish date"/>
                                        <small className="form-text text-muted">
                                            The category will not be visible until the specified date.
                                        </small>
                                    </FormGroup>
                                </Form>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AddProduct;
