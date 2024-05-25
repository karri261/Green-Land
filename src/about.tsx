import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './about.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logo from './assets/image/logo.png';
import journey_1 from './assets/image/journey-1.jpg'
import journey_2 from './assets/image/journey-2.jpg'
import leader_1 from './assets/image/leader1.jpg'
import leader_2 from './assets/image/leader2.jpg'
import leader_3 from './assets/image/leader3.jpg'
import end_1 from './assets/image/about_end_1.png'
import footer_head from './assets/image/footer_head.png'

interface Props { }

function About(props: Props) {
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

    // Animation on Scroll
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    // Journey
    const spaceHolderRef = useRef<HTMLDivElement | null>(null);
    const horizontalRef = useRef<HTMLDivElement | null>(null);
    const stickyRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const spaceHolder = spaceHolderRef.current;
        const horizontal = horizontalRef.current;
        const sticky = stickyRef.current;

        if (spaceHolder && horizontal && sticky) {
            spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

            const handleScroll = () => {
                horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
            };

            const handleResize = () => {
                spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
            };

            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const calcDynamicHeight = (ref: HTMLDivElement) => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const objectWidth = ref.scrollWidth;
        return objectWidth - vw + vh + 150;
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
                                    <Nav.Link as={NavLink} to="/home"> Home</Nav.Link>
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
            {/* Hero */}
            <div id="hero-section">
                <Container>
                    <p style={{ color: '#315740', fontWeight: '800', marginLeft: '10px' }}>Explore our story</p>

                    <h1>
                        <span style={{ color: '#315740' }}>A</span> <span style={{ color: '#232323' }}>NEW</span> <span style={{ color: '#315740' }}>JOURNEY</span> <br />
                        <span style={{ color: '#232323' }}>IN</span> <span style={{ color: '#315740' }}>WILDLIFE</span> <br />
                        <span style={{ color: '#232323' }}>EXPERIENCE</span>
                    </h1>
                    <button className="button button-left">
                        <a href="#about">Let's explore</a>
                    </button>
                </Container>
            </div>
            {/* End hero */}
            {/* About us */}
            <div id="about">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="image-box" data-aos="flip-left">
                                <img src='https://fastwpdemo.com/newwp/weldlfe/wp-content/uploads/2022/05/about-3.jpg' alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="content-box" data-aos="flip-left">
                                <h2>GET TO KNOW <br />
                                    ABOUT GREEN LAND</h2>
                                <h4>Dedicated to wildlife preservation and environmental education through community collaboration.</h4>
                                <p>Our organization was established in 2014 with the primary goal of protecting wildlife and their habitats.
                                    Our mission arose from the pressing need to conserve biodiversity, which has been threatened by human activities.
                                    Our mission is to protect wildlife and their habitats while promoting environmental awareness.
                                </p>
                                <button className='button button-left'>
                                    <a href="#journey">Discover more</a>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* End about us */}
            {/* Journey */}
            <div id="journey">
                <div className="container">
                    <div className="space-holder" ref={spaceHolderRef}>
                        <h2>OUR JOURNEY</h2>
                        <div className="sticky" ref={stickyRef}>
                            <div className="horizontal" ref={horizontalRef}>
                                <section role="feed" className="cards">
                                    <div className="sample-card">
                                        <div className="box-header">
                                            <div className="main-img">
                                                <a href="#" target='_blank'>
                                                    <img src={journey_1} alt="" />
                                                </a>
                                            </div>
                                            <div className="date-box">
                                                <p>03</p>
                                                <span>2014</span>
                                            </div>
                                        </div>
                                        <div className="title">
                                            <a href="#">
                                                FOUNDATING GREEN LAND
                                            </a>
                                        </div>
                                    </div>
                                    <div className="sample-card">
                                        <div className="box-header">
                                            <div className="main-img">
                                                <a href="#" target='_blank'>
                                                    <img src={journey_2} alt="" />
                                                </a>
                                            </div>
                                            <div className="date-box">
                                                <p>05</p>
                                                <span>2015</span>
                                            </div>
                                        </div>
                                        <div className="title">
                                            <a href="#">
                                                LAUNCH AN ACTION CAMPAIGN FOR WILDLIFE
                                            </a>
                                        </div>
                                    </div>
                                    <div className="sample-card">
                                        <div className="box-header">
                                            <div className="main-img">
                                                <a href="#" target='_blank'>
                                                    <img src={'https://c8.alamy.com/comp/2KYHG7F/world-wildlife-day-on-march-3rd-to-raise-animal-awareness-plant-and-preserve-their-habitat-in-forest-in-flat-cartoon-hand-drawn-template-illustration-2KYHG7F.jpg'} alt="" />
                                                </a>
                                            </div>
                                            <div className="date-box">
                                                <p>06</p>
                                                <span>2016</span>
                                            </div>
                                        </div>
                                        <div className="title">
                                            <a href="#">
                                                "DAY FOR WILDLIDE" CAMPAIGN
                                            </a>
                                        </div>
                                    </div>
                                    <div className="sample-card">
                                        <div className="box-header">
                                            <div className="main-img">
                                                <a href="#" target='_blank'>
                                                    <img src={'https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2022/07/fist-bump-teamwork-hands-in-0725221.jpg'} alt="" />
                                                </a>
                                            </div>
                                            <div className="date-box">
                                                <p>03</p>
                                                <span>2017</span>
                                            </div>
                                        </div>
                                        <div className="title">
                                            <a href="#">
                                                COOPERATE WITH WWF
                                            </a>
                                        </div>
                                    </div>
                                    <div className="sample-card">
                                        <div className="box-header">
                                            <div className="main-img">
                                                <a href="#" target='_blank'>
                                                    <img src={'https://365give.ca/wp-content/uploads/2023/08/Small-Steps-Big-Impact.png'} alt="" />
                                                </a>
                                            </div>
                                            <div className="date-box">
                                                <p>12</p>
                                                <span>2018</span>
                                            </div>
                                        </div>
                                        <div className="title">
                                            <a href="#">
                                                EARTH DAY ACTIVITIES
                                            </a>
                                        </div>
                                    </div>
                                    <div className="sample-card">
                                        <div className="box-header">
                                            <div className="main-img">
                                                <a href="#" target='_blank'>
                                                    <img src={'https://www.balisafarimarinepark.com/wp-content/uploads/2022/09/64149287_medium.jpg'} alt="" />
                                                </a>
                                            </div>
                                            <div className="date-box">
                                                <p>03</p>
                                                <span>2024</span>
                                            </div>
                                        </div>
                                        <div className="title">
                                            <a href="#">
                                                10 YEARS ANIVERARY OF GREEN LAND
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End journey */}
            {/* Team */}
            <div id="team">
                <Container>
                    <h2>OUR LEADERS</h2>
                    <Row className='team-member'>
                        <Col lg={4} sm={7} className='leader-infor'>
                            <div className="image" data-aos="flip-left">
                                <img src={leader_1} alt="" />
                            </div>
                            <span className="cards__rect-1">
                                <span className="shadow-1"></span>
                                <p>CMO Thanh Tri</p>
                            </span>
                            <span className="cards__rect-2"></span>
                        </Col>
                        <Col lg={4} sm={8} className='leader-infor'>
                            <div className="image" data-aos="flip-right">
                                <img src={leader_2} alt="" />
                            </div>
                            <span className="cards__rect-1">
                                <span className="shadow-1"></span>
                                <p>CEO Duc Trien</p>
                            </span>
                            <span className="cards__rect-2"></span>
                        </Col>
                        <Col lg={4} sm={8} className='leader-infor'>
                            <div className="image" data-aos="flip-left">
                                <img src={leader_3} alt="" />
                            </div>
                            <span className="cards__rect-1">
                                <span className="shadow-1"></span>
                                <p>CFO Xuan Quynh</p>
                            </span>
                            <span className="cards__rect-2"></span>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* End team */}
            {/* Join */}
            <div id="join">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <div className="content-box" data-aos="flip-left">
                                <p className='head-title'>VOLUNTEER FOR THE CAMPAIGN</p>
                                <h2>JOIN OUR TEAM <br />
                                    AND SAVE THE WILDLIFE!</h2>
                                <p className='infor'>We protect wildlife for many reasons. It is a source of inspiration. It nurtures a sense of wonder. It is integral to the balance of nature.
                                    <br />In our work, Green Land focuses on saving populations of the most ecologically, economically and culturally important species in the wild. <br />
                                    Ultimately, by protecting species, we save this beautiful, vulnerable and utterly irreplaceable planet we call home.
                                </p>
                                <Link to='/contact' className='button button-left'>
                                    Join with us
                                </Link>
                            </div>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={4}>
                            <div className="image-list">
                                <img src={'https://baolamdong.vn/file/e7837c02845ffd04018473e6df282e92/092023/hinh_5_20230907082749_20230907084247.jpg'} alt="" data-aos="fade-left" />
                                <img src={end_1} alt="" data-aos="fade-right" />
                                <img src={'https://vcdn1-giadinh.vnecdn.net/2024/04/10/image002-3224-1712748148.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=Ber-r6cyiK-4hQmVfhDMbA'} alt="" data-aos="fade-left" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* End join */}
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

export default About;