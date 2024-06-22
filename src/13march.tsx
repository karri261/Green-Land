import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './13march.css'

import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from './assets/image/logo.png'

import footer_head from './assets/image/footer_head.png'

import flagEn from './assets/image/en.svg';
import flagVi from './assets/image/vi.svg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import { useTranslation } from 'react-i18next';
import i18n from './i18n';

interface Props { }

function March13(props: Props) {
    const { } = props

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

    // Change language
    const [language, setLanguage] = useState<string>(localStorage.getItem('language') || 'en');
    const [flag, setFlag] = useState<string>(localStorage.getItem('flag') || flagEn);

    useEffect(() => {
        i18n.changeLanguage(language);
        setFlag(language === 'en' ? flagEn : flagVi);
    }, [language]);

    const changeLanguage = () => {
        const newLanguage = language === 'en' ? 'vi' : 'en';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
        localStorage.setItem('flag', newLanguage === 'en' ? flagEn : flagVi);
    };

    const { t } = useTranslation();

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
                                    <Nav.Link as={NavLink} to="/home">{t('home')}</Nav.Link>
                                    <Nav.Link as={NavLink} to="/about-us">{t('about_us')}</Nav.Link>
                                    <Nav.Link as={NavLink} to="/reality">{t('reality')}</Nav.Link>
                                    <Nav.Link as={NavLink} to="/gallery">{t('gallery')}</Nav.Link>
                                    <Nav.Link as={NavLink} to="/donate">
                                        <button className='button button-left'>{t('donate')}</button>
                                    </Nav.Link>
                                    <Nav.Link onClick={changeLanguage} style={{ cursor: 'pointer' }}>
                                        <img src={flag} alt="flag" width="40" height="30" /> {language.toUpperCase()}
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            {/* End Header*/}
            {/* Main */}
            <div id="content">
                <div className="head">
                    <div className="header">TRAINING ON FOREST AND WILDLIFE PROTECTION</div>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/home">
                                <FontAwesomeIcon icon={faHouse} />
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Training on Forest and Wildlife Protection</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <Container>
                    <div className="top">
                        <FontAwesomeIcon icon={faUser} />
                        Admin -
                        <FontAwesomeIcon icon={faClock} />
                        13 March - Lastest new
                    </div>
                    <div className="inner_main_content">
                        <img src={"https://www.nature.org.vn/en/wp-content/uploads/2023/07/1304_taphuantruyenthong-700x350-1.jpeg"} alt="" />
                        <p>The local communities, those who live near the forest and depend on it for their livelihood, play a vital role in protecting the forest and its resources, including wildlife. However, in many cases, these locals are directly involved in deforestation and hunting wildlife due to the pressing needs for sustenance and income. This dual role as both protectors and exploiters highlights a critical area for intervention. </p>
                        <p>
                            Raising awareness to change behaviors that harm forests and wildlife is extremely important. But more importantly, equipping these locals so that they can directly communicate and bring change to their communities is crucial for sustainable conservation efforts. Empowering the local population with knowledge and skills allows them to become ambassadors for the forest, leading to more effective and culturally relevant conservation strategies. </p>
                        <p>
                            With this view, PanNature organized a training course on Forest and Wildlife Protection Communication with the aim of equipping the community with basic skills to carry out communication activities about forest and wildlife protection while also supporting the community to practice for future application. The training course was held from March 1 at the Cultural House of Hua Tat commune, Van Ho, Son La.</p>
                        <p>
                            The three-day training course brought together community members from various backgrounds, all united by a common goal: to learn and implement effective communication strategies that promote the preservation of their natural surroundings. The program included workshops on environmental education, sessions on developing and delivering compelling messages, and practical exercises that allowed participants to hone their newfound skills.</p>
                        <p>
                            Participants learned about the importance of biodiversity, the roles forests play in climate regulation, and the impacts of wildlife on ecosystem health. They were also trained in using various communication tools, from traditional storytelling and folk media to modern social media platforms, to reach diverse audiences within their communities.</p>
                        <p>
                            To ensure the effectiveness of the training, PanNature invited experts in environmental communication, local leaders, and conservationists who shared their experiences and insights. The interactive nature of the training encouraged participants to share their own stories and challenges, fostering a sense of community and collective responsibility.</p>
                        <p>
                            One of the key outcomes of the training was the development of localized communication plans tailored to the specific needs and contexts of the participants' communities. These plans included strategies for raising awareness about illegal logging, promoting sustainable agricultural practices, and advocating for the protection of endangered species</p>
                        <img src={"https://www.nature.org.vn/en/wp-content/uploads/2023/07/1304_taphuantruyenthong1-1.jpeg"} alt="" />
                        <img src={"https://www.nature.org.vn/en/wp-content/uploads/2023/07/1304_taphuantruyenthong3-2.jpeg"} alt="" />
                        <span>Communities practice using social networking platforms on mobile phones</span>
                        <img src={"https://www.nature.org.vn/en/wp-content/uploads/2023/07/1304_taphuantruyenthong4-1.jpeg"} alt="" />
                        <span>Community in warm-up activities</span>
                        <img src={"https://www.nature.org.vn/en/wp-content/uploads/2023/07/1304_taphuantruyenthong6-1.jpeg"} alt="" />
                        <span>Paticipants practice video recording and taking photos</span>
                        <p className='share'>SHARING IS CARING</p>
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
                            <li>
                                <a href="https://www.google.com/intl/vi/gmail/about/">
                                    <FontAwesomeIcon className='icon' icon={faEnvelope} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Container >
            </div >
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
                                    <p>{t('footer_des')}</p>
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
                                        <li className='head'><b>{t('nav')}</b></li>
                                        <li>
                                            <Link to='/home'>{t('home')}</Link>
                                        </li>
                                        <li>
                                            <Link to='/about-us'>{t('about_us')}</Link>
                                        </li>
                                        <li>
                                            <Link to='/reality'>{t('reality')}</Link>
                                        </li>
                                        <li>
                                            <Link to='/contact'>{t('contact')}</Link>
                                        </li>
                                        <li>
                                            <Link to='/donate'>{t('donate')}</Link>
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={3} xs={6}>
                                    <ul>
                                        <li className='head'><b>{t('contact')}</b></li>
                                        <li>{t('phone')}: 0236 3667 111</li>
                                        <li>Email: greenland@gmail.com</li>
                                        <li>{t('address')}</li>
                                    </ul>
                                </Col>
                                <Col lg={3} sm={12}>
                                    <ul>
                                        <li className='head'><b>Mailbox</b></li>
                                        <li>{t('mail_box_des')}</li>
                                        <li className='email-input'>
                                            <form action="">
                                                <input type="email" name="" id="" placeholder={t('your_email')} />
                                                <button>{t('send')}</button>
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

export default March13;

