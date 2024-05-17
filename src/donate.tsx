import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './donate.css'

import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert'

import logo from './assets/image/logo.png'
import HomePage from './homepage';


interface Props { }

function Donate(props: Props) {
  const { } = props

  const [isScrolledPast, setIsScrolledPast] = useState(false);

  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
  // Alert
  const handleConfirm = () => {
    setShow(false);
    setShowAlert(true);
    navigate('/donate');
    setTimeout(() => setShowAlert(false), 3000);
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
      <div id="donate">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-12 mx-auto">
              <form className="custom-form donate-form" action="#" method="get" role="form">
                <h2 className="mb-4">Make a donation</h2>
                <div className="row">
                  <div className="col-lg-12 col-12">
                    <h5 className="mb-3">Donation Frequency</h5>
                  </div>
                  <div className="col-lg-6 col-6 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="DonationFrequency"
                        id="DonationFrequencyOne"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="DonationFrequencyOne"
                      >
                        One Time
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-6 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="DonationFrequency"

                      />
                      <label
                        className="form-check-label"
                        htmlFor="DonationFrequencyMonthly"
                      >
                        Monthly
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-12">
                    <h5 className="mt-2 mb-3">Select an amount</h5>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        $10
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        $15
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault3">
                        $20
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault4">
                        $30
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault5"
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault5">
                        $45
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault6"
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault6">
                        $50
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 form-check-group">
                    <div className="input-group d-flex">
                      <span className="input-group-text" id="basic-addon1">
                        $
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Custom amount"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        style={{ marginBottom: 0 }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-12">
                    <h5 className="mt-1">Personal Info</h5>
                  </div>
                  <div className="col-lg-6 col-12 mt-2">
                    <input
                      type="text"
                      name="donation-name"
                      id="donation-name"
                      className="form-control"
                      placeholder="Green Land"
                      required={true}
                    />
                  </div>
                  <div className="col-lg-6 col-12 mt-2">
                    <input
                      type="email"
                      name="donation-email"
                      id="donation-email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="example@gmail.com"
                      required={true}
                    />
                  </div>
                  <div className="col-lg-12 col-12">
                    <h5 className="pt-1">Debit or Credit card</h5>
                  </div>
                  <div className="col-12 mt-2">
                    <input
                      type="text"
                      name="donation-name"
                      id="donation-name"
                      className="form-control"
                      placeholder="Card number"
                      required={true}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="donation-name"
                      id="donation-name"
                      className="form-control"
                      placeholder="Card holder"
                      required={true}
                    />
                  </div>
                  <div className="col-4">
                    <select
                      id="expiry-month"
                      name="expiry-month"
                      className="form-control"
                      required={true}
                    >
                      <option value="">Experied Month</option>
                      {Array.from({ length: 12 }, (_, index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1 < 10 ? '0' + (index + 1) : index + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      name="donation-name"
                      id="donation-name"
                      className="form-control"
                      placeholder="Experied year"
                      required={true}
                    />
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      name="donation-name"
                      id="donation-name"
                      className="form-control"
                      placeholder="CVV"
                      required={true}
                    />
                  </div>
                  <div className="col-lg-12 col-12 mt-2">
                    <button type="submit" className="form-control mt-4" onClick={handleShow}>
                      Submit Donation
                    </button>
                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                      <Modal.Header closeButton>
                        <Modal.Title>THANK YOU FOR YOUR DONATION</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        By clicking the confirm button, you will donate to our fund and become part of the project!
                        <br />
                        Sincerely thank!
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="success" onClick={handleConfirm}>Confirm</Button>
                      </Modal.Footer>
                    </Modal>
                    {showAlert && (
                      <Alert variant="success" style={{ position: 'fixed', bottom: '10px', left: '10px', zIndex: 1000 }}>
                        Donation successful!
                      </Alert>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div >
      </div >
    </>
  );
}

export default Donate