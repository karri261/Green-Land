import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './homepage.css'

import { Container, Row, Col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from './assets/image/logo.png'
import about_1 from './assets/image/about-1.jpg'
import section_4_1 from './assets/image/section_4_1.jpeg'
import section_4_2 from './assets/image/section_4_2.jpg'
import section_4_3 from './assets/image/section_4_3.jpg'
import section_4_4 from './assets/image/section_4_4.jpg'
import section_4_5 from './assets/image/section_4_5.png'
import footer_head from './assets/image/footer_head.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import AOS from 'aos';
import 'aos/dist/aos.css';

interface Props { }

function HomePage(props: Props) {
   const { } = props

   const [isScrolledPast, setIsScrolledPast] = useState(false);

   // Effect for hero section
   useEffect(() => {
      function onMouseMove(e: any) {
         document.documentElement.style.setProperty("--cursor-x", e.clientX + 'px');
         document.documentElement.style.setProperty("--cursor-y", e.clientY + 'px');
      }

      window.addEventListener('mousemove', onMouseMove);

      return (() => {
         window.removeEventListener('mousemove', onMouseMove)
      })
   }, [])

   function onMouseEnter() {
      document.documentElement.style.setProperty("--cursor-size", "400px");
   }

   function onMouseLeave() {
      document.documentElement.style.setProperty("--cursor-size", "42px");
   }
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
   // React Slick
   var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 798,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
      ],
      prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
      nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
   };

   // Animation on Scroll
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: true,
      });
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
                           <Nav.Link href="#home" className='active'>Home</Nav.Link>
                           <Nav.Link as={NavLink} to="/about-us" >About us</Nav.Link>
                           <Nav.Link href="#action3">Current Situation</Nav.Link>
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
         {/* Hero Section */}
         <div className="hero-section">
            <div className="layer layer-01">
               <div className="text-container text-01" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <div>VARIETY</div>
                  <div>IS THE</div>
                  <div>SPICE</div>
                  <div>OF THE</div>
                  <div>LIFE!</div>
               </div>
            </div>
            <div className="layer layer-02">
               <div className="text-container">
                  <div>KEEP </div>
                  <div>VARIETY</div>
                  <div>AND</div>
                  <div>PREVENT</div>
                  <div>ANXIETY!</div>
               </div>
            </div>
         </div>
         {/*End Hero Section */}
         {/* Section 01 */}
         <div id="section-1">
            <Container>
               <Row>
                  <Col lg={6}>
                     <div className="image-box" data-aos="flip-left">
                        <div className="shape"></div>
                        <div className="image">
                           <img src={about_1} alt="" />
                        </div>
                     </div>
                  </Col>
                  <Col lg={6}>
                     <div className="content-box" data-aos="fade-left">
                        <h2>WELCOME TO GREEN LAND</h2>
                        <h4>Help us to protect wildlife around the world.</h4>
                        <p>We are an organization dedicated to protecting and preserving the biodiversity of our planet. Our mission is to save species from extinction and safeguard their natural habitats. We strive to raise public awareness and promote sustainable conservation measures through our relentless efforts.
                        </p>
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
                        <button className='button button-left'>
                           Discover more
                        </button>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
         {/* End section 1 */}
         {/* Section-2 */}
         <div id="section-2">
            <Container>
               <h2 data-aos="fade-up">OUR LATEST NEW</h2>
               <div data-aos="fade-left">
                  <Slider {...settings} >
                     <div className='inner-box'>
                        <div className="box-header">
                           <div className="main-img">
                              <a href="#" target='_blank'>
                                 <img src={section_4_1} alt="" />
                              </a>
                           </div>
                           <div className="date-box">
                              <p>13</p>
                              <span>Mar</span>
                           </div>
                        </div>
                        <div className="title">
                           <a href="#">
                              TRAINING ON FOREST AND WILDLIFE PROTECTION COMMUNICATION
                           </a>
                        </div>
                        <div className="description">
                           The local communities, those who live near...
                        </div>
                     </div>
                     <div className='inner-box'>
                        <div className="box-header">
                           <div className="main-img">
                              <a href="#" target='_blank'>
                                 <img src={section_4_2} alt="" />
                              </a>
                           </div>
                           <div className="date-box">
                              <p>27</p>
                              <span>Jan</span>
                           </div>
                        </div>
                        <div className="title">
                           <a href="#">
                              MORE THAN 1,200 PEOPLE COMMITTED TO NOT USE ILLEGAL WILDLIFE
                           </a>
                        </div>
                        <div className="description">
                           In order to encourage people living in the buffer zone ...
                        </div>
                     </div>
                     <div className='inner-box'>
                        <div className="box-header">
                           <div className="main-img">
                              <a href="#" target='_blank'>
                                 <img src={section_4_3} alt="" />
                              </a>
                           </div>
                           <div className="date-box">
                              <p>04</p>
                              <span>Dec</span>
                           </div>
                        </div>
                        <div className="title">
                           <a href="#">
                              RELEASING 65 BIG TURTLES
                           </a>
                        </div>
                        <div className="description">
                           These turtles are important as they are the first...
                        </div>
                     </div>
                     <div className='inner-box'>
                        <div className="box-header">
                           <div className="main-img">
                              <a href="#" target='_blank'>
                                 <img src={section_4_4} alt="" />
                              </a>
                           </div>
                           <div className="date-box">
                              <p>11</p>
                              <span>Nov</span>
                           </div>
                        </div>
                        <div className="title">
                           <a href="#" target='_blank'>
                              RESUED PANGOLIN RELEASED BACK INTO THE WILD
                           </a>
                        </div>
                        <div className="description">
                           This is the second pangolin found in the past two months....
                        </div>
                     </div>
                     <div className='inner-box'>
                        <div className="box-header">
                           <div className="main-img">
                              <a href="#" target='_blank'>
                                 <img src={section_4_5} alt="" />
                              </a>
                           </div>
                           <div className="date-box">
                              <p>23</p>
                              <span>Dec</span>
                           </div>
                        </div>
                        <div className="title">
                           <a href="#" target='_blank'>
                              SAVING WILDLIFE BY PROMOTING ECO-TOURISM
                           </a>
                        </div>
                        <div className="description">
                           As our awareness of environmental issues continues to grow...
                        </div>
                     </div>
                  </Slider>
               </div>
               <div className="button">
                  <button className='button button-left'>
                     <a href="#">VIEW ALL</a>
                  </button>
               </div>
            </Container>
         </div>
         {/* End section 2 */}
         {/* Section 3 */}
         <div id="section-3">
            <Container>
               <div className="inner-main">
                  <div className="inner-content">
                     <h2>VOLUNTEER WITH US</h2>
                     <p>If you cut a tree, you kill a life. If you save a tree, you save a life. If you plant a tree, you plant a life.</p>
                     <div className="button" data-aos="zoom-in">
                        <button className='button button-left'>
                           <a href="#">SUBSCRIBE NOW</a>
                        </button>
                     </div>
                  </div>
               </div>
            </Container>
         </div>
         {/* End section 3 */}
         {/* Footer */}
         <div id="section-6">
            <div className="footer-head">
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

export default HomePage;

