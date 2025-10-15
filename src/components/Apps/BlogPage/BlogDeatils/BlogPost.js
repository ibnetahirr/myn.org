import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import Image from "next/image";
import {CardBody, CardHeader, CardImg, Input, ListGroup, ListGroupItem, Label} from "reactstrap";
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

const BlogPost = () => {

    const [comment, setComment] = useState('');

    useEffect(() => {
            const lightbox = GLightbox({
                touchNavigation: true,
                loop: true,
                width: "90vw",
                height: "90vh",
            });

            return () => {
                lightbox.destroy();
            };
    }, []);

    return (
        <>
            <Row>
                <Col lg={8} xxl={9}>
                    <Card>
                        <Card.Body>
                            <div className="post-div mb-3">
                                <Row className="g-2">
                                    <Col xs={12}>
                                        <video controls className="w-100" style={{ height: '400px', borderRadius: '8px' }}>
                                            <source src="/images/blog-app/video1.mp4" type="video/mp4" />
                                            <source src="movie.ogg" type="video/ogg" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </Col>
                                    <Col sm={3} xs={6}>
                                        <a href="/images/blog-app/09.jpg" className="glightbox img-fluid" data-glightbox="type: image;">
                                            <img src="/images/blog-app/09.jpg" alt="image" width={400} height={300} className="img-fluid" />
                                        </a>
                                    </Col>
                                    <Col sm={3} xs={6}>
                                        <a href="/images/blog-app/05.jpg" className="glightbox img-fluid" data-glightbox="type: image;">
                                            <img src="/images/blog-app/05.jpg" alt="image" width={400} height={300} className="img-fluid" />
                                        </a>
                                    </Col>
                                    <Col sm={3} xs={6}>
                                        <a href="/images/blog-app/08.jpg" className="glightbox img-fluid" data-glightbox="type: image;">
                                            <img src="/images/blog-app/08.jpg" alt="image" width={400} height={300} className="img-fluid" />
                                        </a>
                                    </Col>
                                    <Col sm={3} xs={6}>
                                        <a href="/images/blog-app/04.jpg" className="glightbox img-fluid" data-glightbox="type: image;">
                                            <img src="/images/blog-app/04.jpg" alt="image" width={400} height={300} className="img-fluid" />
                                        </a>
                                    </Col>
                                </Row>
                            </div>

                            <h5 className="mb-3 text-dark font-weight-bold">Adjust your focus when life gets
                                blurry.</h5>

                            <div className="mb-3">
                                <p className="text-secondary">
                                    Photography is the art, application, and practice of creating images by recording
                                    light...
                                </p>
                                <p className="text-secondary">
                                    The word Photography literally means 'drawing with light', which derives from the
                                    Greek photo...
                                </p>

                                <Card className="card-light-secondary shadow-none my-3">
                                    <Card.Body>
                                        <i className="ti ti-quote icon-bg"></i>
                                        <p className="mb-2 text-dark font-weight-bold">
                                            “I never stay in one country more than three months. Why? Because I was
                                            interested in
                                            seeing, and if I stay longer I become blind.”
                                        </p>
                                        <h6 className="text-secondary text-end">
                                            <cite>- Josef Koudelka.</cite>
                                        </h6>
                                    </Card.Body>
                                </Card>

                                <p className="text-secondary mb-4">
                                    In 1826, Phosphoric Niece first managed to fix an image that was captured with a
                                    camera...
                                </p>

                                <Row className="mb-3">
                                    <Col md={6}>
                                        <h5 className="mb-3 text-dark font-weight-bold">List of photographers</h5>
                                        <ul className="blog-list">
                                            <li><span className="text-dark f-w-500">Charlotte Abram (born 1993)</span> -
                                                photographer and filmmaker
                                            </li>
                                            <li><span className="text-dark f-w-500">Jennifer Des (born 1975)</span> -
                                                photographer
                                            </li>
                                            <li><span className="text-dark f-w-500">Nathalie Gasses (born 1964)</span> -
                                                writer, photographer
                                            </li>
                                            <li><span
                                                className="text-dark f-w-500">Germaine Van Paras (1893 - 1983)</span> -
                                                film director, photographer, educator
                                            </li>
                                            <li><span className="text-dark f-w-500">Katrin Vermeer (born 1979)</span> -
                                                photographer, filmmaker
                                            </li>
                                            <li><span className="text-dark f-w-500">Stephanie Windings-rate (1939 - 2019)</span> -
                                                artistic portrait and animal photographer
                                            </li>
                                            <li><span className="text-dark f-w-500">Claudia Andujar (born 1931)</span> -
                                                Swiss-born Brazilian photographer and photojournalist
                                            </li>
                                            <li><span className="text-dark f-w-500">Brigida Baltar (born 1959)</span> -
                                                visual artist and photographer
                                            </li>
                                            <li><span className="text-dark f-w-500">Alice Della (born 1987)</span> -
                                                model, photographer
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <a href="/images/blog-app/03.jpg" className="glightbox"
                                           data-glightbox="type: image; zoomable: true;">
                                            <img src="/images/blog-app/03.jpg" alt="image"  className="img-fluid rounded"/>
                                        </a>
                                    </Col>
                                </Row>

                                <p className="text-secondary">
                                    The commercial introduction of computer-based electronic digital cameras in the 1990s soon revolutionized photography. During the first decade of the 21st century, traditional film-based photochemical methods were increasingly marginalized as the practical advantages of the new technology became widely appreciated and the image quality of moderately priced digital cameras was continually improved. Especially since cameras became a standard feature on smartphones, taking pictures (and instantly publishing them online) has become a ubiquitous everyday practice around the world.
                                </p>
                            </div>

                            <div className="app-divider-v mb-2"></div>

                            <div className="d-flex align-items-center flex-wrap">
                            <div className="h-50 w-50 d-flex-center b-r-10 overflow-hidden">
                                    <Image src="/images/avtar/09.png" alt="avatar"
                                           className="bg-danger img-fluid" width={50} height={50}/>
                                </div>
                                <div className="flex-grow-1 ps-2 me-2">
                                    <h6 className="mb-0 font-weight-bold text-dark">Bette Hagenes</h6>
                                    <div className="text-muted f-s-12">26 Nov, 2022</div>
                                </div>
                                <div>
                                    <button className="btn btn-sm icon-btn b-r-5">
                                        <i className="ti ti-thumb-up f-s-20"></i>
                                    </button>
                                    <button className="btn btn-sm icon-btn b-r-5">
                                        <i className="ti ti-brand-hipchat f-s-20"></i>
                                    </button>
                                    <button className="btn btn-sm icon-btn b-r-5">
                                        <i className="ti ti-share f-s-20"></i>
                                    </button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <h5>Comments</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="blogcomment-box mb-3">
                                <div className="d-flex justify-content-between">
                                    <div className="h-40 w-40 d-flex-center b-r-10 overflow-hidden comment-img">
                                        <img src="/images/avtar/4.png" alt="avatar" className="bg-warning img-fluid"
                                             width={40} height={40}/>
                                    </div>
                                    <div className="commentdiv">
                                        <h6 className="mb-0 text-dark font-weight-bold">
                                            Bette Hagenes <span className="text-muted f-s-12">1 min</span>
                                        </h6>
                                        <p className="text-muted mb-0">
                                            “Photography is the only language that can be understood anywhere in the
                                            world.”
                                            <span
                                                className="fs-6 d-inline-block text-secondary"><cite>- Bruno Barbey</cite></span>
                                        </p>
                                        <span className="badge text-light-secondary">lenora@gmail.com</span>
                                        <span className="badge text-light-dark">#beautiful</span>
                                    </div>
                                </div>
                            </div>

                            <div className="blogcomment-box mb-3">
                                <div className="d-flex justify-content-between">
                                    <div className="h-40 w-40 d-flex-center b-r-10 overflow-hidden comment-img">
                                        <img src="/images/avtar/4.png" alt="avatar"
                                             className="bg-warning img-fluid" width={40} height={40}/>
                                    </div>
                                    <div className="commentdiv">
                                        <h6 className="mb-0 text-dark f-w-600">
                                            Bette Hagenes <span className="text-muted f-s-12">1 min</span>
                                        </h6>
                                        <p className="text-muted mb-0">
                                            You're such a talented person with the camera. I appreciate your work, It's
                                            always good to work with a photographer who knows how to get the job done.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="btn-group dropdown-icon-none">
                                            <a className="icon-btn dropdown-toggle p-2" role="button"
                                               data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#"><i
                                                    className="ti ti-share"></i> Share</a></li>
                                                <li><a className="dropdown-item" href="#"><i
                                                    className="ti ti-edit"></i> Edit</a></li>
                                                <li><a className="dropdown-item" href="#"><i
                                                    className="ti ti-trash"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h5 className="mb-3">Leave A Comment</h5>
                            <Form className="app-form">
                                <Row>
                                    <Col xs={12}>
                                        <FormGroup className="mb-3">
                                            <Input type="textarea" rows={3} className="form-control"
                                                   placeholder="Enter Your Comment" value={comment}
                                                   onChange={(e) => setComment(e.target.value)}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup className="mb-3">
                                            <FormControl type="text" placeholder="Enter Your Name"/>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup className="mb-3">
                                            <FormControl type="email" placeholder="Enter Your Email"/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12} className="text-end">
                                        <Button variant="primary" type="button">
                                            <i className="ti ti-send"></i> Comment
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>

                    <h5 className="mb-3">Related Posts</h5>
                    <Row>
                        <Col md={6} xxl={4}>
                            <Card className="blog-card overflow-hidden">
                                <a href="/images/blog-app/01.jpg" className="glightbox img-hover-zoom" data-glightbox="type: image; zoomable: true;">
                                    <CardImg top src="/images/blog-app/01.jpg" alt="..." />
                                </a>
                                <div className="tag-container">
                                    <span className="badge">Lifestyle</span>
                                </div>
                                <CardBody>
                                    <p className="text-body-secondary"><i className="ti ti-calendar-due"></i> 25.03.2022</p>
                                    <a href="./blog_read_more.html" className="bloglink">
                                        <h5 className="title-text mb-2">Photographs</h5>
                                    </a>
                                    <p className="card-text text-secondary">
                                        “Photography is a way of feeling, of touching, of loving. What you have caught on film…”
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md={6} xxl={4}>
                            <Card className="blog-card overflow-hidden">
                                <div className="img-hover-zoom">
                                    <a href="/images/blog-app/05.jpg" className="glightbox img-hover-zoom" data-glightbox="type: image; zoomable: true;">
                                        <CardImg top src="/images/blog-app/05.jpg" alt="..." />
                                    </a>
                                </div>
                                <div className="tag-container">
                                    <span className="badge text-light-secondary">Travel</span>
                                </div>
                                <CardBody>
                                <p className="text-body-secondary"><i className="ti ti-calendar-due"></i> 08.04.2022</p>
                                    <a href="./blog_read_more.html" className="bloglink">
                                        <h5 className="title-text mb-2">Living in the Moment</h5>
                                    </a>
                                    <p className="card-text text-secondary">
                                        “I believe the happiness we feel in relation to animals is immensely..."
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md={6} xxl={4}>
                            <Card className="blog-card overflow-hidden">
                                <div className="img-hover-zoom">
                                    <a href="/images/blog-app/04.jpg" className="glightbox img-hover-zoom" data-glightbox="type: image; zoomable: true;">
                                        <CardImg top src="/images/blog-app/04.jpg" alt="..." />
                                    </a>
                                </div>
                                <div className="tag-container">
                                    <span className="badge text-light-secondary">Travel</span>
                                </div>
                                <CardBody>
                                <p className="text-body-secondary"><i className="ti ti-calendar-due"></i> 25.03.2022</p>
                                    <a href="./blog_read_more.html" className="bloglink">
                                        <h5 className="title-text mb-2">Travel</h5>
                                    </a>
                                    <p className="card-text text-secondary">
                                        Travel is the movement of people between distant geographical locations.To travel ...
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                <Col lg={4} xxl={3}>
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <h5>About Me</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="text-secondary mb-3">
                                        <p className="mb-3">Hi! I am Aaliyah.</p>
                                        <p>
                                            Over the last fifteen years of my career, I earned a sense of creativity. I want to show the beauty of life in a chaotic world.
                                        </p>
                                        <p>
                                            In my first year as a photographer, I thought the photos I took needed more spark. So I enrolled in a graphic design class. I combined my photographs with visual arts and finally saw what I was looking for. The spark!
                                        </p>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-facebook icon-btn b-r-5">
                                            <i className="ti ti-brand-facebook text-white"></i>
                                        </button>{" "}
                                        <button type="button" className="btn btn-whatsapp icon-btn b-r-5">
                                            <i className="ti ti-brand-whatsapp text-white"></i>
                                        </button>{" "}
                                        <button type="button" className="btn btn-twitter icon-btn b-r-5">
                                            <i className="ti ti-brand-twitter text-white"></i>
                                        </button>{" "}
                                        <button type="button" className="btn btn-github  icon-btn b-r-5">
                                            <i className="ti ti-brand-github text-white"></i>
                                        </button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>


                        <Col md={6} lg={12}>
                            <Card>
                                <CardHeader>
                                    <h5>Categories</h5>
                                </CardHeader>
                                <CardBody>
                                    <ListGroup>
                                        <ListGroupItem className="d-flex justify-content-between align-items-start border-0">
                                            <div className="me-auto">
                                                <p className="text-primary font-weight-bold"><i
                                                    className="ti ti-chevron-right"></i> Fashion</p>
                                            </div>
                                            <span>[7]</span>
                                        </ListGroupItem>
                                        <ListGroupItem className="d-flex justify-content-between align-items-start border-0">
                                            <div className="me-auto">
                                                <p className="text-secondary font-weight-bold"><i className="ti ti-chevron-right"></i> Lifestyle</p>
                                            </div>
                                            <span>[10]</span>
                                        </ListGroupItem>
                                        <ListGroupItem className="d-flex justify-content-between align-items-start border-0">
                                            <div className="me-auto">
                                                <p className="text-success font-weight-bold"><i className="ti ti-chevron-right"></i> Food</p>
                                            </div>
                                            <span>[15]</span>
                                        </ListGroupItem>
                                        <ListGroupItem className="d-flex justify-content-between align-items-start border-0">
                                            <div className="me-auto">
                                                <p className="text-warning font-weight-bold"><i className="ti ti-chevron-right"></i> Travel</p>
                                            </div>
                                            <span>[20]</span>
                                        </ListGroupItem>
                                        <ListGroupItem className="d-flex justify-content-between align-items-start border-0">
                                            <div className="me-auto">
                                                <p className="text-danger font-weight-bold"><i className="ti ti-chevron-right"></i> Sports</p>
                                            </div>
                                            <span>[8]</span>
                                        </ListGroupItem>
                                        <ListGroupItem className="d-flex justify-content-between align-items-start border-0">
                                            <div className="me-auto">
                                                <p className="font-weight-bold"><i className="ti ti-chevron-right"></i> Technology</p>
                                            </div>
                                            <span>[10]</span>
                                        </ListGroupItem>
                                        <ListGroupItem className="d-flex justify-content-between align-items-start border-0">
                                            <div className="me-auto">
                                                <p className="text-info font-weight-bold"><i className="ti ti-chevron-right"></i> Business</p>
                                            </div>
                                            <span>[25]</span>
                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md={6} lg={12}>
                            <Card>
                                <CardHeader>
                                    <h5>Popular Blog Posts</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="position-relative mb-3">
                                        <div className="position-absolute">
                                            <img src="/images/avtar/5.png" alt="Avtar"
                                                 className="w-40 h-40 bg-warning rounded"/>
                                        </div>
                                        <div className="ms-5">
                                            <p className="text-dark mb-0 font-weight-bold font-size-14">There is a
                                                collage of large headlines and pictures..</p>
                                            <div className="text-secondary text-end font-size-12">2 days ago</div>
                                        </div>
                                    </div>
                                    <div className="position-relative mb-3">
                                        <div className="position-absolute">
                                            <img src="/images/avtar/14.png" alt="Avtar"
                                                 className="w-40 h-40 bg-danger rounded"/>
                                        </div>
                                        <div className="ms-5">
                                            <p className="text-dark mb-0 font-weight-bold font-size-14">In addition,
                                                some additional blog content is displayed..</p>
                                            <div className="text-secondary text-end font-size-12">10 days ago</div>
                                        </div>
                                    </div>
                                    <div className="position-relative mb-3">
                                        <div className="position-absolute">
                                            <img src="/images/avtar/4.png" alt="Avtar"
                                                 className="w-40 h-40 bg-primary rounded"/>
                                        </div>
                                        <div className="ms-5">
                                            <p className="text-dark mb-0 font-weight-bold font-size-14">It also
                                                showcases the best tech deals, helping people make..</p>
                                            <div className="text-secondary text-end font-size-12">1 day ago</div>
                                        </div>
                                    </div>
                                    <div className="position-relative mb-3">
                                        <div className="position-absolute">
                                            <img src="/images/avtar/07.png" alt="Avatar 1" className="w-40 h-40 bg-success rounded"/>
                                        </div>
                                        <div className="ms-5">
                                            <p className="text-dark mb-0 f-w-500 f-s-14">
                                                Further down the page, more article headlines are sorted by the most..
                                            </p>
                                            <div className="text-secondary text-end f-s-12">5min ago</div>
                                        </div>
                                    </div>
                                    <div className="position-relative mb-3">
                                        <div className="position-absolute">
                                            <img src="/images/avtar/09.png" alt="Avatar 2" className="w-40 h-40 bg-dark rounded"/>
                                        </div>
                                        <div className="ms-5">
                                            <p className="text-dark mb-0 f-w-500 f-s-14">
                                                The blog also does a great job of emphasizing text readability..
                                            </p>
                                            <div className="text-secondary text-end f-s-12">5min ago</div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <Button color="primary" className="w-100">
                                            <i className="ti ti-plus"></i> View All
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md={6} lg={12}>
                            <Card>
                                <CardHeader>
                                    <h5>Popular Blog Tags</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="blog-tags d-flex gap-2 font-size-16 flex-wrap">
                                        <span className="badge text-light-dark">#Lifestyle</span>
                                        <span className="badge text-light-secondary">#Blogging</span>
                                        <span className="badge text-light-dark"> #beautiful</span>
                                        <span className="badge text-light-secondary">#DesignBlogger</span>
                                        <span className="badge text-light-dark"> #likeforlikes</span>
                                        <span className="badge text-light-dark"> #vlog</span>
                                        <span className="badge text-light-secondary"> #instafashion</span>
                                        <span className="badge text-light-dark"> #lifestyleblogger</span>
                                        <span className="badge text-light-secondary">#fashionista</span>
                                        <span className="badge text-light-dark"> #blogueira</span>
                                        <span className="badge text-light-dark">#bloggersofinstagram</span>
                                        <span className="badge text-light-dark"> #news</span>
                                        <span className="badge text-light-secondary"> #foodblogger</span>
                                        <span className="badge text-light-dark"> #vlog</span>
                                        <span className="badge text-light-secondary"> #instafashion</span>
                                        <span className="badge text-light-dark">#beauty</span>
                                        <span className="badge text-light-secondary"> #bloggerstyle</span>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md={6} lg={12}>
                            <Card>
                                <CardHeader>
                                    <h5>Subscribe</h5>
                                </CardHeader>
                                <CardBody>
                                    <Form className="app-form">
                                        <FormGroup>
                                            <Label for="email" className="font-weight-bold">Email</Label>
                                            <div className="input-group">
                                                <Input type="email" id="email" placeholder="@gmail.com"/>
                                                <Button color="primary" type="button">
                                                    <i className="ti ti-mail-fast fs-5"></i>
                                                </Button>
                                            </div>
                                        </FormGroup>
                                        <div className="mb-3">
                                            <p className="text-success">Subscribe to our newsletter and stay updated</p>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default BlogPost;