import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './contact.css'

import { Container, Col, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import logo from './assets/image/logo.png'
import footer_head from './assets/image/footer_head_@.png'
import contact_img from './assets/image/contact-img.jpg'

interface Props { }

function Contact(props: Props) {
    const { } = props;
    const [isScrolledPast, setIsScrolledPast] = useState(false);
    // Effect for header
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
                                    <Nav.Link href="#action3">Reality</Nav.Link>
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
            {/* Main */}
            <div className="contact-section">
                <Container>
                    <Row>
                        <div className="col-xl-5 col-12 ms-auto mb-5 ">
                            <div className="contact-main">
                                <p className='address'>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <span>470 Tran Dai Nghia, 
                                        <br /><span>    </span> Da Nang</span>
                                </p>
                                <p className='phone'>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <span>0236 3667 111</span> <br />
                                    <span>greenland@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-12 mx-auto">
                            <form action="#" className="contact-form custom-form">
                                <p style={{ color: "#315740" }}>Our contact</p>
                                <h2>Get in touch</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="first-name"
                                            id="first-name"
                                            placeholder="First Name"
                                            required={true}
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="last-name"
                                            id="last-name"
                                            placeholder="Last Name"
                                            required={true}
                                        />
                                    </div>
                                </div>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="example@gmail.com"
                                    required={true}
                                />
                                <textarea
                                    name="message"
                                    id="message"
                                    className="form-control"
                                    rows={5}
                                    placeholder="What can we help you?"
                                    defaultValue={""}
                                />
                                <button type='submit' className="button button-left">Send Message</button>
                            </form>
                        </div>
                    </Row>
                </Container>
            </div>
            {/* End main */}
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
                                        <FontAwesomeIcon className='icon' icon={faFacebookF} />
                                        <FontAwesomeIcon className='icon' icon={faInstagram} />
                                        <FontAwesomeIcon className='icon' icon={faTwitter} />
                                        <FontAwesomeIcon className='icon' icon={faLinkedin} />
                                    </div>
                                </Col>
                                <Col lg={2} xs={6}>
                                    <ul>
                                        <li className='head'><b>Navigation</b></li>
                                        <li>About us</li>
                                        <li>Current Situation</li>
                                        <li>Wildlife's List</li>
                                        <li>Contact</li>
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
                                            <input type="email" name="" id="" placeholder='Your email' />
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
}

export default Contact;