import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import '@fortawesome/fontawesome-free/css/all.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft, faAngleRight, faHeart, faCircleCheck, faLock } from '@fortawesome/free-solid-svg-icons'

import logo from './assets/image/logo.png';
import http from './assets/image/http.png'
import project_1 from './assets/image/project_1.jpg';
import project_2 from './assets/image/project_2.jpg';
import project_3 from './assets/image/project_3.jpg';
import footer_head from './assets/image/footer_head.png';

import './donation.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Donation: React.FC = () => {
    const [isScrolledPast, setIsScrolledPast] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const isPast = window.scrollY > 0;
            setIsScrolledPast(isPast);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // React Slick
    var settings = {
        infinite: false,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
        nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
    };

    return (
        <>
            {/* Header*/}
            {['lg'].map((expand) => (
                <Navbar className={`fixed-top ${isScrolledPast ? 'scrolled-past' : ''}`} key={expand} expand={expand}>
                    <Container>
                        <Navbar.Brand className='logo' href="#">
                            <img src={logo} alt="" />
                            <div className='brand-name'>GREEN LAND</div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title className='logo' id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img src={logo} alt="" />
                                    <div className='brand-name'>GREEN LAND</div>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1">
                                    <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                                    <Nav.Link as={NavLink} to="/about-us" >About us</Nav.Link>
                                    <Nav.Link as={NavLink} to="/reality">Reality</Nav.Link>
                                    <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                                    <Nav.Link as={NavLink} to="/donate">
                                        <button className='button button-left'>Donate</button>
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            {/* End Header*/}
            {/* Project */}
            <div id="project">
                <Container>
                    <Slider {...settings} >
                        <div>
                            <Row>
                                <Col lg={7}>
                                    <img src={project_1} alt="" />
                                </Col>
                                <Col lg={5}>
                                    <h2>Nature's Keepers <br />
                                        Project
                                    </h2>
                                    <p>Safeguarding our planet's biodiversity and ecosystems for future generations!</p>

                                    <ProgressBar now={70} />
                                    <div className="status">
                                        <div className='donated'>70% Donated</div>
                                        <div className='goal'>Goal: 100,000,000 VND</div>
                                    </div>
                                    <hr />
                                    <ul className='socials-list'>
                                        <li>
                                            <a href="https://www.facebook.com/" target='_blank'>
                                                <FontAwesomeIcon className='icon' icon={faFacebookF} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/">
                                                <FontAwesomeIcon className='icon' icon={faInstagram} />
                                            </a>

                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/">
                                                <FontAwesomeIcon className='icon' icon={faLinkedin} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://x.com/?lang=vi">
                                                <FontAwesomeIcon className='icon' icon={faTwitter} />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="button-group">
                                        <Nav.Link as={NavLink} to="/payment/project1">
                                            <button className='button button-left'>Donate now </button>
                                        </Nav.Link>
                                        <div className='follow'>
                                            <a href="https://www.facebook.com/" target='_blank'>
                                                <button>
                                                    <FontAwesomeIcon icon={faHeart} />
                                                    <span>Follow</span>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col lg={7}>
                                    <img src={project_2} alt="" />
                                </Col>
                                <Col lg={5}>
                                    <h2>Forest's Friend <br />
                                        Project
                                    </h2>
                                    <p>Dedicated to protecting and restoring forests, ensuring a sustainable future for our planet and its wildlife!</p>

                                    <ProgressBar now={100} />
                                    <div className="status">
                                        <div className='donated'>100% Donated</div>
                                        <div className='goal'>Goal: 500,000,000 VND</div>
                                    </div>
                                    <hr />
                                    <ul className='socials-list'>
                                        <li>
                                            <a href="https://www.facebook.com/" target='_blank'>
                                                <FontAwesomeIcon className='icon' icon={faFacebookF} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/">
                                                <FontAwesomeIcon className='icon' icon={faInstagram} />
                                            </a>

                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/">
                                                <FontAwesomeIcon className='icon' icon={faLinkedin} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://x.com/?lang=vi">
                                                <FontAwesomeIcon className='icon' icon={faTwitter} />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="button-group">
                                        <Nav.Link as={NavLink} to="/payment/project2">
                                            <button className='button button-left'>Donate now </button>
                                        </Nav.Link>
                                        <div className='follow'>
                                            <a href="https://www.facebook.com/" target='_blank'>
                                                <button>
                                                    <FontAwesomeIcon icon={faHeart} />
                                                    <span>Follow</span>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col lg={7}>
                                    <img src={project_3} alt="" />
                                </Col>
                                <Col lg={5}>
                                    <h2>EcoProtect Alliance <br />
                                        Project
                                    </h2>
                                    <p>Uniting communities to conserve natural resources, combat climate change, and promote sustainable living for a healthier planet!</p>

                                    <ProgressBar now={40} />
                                    <div className="status">
                                        <div className='donated'>40% Donated</div>
                                        <div className='goal'>Goal: 100,000,000,000 VND</div>
                                    </div>
                                    <hr />
                                    <ul className='socials-list'>
                                        <li>
                                            <a href="https://www.facebook.com/" target='_blank'>
                                                <FontAwesomeIcon className='icon' icon={faFacebookF} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/">
                                                <FontAwesomeIcon className='icon' icon={faInstagram} />
                                            </a>

                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/">
                                                <FontAwesomeIcon className='icon' icon={faLinkedin} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://x.com/?lang=vi">
                                                <FontAwesomeIcon className='icon' icon={faTwitter} />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="button-group">
                                        <Nav.Link as={NavLink} to="/payment/project3">
                                            <button className='button button-left'>Donate now </button>
                                        </Nav.Link>
                                        <div className='follow'>
                                            <a href="https://www.facebook.com/" target='_blank'>
                                                <button>
                                                    <FontAwesomeIcon icon={faHeart} />
                                                    <span>Follow</span>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </div>
            {/* End Project */}
            {/* Story */}
            <div id="story">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <h4>How did this come to our attention?</h4>
                            <p>
                                This awareness has been driven by a growing acknowledgment of the intricate relationship between human actions and the vitality of wildlife. Through scientific research, ecological assessments, and observations of environmental shifts, we've come to realize the profound impact of our activities on wildlife populations, habitats, and ecosystems. Rising concerns over escalating rates of species extinction, habitat loss, and ecosystem degradation have propelled wildlife conservation to the forefront of global attention. Conservation organizations, researchers, and individuals have fervently advocated for the protection and preservation of our planet's diverse wildlife. </p>
                            <p>
                                Moreover, as societies grasp the intrinsic value of biodiversity and the essential ecosystem services provided by wildlife, there's been a surge in efforts to integrate wildlife conservation into policies, education, and daily practices. Ultimately, the recognition of wildlife conservation's pivotal role in sustaining ecological equilibrium and supporting human well-being has sparked a collective commitment to address this critical issue.
                            </p>
                            <div className='line'></div>
                            <div className="slogan">
                                Wildlife conservation, habitat preservation, and biodiversity education are fundamental necessities for a thriving ecosystem and a sustainable future.
                            </div>
                            <ul>
                                <li>
                                    <FontAwesomeIcon className='icon' icon={faCircleCheck} />
                                    <span>
                                        Protect and Restore Natural Habitats
                                    </span>
                                </li>
                                <li>
                                    <FontAwesomeIcon className='icon' icon={faCircleCheck} />
                                    <span>
                                        Research and Monitor Wildlife
                                    </span>
                                </li>
                                <li>
                                    <FontAwesomeIcon className='icon' icon={faCircleCheck} />
                                    <span>
                                        Educate and Raise Public Awareness
                                    </span>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={5}>
                            <div className="box">
                                <div className="content">
                                    <p>Want to donate by phone?</p>
                                    <br />
                                    <span>Not a problem. Call us now</span>
                                    <p>0236-3667-111</p>
                                    <br />
                                    <span>Or email us:</span>
                                    <p>greenland@gmail.com</p>
                                </div>
                            </div>
                            <div className="secure">
                                <img src={http} alt="" />
                                <p className='title'>Donate online safely</p>
                                <p className='descript'>The payment is encrypted and transmitted securely with an SSL protocol.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="video">
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <p className='title-head'>THE STORIES OF US</p>
                                <h2 className='title-main'>How did this come to our attention?</h2>
                                <span>This issue came to our attention through alarming rates of species extinction, habitat destruction, and scientific research highlighting the crucial impact of human activities on wildlife and ecosystems. </span>
                                <Nav.Link as={NavLink} to='/about-us'>
                                    <button>Explore</button>
                                </Nav.Link>
                            </Col>
                            <Col lg={6}>
                                <iframe
                                    width="100%"
                                    height="400"
                                    src={`https://www.youtube.com/embed/E4JKRaxr8zE?si=QQINO5xJu8AZZWzO`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            {/* End story */}
            {/* FAQ */}
            <div id="faq">
                <Container>
                    <h3>FAQ</h3>
                    <Row>
                        <Col lg={6}>
                            <p className='quest'>
                                What is wildlife conservation?
                            </p>
                            <p className='ans'>
                                - Wildlife conservation involves protecting animal species and their habitats to ensure their survival and biodiversity.
                            </p>
                            <hr />
                            <p className='quest'>
                                How did wildlife conservation become important?
                            </p>
                            <p className='ans'>
                                - The significance of wildlife conservation emerged as industrialization and urban expansion led to habitat destruction and species decline, raising awareness about the need to protect our natural heritage.
                            </p>
                            <hr />
                            <p className='quest'>
                                How do you ensure my donations to wildlife conservation are used effectively?
                            </p>
                            <p className='ans'>
                                - We have rigorous monitoring and evaluation processes to ensure that donations directly support conservation projects, research, and community engagement efforts.
                            </p>
                            <hr />
                            <p className='quest'>
                                How do you identify which species need help?
                            </p>
                            <p className='ans'>
                                - We collaborate with scientists and researchers who conduct field studies and assessments to identify endangered species and prioritize them for conservation efforts.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <p className='quest'>
                                Is my donation to wildlife conservation tax-deductible?
                            </p>
                            <p className='ans'>
                                - Yes, donations are typically tax-deductible if you are in the U.S. and donate to a registered non-profit organization.
                            </p>
                            <hr />
                            <p className='quest'>
                                Where does my donation actually go?
                            </p>
                            <p className='ans'>
                                - Donations are allocated to on-the-ground conservation projects, research initiatives, habitat restoration, and community education programs to maximize their impact.
                            </p>
                            <hr />
                            <p className='quest'>
                                How do you choose locations for conservation projects?
                            </p>
                            <p className='ans'>
                                - We select locations based on scientific research, biodiversity hotspots, and areas where human-wildlife conflict is high, ensuring our efforts make a significant impact.
                            </p>
                            <hr />
                            <p className='quest'>
                                What percentage of my donation goes towards conservation programs?
                            </p>
                            <p className='ans'>
                                - A substantial percentage of your donation goes directly to conservation programs, with minimal overhead costs, ensuring maximum benefit to wildlife.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* End FAQ */}
            {/* Footer */}
            <div id="footer">
                <div className='footer-head'>
                    <img src={footer_head} alt="" />
                </div>
                <div className="footer_main">
                    <Container>
                        <div className="inner-main">
                            <Row>
                                <Col lg={4} sm={12}>
                                    <h2>GREEN LAND</h2>
                                    <p>Help Green Land come together to protect what’s ours. Together we can stop poaching and save the animals from extinction. Place the animals in safe hands.</p>
                                    <div className="contact-list">
                                        <a href="https://www.facebook.com/" target='_blank'>
                                            <FontAwesomeIcon className='icon' icon={faFacebookF} />
                                        </a>
                                        <a href="https://www.instagram.com/" target='blank'>
                                            <FontAwesomeIcon className='icon' icon={faInstagram} />
                                        </a>
                                        <a href="https://x.com/?lang=vi" target='blank'>
                                            <FontAwesomeIcon className='icon' icon={faTwitter} />
                                        </a>
                                        <a href="https://www.linkedin.com/" target='blank'>
                                            <FontAwesomeIcon className='icon' icon={faLinkedin} />
                                        </a>
                                    </div>
                                </Col>
                                <Col lg={2} xs={6}>
                                    <ul>
                                        <li className='head'><b>Navigation</b></li>
                                        <li>
                                            <Link to='/home'>Home</Link>
                                        </li>
                                        <li>
                                            <Link to='/about-us'>About us</Link>
                                        </li>
                                        <li>
                                            <Link to='/reality'>Reality</Link>
                                        </li>
                                        <li>
                                            <Link to='/contact'>Contact</Link>
                                        </li>
                                        <li>
                                            <Link to='/donate'>Donate</Link>
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={3} xs={6}>
                                    <ul>
                                        <li className='head'><b>Contact</b></li>
                                        <li>Phone: 0236 3667 111</li>
                                        <li>Email: greenland@gmail.com</li>
                                        <li>Address: <br />
                                            470 Tran Dai Nghia, Hoa Quy, Ngu Hanh Son, Da Nang</li>
                                    </ul>
                                </Col>
                                <Col lg={3} sm={12}>
                                    <ul>
                                        <li className='head'><b>Mailbox</b></li>
                                        <li>Please enter your Email to receive our latest notifications!</li>
                                        <li className='email-input'>
                                            <form action="">
                                                <input type="email" name="" id="" placeholder='Your email' />
                                                <button>Send</button>
                                            </form>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                            <hr />
                            <div className="copyright-box">
                                <div className="content">
                                    Copyright &copy; Green Land since 2014
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            {/* Footer */}
        </>
    );
};

export default Donation;
