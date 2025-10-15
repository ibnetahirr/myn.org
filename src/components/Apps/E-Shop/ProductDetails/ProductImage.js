import React, { useEffect, useState, useRef } from "react";
import { Card, CardBody, Col } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductImage = () => {
    const images = [
        "/images/ecommerce/25.jpg",
        "/images/ecommerce/26.jpg",
        "/images/ecommerce/27.jpg",
        "/images/ecommerce/28.jpg",
    ];

    const [isClient, setIsClient] = useState(false);
    const mainSliderRef = useRef(null);
    const navSliderRef = useRef(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: navSliderRef.current,
    };

    const navSliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: mainSliderRef.current,
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
    };

    return (
        <Col lg={6} xxl={3} className="order-md-2 order-xxl-1">
            <Card>
                <CardBody>
                    <div className="slider product-slider-for mb-3">
                        <Slider ref={mainSliderRef} {...mainSliderSettings}>
                            {images.map((img, index) => (
                                <div key={index}>
                                    <img
                                        src={img}
                                        className="img-fluid rounded"
                                        alt={`product-image-${index + 1}`}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="slider product-slider-nav app-arrow">
                        <Slider ref={navSliderRef} {...navSliderSettings}>
                            {images.map((img, index) => (
                                <div key={index}>
                                    <img
                                        src={img}
                                        className="img-fluid rounded"
                                        alt={`product-thumbnail-${index + 1}`}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ProductImage;
