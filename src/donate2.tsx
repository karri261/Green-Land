import { useState, useEffect, SetStateAction } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import './donate.css';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import { Container, Row, Col, } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

import project_1 from './assets/image/project_1.jpg'
import project_2 from './assets/image/project_2.jpg'
import project_3 from './assets/image/project_3.jpg'
import vnpay from './assets/image/vnpay.png'
import logo from './assets/image/logo.png';
import footer_head from './assets/image/footer_head.png'

interface Props { }

function Donate2(props: Props) {
    const { } = props;

    const [isScrolledPast, setIsScrolledPast] = useState(false);
    const navigate = useNavigate();

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

    // Donate Method
    const [donateMethod, setDonateMethod] = useState('');

    const handleDonateMethodChange = (method: SetStateAction<string>) => {
        setDonateMethod(method);
    };

    useEffect(() => {
        setDonateMethod('online');
    }, []);

    // Donate
    const [amount, setAmount] = useState<number>(0);
    const [locale, setLocale] = useState<string>('en');

    const handleDonate = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/payment/create_payment_url', {
                amount,
                locale
            });
            window.location.href = response.data.redirectUrl;
        } catch (error) {
            console.error('Payment error:', error);
        }
    };

    const [showAlert, setShowAlert] = useState(false);

    const handleDonateNow = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false); // Tắt alert sau 3 giây
            navigate('/donate'); // Chuyển hướng sau 3 giây
        }, 2000);
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
            {/* Hero section */}
            <div id="hero">
                <Container>
                    <h1>MAKE A DONATION</h1>
                </Container>
            </div>
            {/* End hero section */}
            {/* Donate */}
            <div id="main">
                <Container>
                    <Row>
                        <Col xl={3} className='image'>
                            <img src={project_2} alt="" />
                        </Col>
                        <Col xl={4} className='content'>
                            <h6>YOU ARE DONATING TO:</h6>
                            <h4>Forest's Friendst</h4>
                            <p>Dedicated to protecting and restoring forests, ensuring a sustainable future for our planet!</p>
                            <ul className='socials-list'>
                                <li>
                                    <FontAwesomeIcon className='icon' icon={faFacebookF} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className='icon' icon={faInstagram} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className='icon' icon={faLinkedin} />
                                </li>
                                <li>
                                    <FontAwesomeIcon className='icon' icon={faTwitter} />
                                </li>
                            </ul>
                        </Col>
                        <Col xl={5}>
                            <div className="donate-box">
                                <div>
                                    <label>Enter Donation Amount: </label>
                                    <br />
                                    <input
                                        className='amount'
                                        type="number"
                                        placeholder='Amount (VND)'
                                        value={amount}
                                        onChange={(e) => setAmount(parseInt(e.target.value))} />
                                </div>
                                <Row>
                                    <Col md={6}>
                                        <div className="form-check form-check-radio">
                                            <input
                                                type="radio"
                                                name='donate-method'
                                                className="form-check-input"
                                                required={true}
                                                checked={donateMethod === 'online'}
                                                onChange={() => handleDonateMethodChange('online')} />
                                            <label
                                                className="form-check-label"
                                                htmlFor="online"
                                            >
                                                Donate Online
                                            </label>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-check form-check-radio">
                                            <input
                                                type="radio"
                                                name='donate-method'
                                                className="form-check-input"
                                                required={true}
                                                onChange={() => handleDonateMethodChange('offline')} />
                                            <label
                                                className="form-check-label"
                                                htmlFor="offline"
                                            >
                                                Donate Offline
                                            </label>
                                        </div>
                                    </Col>
                                </Row>
                                {donateMethod === 'offline' && (
                                    <div className="offline-content">
                                        <div className='title'>PAYMENT METHOD</div>
                                        <div className='main-content'>
                                            * By clicking the donate button, your record will be stored in our database as pending transaction. After your payment verifed, we will send receipt to your email,
                                        </div>
                                        <br />
                                        <button className='button button-left' onClick={handleDonateNow}>Donate now</button>
                                    </div>
                                )}
                                {donateMethod === 'online' && (
                                    <div className="online-content">
                                        <div className='title'>PAYMENT METHOD</div>
                                        <img src={vnpay} alt="" />
                                        <br />
                                        <button className='button button-left' onClick={handleDonate}>Donate now</button>
                                    </div>
                                )}
                                {showAlert && (
                                    <Alert className="alert-position" variant="success" onClose={() => setShowAlert(false)} dismissible>
                                        Donation successful! Thank you for your contribution.
                                    </Alert>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Project's description */}
            <div id="des">
                <Container>
                    <Row>
                        <Col xl={7} className='descript'>
                            <h3>INTRODUCING THE FOREST'S FRIENDS</h3>
                            <p>
                                Our mission is simple yet profound: to be the best friend the forest can have by ensuring its health, biodiversity, and resilience for future generations. Our project focuses on a holistic approach to forest conservation. We work tirelessly to restore degraded forest areas, protect existing ones, and promote sustainable practices that benefit both the environment and local communities. Through reforestation efforts, habitat preservation, and education, we aim to combat deforestation and foster a deep connection between people and nature.
                            </p>
                            <p>
                                At the core of the Forest Friend Project is a belief in the power of collective action. We collaborate with environmentalists, scientists, volunteers, and indigenous communities to create a network of dedicated forest friends. Together, we champion the cause of our planet's lungs, ensuring they continue to provide clean air, rich biodiversity, and natural beauty.
                            </p>
                            <p>
                                Join us in the Forest Friend Project and become a guardian of the green. Together, we can nurture the forests that nurture us all!
                            </p>
                            <hr />
                        </Col>
                        <Col md={7} >
                            <h4>Our Promise to You</h4>
                            <p className='promise'>
                                Without your loyal support, we couldn’t do the vital work we do. That’s why we promise to uphold the highest ethical standards. You can send through any feedback or grievances here.
                            </p>
                        </Col>
                    </Row>

                </Container>
            </div >
            {/* End project's description */}
            {/* End section Donate */}
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
}

export default Donate2;
