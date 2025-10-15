"use client";
import React from "react";
import {Card, CardBody, Table, Button, Col} from "reactstrap";

const ProductReturns = () => {
  // Mock data for reviews and products
  const reviews = [
    {
      initials: "EM",
      name: "Moen",
      message:
          "I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.",
      bgColor: "bg-danger",
    },
    {
      initials: <i className="fa-solid fa-user"></i>,
      name: "Mark",
      message:
          "Hey, can tell me about progress of project? I'm waiting for your response.",
      bgColor: "bg-light-secondary",
      images: [
        "/images/dashboard/ecommerce-dashboard/12.png",
        "/images/dashboard/ecommerce-dashboard/05.png",
        "/images/dashboard/ecommerce-dashboard/10.png",
      ],
    },
  ];

  const products = [
    {
      img: "/images/dashboard/ecommerce-dashboard/16.png",
      name: "Sports shoes",
      code: "#AB9875",
      price: "$450",
    },
    {
      img: "/images/dashboard/ecommerce-dashboard/01.png",
      name: "Headphones",
      code: "#AB3904",
      price: "$380",
    },
    {
      img: "/images/dashboard/ecommerce-dashboard/09.png",
      name: "T-shirt",
      code: "#AB3804",
      price: "$100",
    },
    {
      img: "/images/dashboard/ecommerce-dashboard/02.png",
      name: "iPhone",
      code: "#AB2903",
      price: "$10,900",
    },
  ];

  return (
      <Col lg={6} xxl={3} className="order-md-1 order-xxl-3">
        <Card>
          <CardBody>
            <div className="product-details-contentbox">
              <div>
                <h5>Returns:</h5>
                <p>
                  Returns is a scheme provided by respective sellers directly
                  under this policy in terms of which the option of exchange,
                  replacement and/ or refund is offered by the respective sellers
                  to you.
                </p>
              </div>

              <div className="product-review mt-4">
                {reviews.map((review, index) => (
                    <div key={index}>
                      <div>
                        <div className="d-flex align-items-center justify-content-between position-relative">
                      <span
                          className={`h-35 w-35 d-flex-center b-r-50 position-absolute ${review.bgColor}`}
                      >
                        {review.initials}
                      </span>
                          <span className="fs-6 f-w-500 text-secondary ms-5">
                        {review.name}
                      </span>
                          <div>
                            <i className="ti ti-star fs-5"></i>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-muted">{review.message}</p>
                          {review.images && (
                              <div className="me-2 d-flex gap-1">
                                {review.images.map((img, imgIndex) => (
                                    <img
                                        key={imgIndex}
                                        src={img}
                                        alt="review"
                                        className="w-45 bg-light-secondary p-1 b-r-5"
                                    />
                                ))}
                              </div>
                          )}
                        </div>
                      </div>
                      {index !== reviews.length - 1 && (
                          <div className="app-divider-v dotted py-3"></div>
                      )}
                    </div>
                ))}
              </div>

              {/* Products Section */}
              <div className="mt-4">
                <h5>Products:</h5>
                <Table className="table-bottom-border align-middle mb-0">
                  <tbody>
                  {products.map((product, index) => (
                      <tr key={index} className="border-0">
                        <td>
                          <div className="position-relative d-flex align-items-center">
                            <img
                                src={product.img}
                                alt="product"
                                className="w-35 position-absolute"
                            />
                            <div className="mg-s-50 ms-5">
                              <h6>{product.name}</h6>
                              <p className="text-secondary mb-0">{product.code}</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-end">
                          <h6 className="text-secondary mb-0">{product.price}</h6>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </Table>
                <Button color="primary" size="sm" className="w-100 mt-3">
                  View All Products
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default ProductReturns;
