"use client";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import React, {useEffect, useState} from "react";
import {productlist} from '@/Data/AppsData/Productlist.js';
import {Card, CardBody, Col, Container, Row, Table} from "reactstrap";

const ProductList = () => {
    useEffect(() => {
        setTimeout(() => {
            $('#product-Listtable').DataTable();
            return () => {
                $('#product-Listtable').DataTable().destroy();
            };
        }, 500)
    }, []);

    const [productPageList, setProductPageList] = useState(productlist);

    const handleDelete = (productId) => {
        const updatedProductList = productPageList.filter(product => product.id !== productId);
        setProductPageList(updatedProductList);
    };

    return (
        <Container fluid>
            <Breadcrumbs
                mainTitle="Product List"
                title="Apps"
                path={["E-shop", "Product List"]}
            />
            <Row>
                <Col>
                    <Card>
                        <CardBody className=" px-0">

                            <div className="table-responsive app-scroll app-datatable-default product-list-table">
                                <Table id="product-Listtable" className="table-sm display align-middle">
                                    <thead>
                                    <tr>
                                        <th>
                                            <label className="check-box mb-0">
                                                <input type="checkbox" id="select-all"/>
                                                <span className="checkmark outline-secondary ms-2 "></span>
                                            </label>
                                        </th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Category</th>
                                        <th>Seller</th>
                                        <th>Published</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {productPageList.map((product) => (
                                        <tr key={product.id}>
                                            <td>
                                                <label className="check-box mb-0">
                                                    <input type="checkbox"/>
                                                    <span className="checkmark outline-secondary ms-2"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div
                                                        className="h-35 w-35 d-flex-center b-r-10 overflow-hidden me-2">
                                                        <img src={product.image} alt={product.name}
                                                             className="img-fluid"/>
                                                    </div>
                                                    <div className="d-flex">
                                                        <span className="fw-medium">{product.name}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{product.price}</td>
                                            <td>{product.stock}</td>
                                            <td>
                                                <span className="badge text-light-secondary">{product.category}</span>
                                            </td>
                                            <td>{product.seller}</td>
                                            <td>{product.published}</td>
                                            <td>
                                                <button type="button" className="btn btn-light-success icon-btn b-r-4">
                                                    <i className="ti ti-edit text-success"></i>
                                                </button>
                                                {' '}
                                                <button
                                                    type="button"
                                                    className="btn btn-light-danger icon-btn b-r-4 delete-btn"
                                                    onClick={() => handleDelete(product.id)}
                                                >
                                                    <i className="ti ti-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductList;
