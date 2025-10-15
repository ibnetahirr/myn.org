"use client";

import React from "react";
import { Card, CardBody, Row, Col, Button, Progress } from "reactstrap";
import Link from "next/link";

const ProductInfo = () => {

  const product = {
    name: "Trendy & Stylish Loafers For Men",
    price: "$26.00",
    discount: "54% OFF",
    reviewsCount: "4.50k",
    ratings: 4.5,
    description: `A product description is a piece of writing that conveys the features and benefits of a product, ranging from basic facts to stories that make a product compelling to an ideal buyer.`,
    description2:`Aside from educating and enticing potential customers, the best descriptions can helpyou differentiate your product and brand from your competitors by putting forward your  most salient features and benefits.`,
    sizes: [6, 7, 25, 30, 40],
    colors: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"],
    ratingsDistribution: [
      { rating: 5, count: 4567, percentage: 74 },
      { rating: 4, count: 2765, percentage: 65 },
      { rating: 3, count: 1682, percentage: 40 },
      { rating: 2, count: 2380, percentage: 25 },
      { rating: 1, count: 1921, percentage: 10 },
    ],
  };

  return (
      <>
        <Col xxl={6} className="order-xxl-2">
          <Card>
            <CardBody>
              <div className="product-details-contentbox">
                {/* Product Title */}
                <h4>{product.name}</h4>

                {/* Rating Section */}
                <div className="mt-2 d-flex align-items-center gap-2">
                  <div className="rating">
                    {[...Array(5)].map((_, index) => {
                      const ratingValue = index + 1;
                      return (
                          <label key={ratingValue} className="star">
                            <input
                                type="radio"
                                name="ratings2"
                                value={ratingValue}
                                disabled
                                defaultChecked={ratingValue <= product.ratings}
                            />
                            <span
                                className={`ti ti-star f-s-20 ${
                                    ratingValue <= product.ratings
                                        ? "text-secondary"
                                        : "text-warning"
                                }`}
                            ></span>
                          </label>
                      );
                    })}
                  </div>
                  <div>
                    <h6 className="m-0 text-warning">
                      (<span className="f-w-600">{product.reviewsCount}</span> Review)
                    </h6>
                  </div>
                </div>

                <div className="mt-4 product-details">
                  <h3>
                    {product.price} <span>({product.discount})</span>
                  </h3>
                </div>

                <div className="app-divider-v dotted py-4 m-0"></div>

                <div className="product-detailbox">
                  <div>
                    <h5>Size:</h5>
                    <div className="form-selectgroup d-flex gap-1">
                      {product.sizes.map((size, index) => (
                          <label key={index} className="select-items">
                            <input type="checkbox" className="select-input" />
                            <span className="select-box">
                          <span className="selectitem">{size}</span>
                        </span>
                          </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5>Color:</h5>
                    <div className="option-color-list check-container">
                      {product.colors.map((color, index) => (
                          <label key={index} className="check-box">
                            <input type="radio" name="radio-group1" />
                            <span
                                className={`radiomark check-${color} ms-2`}
                            ></span>
                          </label>
                      ))}
                    </div>
                  </div>
                </div>


                <div className="mt-4">
                  <h5>Description :</h5>
                  <div className="mt-3">
                    <p>{product.description}</p>
                    <p>{product.description2}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <i className="ti ti-star-filled f-s-30 text-warning"></i>
                    </div>
                    <div>
                      <h5 className="m-0">{product.ratings} out of 5</h5>
                      <p className="mb-0 text-secondary f-s-13">
                        Based on {product.reviewsCount} ratings
                      </p>
                    </div>
                  </div>

                  {product.ratingsDistribution.map((distribution, index) => (
                      <div key={index} className="d-flex align-items-center mt-3">
                        <h6 className="mb-0">{distribution.rating} </h6>
                        <i className="ti ti-star-filled text-warning f-s-9"></i>
                        <div
                            className="progress w-100 ms-2 me-2"
                            role="progressbar"
                            aria-valuenow={distribution.percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                          <div
                              className={`progress-bar bg-${distribution.rating >= 4 ? "primary" : distribution.rating >= 3 ? "secondary" : "warning"} progress-bar-striped`}
                              style={{ width: `${distribution.percentage}%` }}
                          ></div>
                        </div>
                        <h6>({distribution.count})</h6>
                      </div>
                  ))}
                </div>

                {/* Product Actions */}
                <div className="product-details-btn text-end mt-4">
                  <Link href="/apps/e-shop/cart" role="button" className="btn btn-primary">
                    Add To Cart
                  </Link>{" "}
                  <Link href="/apps/e-shop/checkout" role="button" className="btn btn-success">
                    Buy Now
                  </Link>{" "}
                  <Link href="/apps/e-shop/wishlist" role="button" className="btn btn-danger">
                    Add to Wishlist
                  </Link>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </>
  );
};

export default ProductInfo;