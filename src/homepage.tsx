import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './homepage.css'

import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faCircleCheck, faCircleDollarToSlot, faHourglassStart, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from './assets/image/logo.png'
import about_1 from './assets/image/about-1.jpg'
import section_7_1 from './assets/image/section_4_1.jpeg'
import section_7_2 from './assets/image/section_4_2.jpg'
import section_7_3 from './assets/image/section_4_3.jpg'
import section_7_4 from './assets/image/section_4_4.jpg'
import section_7_5 from './assets/image/section_4_5.png'
import project_1 from './assets/image/project_1.jpg'
import project_2 from './assets/image/project_2.jpg'
import project_3 from './assets/image/project_3.jpg'
import footer_head from './assets/image/footer_head.png'

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

   var settings2 = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               initialSlide: 1
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
      ],
   };

   // Animation on Scroll
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: true,
      });
   }, []);

   // Impact effect
   useEffect(() => {
      let countTriggered = false;

      const handleScroll = () => {
         if (!countTriggered && isInViewport(document.getElementById('impact') as HTMLElement)) {
            countTriggered = true;
            countUp('yearCount', 9);
            countUp('partnerCount', 53);
            countUp('projectCount', 48);
            countUp('memberCount', 5);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const isInViewport = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;

      const verticallyVisible = rect.top <= windowHeight && rect.bottom >= 0;
      const horizontallyVisible = rect.left <= windowWidth && rect.right >= 0;

      return verticallyVisible && horizontallyVisible;
   };

   const countUp = (id: string, target: number) => {
      let current = 0;
      const increment = Math.ceil(target / 10);
      const interval = setInterval(() => {
         if (current >= target) {
            clearInterval(interval);
         } else {
            current += increment;
            const element = document.getElementById(id);
            if (element) {
               element.textContent = current.toLocaleString();
            }
         }
      }, 100);
   };

   // Donate


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
                  <div>EXTINCTION!</div>
               </div>
            </div>
         </div>
         {/*End Hero Section */}
         {/* Section Introduce */}
         <div id="introduce">
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
                     <div className="content-box" data-aos="flip-left">
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
                        <Link to="/about-us" className='button button-left'>
                           Discover more
                        </Link>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
         {/* End Introduce */}
         {/* Section impact */}
         <div id="impact">
            <Container>
               <div className="inner-content">
                  <h2>OUR IMPACT</h2>
                  <ul className="inner-infor">
                     <li>
                        <h3 id="yearCount">1</h3>
                        <p>YEARS EXPERIENCE</p>
                     </li>
                     <li>
                        <h3 id="partnerCount">1</h3>
                        <p>TRUSTED PARTNERS</p>
                     </li>
                     <li>
                        <h3 id="projectCount">1</h3>
                        <p>PROTECTION PROGRAMS</p>
                     </li>
                     <li>
                        <div className="box d-flex">
                           <h3 id="memberCount">1</h3>
                           <h3> K</h3>
                        </div>
                        <p>ACTIVE MEMBERS</p>
                     </li>
                  </ul>
               </div>
            </Container>
         </div>
         {/* End section impact */}
         {/* Section recentproj */}
         <div id="recent-proj" data-aos="fade-up">
            <div className="head">
               <h2>RECENT PROJECTS</h2>
            </div>
            <Container>
               <div className="card__container">
                  <Row>
                     <Col lg={4} className="card__article">
                        <img src={project_1} alt="image" className='card__img' />
                        <div className="image-title">Nature's Keepers</div>
                        <div className="card__data">
                           <h2 className="card__title">Nature's Keepers</h2>
                           <p className="card__description">
                              Collected  $450 of  $800
                           </p>
                           <Link to="/donate" className='card__button button button-left'>
                              Donate now
                           </Link>
                        </div>
                     </Col>

                     <Col lg={4} className="card__article">
                        <img src={project_2} alt="image" className='card__img' />
                        <div className="image-title">Forest Friends Program</div>
                        <div className="card__data">
                           <h2 className="card__title">Forest Friends Program</h2>
                           <p className="card__description">
                              Collected  $450 of  $800
                           </p>
                           <Link to="/donate" className='card__button button button-left'>
                              Donate now
                           </Link>
                        </div>
                     </Col>

                     <Col lg={4} className="card__article">
                        <img src={project_3} alt="image" className='card__img' />
                        <div className="image-title">EcoProtect Alliance</div>
                        <div className="card__data">
                           <h2 className="card__title">EcoProtect Alliance</h2>
                           <p className="card__description">
                              Collected  $450 of  $800
                           </p>
                           <Link to="/donate" className='card__button button button-left'>
                              Donate now
                           </Link>
                        </div>
                     </Col>
                  </Row>
               </div>
            </Container>
         </div>
         {/* End section recentproj */}
         {/* How we work section */}
         <div id="work" data-aos="flip-left">
            <Container>
               <div className="title">
                  <h4>OUR WORKING PROCESS</h4>
                  <h2>WE DONATE TO WILDLIFE'S PROJECTS</h2>
               </div>
               <Row>
                  <Col lg={4} className='step step-1'>
                     <div className="step-content">
                        <div className="step-icon">
                           <FontAwesomeIcon icon={faCircleDollarToSlot} />
                        </div>
                        <div className="step-name">Donating</div>
                        <div className="step-description">
                           You will fill in the necessary information such as name, email and payment details
                        </div>
                     </div>
                     <div className="step-line">
                        <img src="https://demo.bravisthemes.com/nonta/wp-content/uploads/2023/07/line1.png" alt="" />
                     </div>
                  </Col>
                  <Col lg={4} className='step step-2'>
                     <div className="step-content">
                        <div className="step-icon">
                           <FontAwesomeIcon icon={faHourglassStart} />
                        </div>
                        <div className="step-name">Processing</div>
                        <div className="step-description">
                           The system receives and processes your donation information.
                           It's also check and verify the payment details.
                        </div>
                     </div>
                     <div className="step-line">
                        <img src="https://demo.bravisthemes.com/nonta/wp-content/uploads/2023/07/line2.png" alt="" />
                     </div>
                  </Col>
                  <Col lg={4} className='step step-3'>
                     <div className="step-content">
                        <div className="step-icon">
                           <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className="step-name">Completing</div>
                        <div className="step-description">
                           The project updated the donation amount to the budget and began using it for planned wildlife protection activities.
                        </div>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
         {/* End how we work section */}
         {/* Section latest new */}
         <div id="latest-new" data-aos="fade-up">
            <Container>
               <h2>OUR LATEST NEW</h2>
               <div>
                  <Slider {...settings} >
                     <div className='inner-box'>
                        <div className="box-header">
                           <div className="main-img">
                              <a href="#" target='_blank'>
                                 <img src={section_7_1} alt="" />
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
                                 <img src={section_7_2} alt="" />
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
                                 <img src={section_7_3} alt="" />
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
                                 <img src={section_7_4} alt="" />
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
                                 <img src={section_7_5} alt="" />
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
            </Container>
         </div>
         {/* End section latest new */}
         {/* Feed back */}
         <div id="feedback" data-aos="zoom-in">
            <h2>OUR FEEDBACK</h2>
            <Container>
               <div>
                  <Slider {...settings2}>
                     <div className="fb-card">
                        <div className="fb-avatar">
                           <img src="https://i.pinimg.com/236x/ca/8b/41/ca8b41622910b791c596d71e85e660d2.jpg" alt="" />
                        </div>
                        <div className="fb-content">
                           <p>I really like the way you organize forest protection activities professionally and with a clear plan. Workshops and community events are very useful, helping to raise environmental awareness for everyone.
                           </p>
                        </div>
                     </div>
                     <div className="fb-card">
                        <div className="fb-avatar">
                           <img src="https://i.pinimg.com/236x/47/ca/e6/47cae64d490d3b27943379aa24b35fcf.jpg" alt="" />
                        </div>
                        <div className="fb-content">
                           <p>The project showed me the power of the community when working together to protect the environment. Group tree planting and forest cleaning sessions not only contribute to protecting nature but also create opportunities to connect with many new friends.</p>
                        </div>
                     </div>
                     <div className="fb-card">
                        <div className="fb-avatar">
                           <img src="https://i.pinimg.com/236x/12/0f/da/120fda80253199dbe6c7682f9fd50e8e.jpg" alt="" />
                        </div>
                        <div className="fb-content">
                           <p>
                              I am very impressed with the transparency in the use of project funding. Each donation is publicly detailed and project progress reports are updated regularly. This helps me feel completely secure and confident in my contribution.</p>
                        </div>
                     </div>
                     <div className="fb-card">
                        <div className="fb-avatar">
                           <img src="https://i.pinimg.com/236x/e4/2e/13/e42e138bc900aa3e35669fcfdfa5120c.jpg" alt="" />
                        </div>
                        <div className="fb-content">
                           <p>
                              Participating in forest protection activities with the project has helped me learn a lot of new knowledge about ecology and conservation. The project team is very enthusiastic and experienced, always ready to share and guide us. </p>
                        </div>
                     </div>
                     <div className="fb-card">
                        <div className="fb-avatar">
                           <img src="https://i.pinimg.com/236x/19/fe/d1/19fed161e08b6be900b63c4db920a6a5.jpg" alt="" />
                        </div>
                        <div className="fb-content">
                           <p>
                              The project's activities not only focus on afforestation but also educate the community about the importance of environmental protection. I am happy to see environmental education programs for children and youth. </p>
                        </div>
                     </div>
                  </Slider>
               </div>
            </Container>
         </div>
         {/* End feedback */}
         {/* Section subscribe */}
         <div id="subscribe" data-aos="fade-up">
            <Container>
               <div className="inner-main">
                  <div className="inner-content">
                     <h2>VOLUNTEER WITH US</h2>
                     <p>If you cut a tree, you kill a life. If you save a tree, you save a life. If you plant a tree, you plant a life.</p>
                     <div className="button" data-aos="zoom-in">
                        <button className='button button-left'>
                           <Link to="/contact">SUBSCRIBE NOW</Link>
                        </button>
                     </div>
                  </div>
               </div>
            </Container>
         </div>
         {/* End section subscribe */}
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

export default HomePage;

