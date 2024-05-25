import './reality.css'

import React, { useEffect, useState } from 'react';

import climatechange from './assets/image/climatechange.jpg'
import habitatloss from './assets/image/habitatlosss.jpg'
import polution from './assets/image/polution.jpg'
import polarbear from './assets/image/polarbear.jpeg'
import header_bg from './assets/image/img1.jpg'
import logo from './assets/image/logo.png';
import footer_head from './assets/image/footer_head.png'
import news_vid from './assets/videos/news-vid.mp4'

import '@fortawesome/fontawesome-free/css/all.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { NavLink, Link } from 'react-router-dom';

interface Props { }

function Reality(props: Props) {
  //effect for play video & open modal video
  useEffect(() => {
    const videoThumbs = document.querySelectorAll<HTMLVideoElement>(".thumb-video");

    videoThumbs.forEach((videoThumb) => {
      const handleMouseOver = () => {
        videoThumb.style.opacity = '1';
        videoThumb.play();
        videoThumb.playbackRate = 2.0;
      };

      const handleMouseLeave = () => {
        videoThumb.style.opacity = '0';
        videoThumb.pause();
      };

      videoThumb.addEventListener("mouseover", handleMouseOver);
      videoThumb.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        videoThumb.removeEventListener("mouseover", handleMouseOver);
        videoThumb.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    const videoModalScreens = document.querySelectorAll<HTMLElement>(".video-modal-screen");
    const videoCards = document.querySelectorAll<HTMLElement>(".video-card-body");
    const modalCloseBtns = document.querySelectorAll<HTMLElement>(".vid-modal-close-btn");

    var videoModal = (modalClick: number) => {
      videoModalScreens[modalClick].classList.add("active");
    };

    videoCards.forEach((videoCard, i) => {
      const handleClick = () => {
        videoModal(i);
      };

      videoCard.addEventListener("click", handleClick);

      return () => {
        videoCard.removeEventListener("click", handleClick);
      };
    });

    modalCloseBtns.forEach((modalCloseBtn) => {
      const handleClose = () => {
        videoModalScreens.forEach((videoModalScreen) => {
          videoModalScreen.classList.remove("active");
        });
      };

      modalCloseBtn.addEventListener("click", handleClose);

      return () => {
        modalCloseBtn.removeEventListener("click", handleClose);
      };
    });
  }, []);
  // effect for see more & see less
  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
      const seeMoreBtn = card.querySelector('.see-more-btn') as HTMLButtonElement;
      const textContent = card.querySelector('.card-content .text') as HTMLDivElement;

      const toggleCard = () => {
        card.classList.toggle('active');
        card.classList.toggle('gradient');

        if (card.classList.contains('active')) {
          seeMoreBtn.innerHTML = 'See Less';
          textContent.style.height = `${textContent.scrollHeight}px`;
        } else {
          seeMoreBtn.innerHTML = 'See More';
          textContent.style.height = '100px';
        }
      };

      seeMoreBtn.addEventListener('click', toggleCard);

      // Store the toggleCard function on the button element so we can remove it later
      (seeMoreBtn as any).toggleCard = toggleCard;

      if (textContent.scrollHeight <= 100) {
        seeMoreBtn.style.display = 'none';
        textContent.style.height = 'fit-content';
      } else {
        textContent.style.height = '100px';
        card.classList.add('gradient');
      }
    });

    const handleWindowLoad = () => {
      cards.forEach((card) => {
        const seeMoreBtn = card.querySelector('.see-more-btn') as HTMLButtonElement;
        const textContent = card.querySelector('.card-content .text') as HTMLDivElement;

        if (textContent.scrollHeight === textContent.clientHeight) {
          seeMoreBtn.style.display = 'none';
          textContent.style.height = 'fit-content';
        } else {
          card.classList.add('gradient');
        }
      });
    };

    window.addEventListener('load', handleWindowLoad);

    // Cleanup event listeners on unmount
    return () => {
      cards.forEach((card) => {
        const seeMoreBtn = card.querySelector('.see-more-btn') as HTMLButtonElement;
        seeMoreBtn.removeEventListener('click', (seeMoreBtn as any).toggleCard);
      });
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);

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
      {/* Header */}
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
      {/* End header */}
      <div className="homepage-poster">
        <figure className="homepage-poster__image">
          <picture>
            {/* <source srcSet={header_bg} media="(min-width: 1258px)" /> */}
            {/* <img alt="" src={"https://getwallpapers.com/wallpaper/full/7/5/1/1016772-large-lion-wallpaper-1920x1200-computer.jpg"} /> */}
            <img src={header_bg} alt="" />
          </picture>
        </figure>
        <div className="homepage-news-large homepage-poster__content-container -left">
          <p className="homepage-poster__content">
            <a className="homepage-news-large__link" href="/">
              <span className="homepage-news-large__headline">
                What are some of the biggest <span className="text-danger">THREATS</span> to wildlife?
              </span>
              <span className="homepage-news-large__subhead">
                Wildlife are under threat from many different kinds of human activities, from directly destroying habitat to spreading invasive species and disease...
              </span>
            </a>
          </p>
        </div>
      </div>

      <section className="homepage-news">
        <div className="homepage-news__header">
          <h2 className="homepage__heading">NEWS AND STORIES</h2>
          <a className="homepage-button" href="/">
            View All News & Stories
            <i className="fa-solid fa-angle-right ms-2"></i>
          </a>
        </div>
        <div className="homepage-news__featured">
          <div className="video-card-container">
            <div className="video-card">
              <div className="video-card-body">
                <div className="video-thumbnail">
                  <img src={polarbear} alt="" className="thumb-img" />
                  <video src={news_vid} className="thumb-video" muted loop></video>
                </div>
                <p className="video-card-title">
                  Milion animals, plants at risk of extinction due to human activities, U.N report says
                </p>
                <div className="video-card-info">
                  <a href="/" className="user">
                    <i className="fa-regular fa-user me-2"></i>
                    CBS This Morning
                    <i className="fa-solid fa-circle-check ms-2"></i>
                  </a>
                  <span className="uploaded-time"><i className="fa-regular fa-clock me-2"></i>5 years ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="video-modal-screen">
            <i className="fa-solid fa-xmark vid-modal-close-btn"></i>
            <div className="video-modal-content">
              <video src={news_vid} className="modal-video" controls autoPlay loop></video>
              <p className="modal-video-title">
                Milion animals, plants at risk of extinction due to human activities, U.N report says
              </p>
              <div className="modal-video-info">
                <a href="/" className="user">
                  <i className="fa-regular fa-user me-2"></i>
                  CBS This Morning
                  <i className="fa-solid fa-circle-check ms-2"></i>
                </a>
                <span className="uploaded-time"><i className="fa-regular fa-clock me-2"></i>5 years ago</span>
              </div>
            </div>
          </div>
          <div className="homepage-news__featured__content">
            <h3 className="homepage-news__featured__title">
              Do people really understand how much harm their actions are causing to wild animals and nature?
            </h3>
            <p>
              Help <span className="text-success fw-bold">GREENLAND</span> protect wildlife and their habitats around the world.
              Become a Hero for Nature today.
            </p>
          </div>
        </div>
      </section>

      <section className="wildlife-threats">
        <div className="threats-title">
          <hr className="threats-line" />
          <h2>Learn about some of the greatest threats to the survival of wildlife </h2>
        </div>

        <div className="card-container">
          <div className="card">
            <div className="card-img">
              <img src={habitatloss} alt="" />
            </div>
            <div className="card-content">
              <h2 className="reality-title">Habitat Loss</h2>
              <p className="text">Habitat loss poses the greatest threat to species.
                The world's forests, swamps, plains, lakes, and other habitats continue to disappear as
                they are harvested for human consumption and cleared to make way for agriculture, housing, roads,
                pipelines and the other hallmarks of industrial development. Without a strong plan to create terrestrial
                and marine protected areas important ecological habitats will continue to be lost.
              </p>
              <span className="see-more-btn">See More</span>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={climatechange} alt="" />
            </div>
            <div className="card-content">
              <h2 className="reality-title">Climate Change</h2>
              <p className="text">Climate change is already having a significant impact on wild animals around the globe.
                Changes in climate are altering the timing of life cycles, causing species to shift where they live, and in some
                cases even leading to extinction. We can help species adapt to our changing world by ensuring that our own responses
                to climate change factor in the health and wellbeing of the habitat and resources on which they depend.
              </p>
              <span className="see-more-btn">See More</span>
            </div>
          </div>

          <div className="card">
            <div className="card-img">
              <img src={polution} alt="" />
            </div>
            <div className="card-content">
              <h2 className="reality-title">Pollution</h2>
              <p className="text">Pollution is the introduction of harmful materials into the environment.
                These harmful materials are called pollutants. Pollutants can be natural, such as volcanic ash.
                They can also be created by human activity, such as trash or runoff produced by factories.
                Pollutants damage the quality of air, water, and land.
                <br />
                Many things that are useful to people produce pollution. Cars spew pollutants from their exhaust pipes.
                Burning coal to create electricity pollutes the air. Industries and homes generate garbage and sewage that can
                pollute the land and water. Pesticides—chemical poisons used to kill weeds and insects—seep into waterways and
                harm wildlife.
              </p>
              <span className="see-more-btn">See More</span>
            </div>
          </div>
        </div>
      </section>

      <section className="animals-gallery">
        <hr className="threats-line" />
        <h2 className="gallery-header">Animals <span className="text-success fw-lighter">Gallery</span></h2>
        <div className="gallery">
          <div className="gallery__item gallery__item--1">
            <a href="/" className="gallery__link">
              <img src={"https://images.pexels.com/photos/5349869/pexels-photo-5349869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="gallery__image" alt="" />
              <div className="gallery__overlay">
                <span>Sea Turtle</span>
              </div>
            </a>
          </div>
          <div className="gallery__item gallery__item--2">
            <a href="/" className="gallery__link">
              <img src={"https://images.pexels.com/photos/16040/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="gallery__image" alt="" />
              <div className="gallery__overlay">
                <span>Rhino</span>
              </div>
            </a>
          </div>
          <div className="gallery__item gallery__item--3">
            <a href="/" className="gallery__link">
              <img src={"https://images.pexels.com/photos/3874511/pexels-photo-3874511.jpeg?auto=compress&cs=tinysrgb&w=600"} className="gallery__image" alt="" />
              <div className="gallery__overlay">
                <span>Deer</span>
              </div>
            </a>
          </div>
          <div className="gallery__item gallery__item--4">
            <a href="/" className="gallery__link">
              <img src={"https://images.pexels.com/photos/53125/elephant-tusk-ivory-animal-53125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="gallery__image" alt="" />
              <div className="gallery__overlay">
                <span>Elephant</span>
              </div>
            </a>
          </div>
          <div className="gallery__item gallery__item--5">
            <a href="/" className="gallery__link">
              <img src={"https://images.pexels.com/photos/3059285/pexels-photo-3059285.jpeg"} className="gallery__image" alt="" />
              <div className="gallery__overlay">
                <span>Koala Bear</span>
              </div>
            </a>
          </div>
          <div className="gallery__item gallery__item--6">
            <a href="/" className="gallery__link">
              <img src={"https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="gallery__image" alt="" />
              <div className="gallery__overlay">
                <span>Giant panda</span>
              </div>
            </a>
          </div>
        </div>
        {/* <button className="more-animals">More</button> */}
      </section>
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

export default Reality;