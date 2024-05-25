import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './donate.css';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { Container, Row, Col, } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

import logo from './assets/image/logo.png';
import footer_head from './assets/image/footer_head.png'

interface Props { }

function Donate(props: Props) {
  const { } = props;

  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
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

  // Donate
  const [projectId, setProjectId] = useState('');
  const [amount, setAmount] = useState('');
  const [cardName, setCardName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameError, setNameError] = useState('');
  const [cardNameError, setCardNameError] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [cvvError, setCvvError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isNameValid = validateName(name);
    const isCardNameValid = validateCardName(cardName);
    const isCardNumberValid = validateCardNumber(cardNumber);
    const isCvvValid = validateCvv(cvv);

    if (isNameValid && isCardNameValid && isCardNumberValid && isCvvValid) {
      setShowModal(true);
    }
  };

  const handleConfirm = async () => {
    try {
      console.log('Sending donation request...');
      console.log(projectId);
      const data =
      {
        "projectId": projectId,
        "amount": amount,
        "cardName": cardName
      }
      await axios.post('http://localhost:3001/donate', data, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      });
      setShowModal(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      console.log('Donation successful');
    } catch (error) {
      // console.error('There was an error donating!', error);
      setShowModal(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  // Validate input
  const validateName = (value: string) => {
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(value)) {
      setNameError('Name cannot contain numbers or special characters');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };

  const validateCardName = (value: string) => {
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(value)) {
      setCardNameError('Name cannot contain numbers or special characters');
      return false;
    } else {
      setCardNameError('');
      return true;
    }
  };

  const validateCardNumber = (value: string) => {
    const regex = /^\d{16}$/;
    if (!regex.test(value)) {
      setCardNumberError('Card number must be 16 digits');
      return false;
    } else {
      setCardNumberError('');
      return true;
    }
  };

  const validateCvv = (value: string) => {
    const regex = /^\d{3}$/;
    if (!regex.test(value)) {
      setCvvError('CVV must be 3 digits');
      return false;
    } else {
      setCvvError('');
      return true;
    }
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
      <div id="donate">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mx-auto">
              <form className="custom-form donate-form" action="#" method="get" role="form" onSubmit={handleSubmit}>
                <h2 className="mb-4">Make a donation</h2>
                <div className="row">
                  <div className="col-lg-12 col-12">
                    <h5 className="mb-3">Choose a project</h5>
                  </div>
                  <div className="col-lg-4 col-4 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        value="665185bbeffa6bfd523a7d27"
                        onChange={(e) => setProjectId(e.target.value)}
                        className="form-check-input"
                        type="radio"
                        name="DonationFrequency"
                        id="Project-1"
                        required={true}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="Project-1"
                      >
                        Nature's Keepers
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4 col-4 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        value="665185bbeffa6bfd523a7d28"
                        onChange={(e) => setProjectId(e.target.value)}
                        className="form-check-input"
                        type="radio"
                        name="DonationFrequency"
                        id="Project-2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="Project-2"
                      >
                        Forest Friends
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4 col-4 form-check-group">
                    <div className="form-check form-check-radio">
                      <input
                        value="665185bbeffa6bfd523a7d29"
                        onChange={(e) => setProjectId(e.target.value)}
                        className="form-check-input"
                        type="radio"
                        name="DonationFrequency"
                        id="Project-3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="Project-3"
                      >
                        EcoProtect Alliance
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
                        value="10"
                        onChange={(e) => setAmount(e.target.value)}
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
                        value="15"
                        onChange={(e) => setAmount(e.target.value)}
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
                        value="20"
                        onChange={(e) => setAmount(e.target.value)}
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
                        value="30"
                        onChange={(e) => setAmount(e.target.value)}
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
                        value="45"
                        onChange={(e) => setAmount(e.target.value)}
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
                        value="50"
                        onChange={(e) => setAmount(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault6">
                        $50
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 form-check-group input">
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        $
                      </span>
                      <input
                        type="text"
                        className="form-control input-amount"
                        placeholder="Custom amount"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
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
                      placeholder="Enter your name here"
                      required={true}
                      value={name}
                      onChange={(e) => {
                        const value = e.target.value;
                        setName(value);
                        validateName(value);
                      }}
                    />
                    <span id="cardNameError" className="error-message">{nameError}</span>
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
                    <span id="emailError" className="error-message"></span>
                  </div>
                  <div className="col-lg-12 col-12" style={{ 'marginTop': '10px' }}>
                    <h5 className="pt-1">Debit or Credit card</h5>
                  </div>
                  <div className="col-6 mt-2" >
                    <input
                      type="text"
                      name="Card number"
                      id="Card number"
                      className="form-control"
                      placeholder="Card number"
                      required={true}
                      value={cardNumber}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCardNumber(value);
                        validateCardNumber(value);
                      }}
                    />
                    <span id="cardNumberError" className="error-message">{cardNumberError}</span>
                  </div>
                  <div className="col-6" style={{ 'marginTop': '8px' }}>
                    <input
                      type="text"
                      name="donation-name"
                      id="donation-name"
                      className="form-control"
                      placeholder="Card holder"
                      required={true}
                      value={cardName}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCardName(value);
                        validateCardName(value);
                      }}
                    />
                    <span id="cardNameError" className="error-message">{cardNameError}</span>
                  </div>
                  <div className="col-4">
                    <select
                      id="expiry-month"
                      name="expiry-month"
                      className="form-control"
                      required={true}
                    >
                      <option value="">Expired Month</option>
                      {Array.from({ length: 12 }, (_, index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1 < 10 ? '0' + (index + 1) : index + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-4">
                    <select id="expiry-year" name="expiry-year" className="form-control" required={true}>
                      <option value="">Expired Year</option>
                      {Array.from({ length: 11 }, (_, index) => (
                        <option key={2020 + index} value={2020 + index}>
                          {2020 + index}
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
                      placeholder="CVV"
                      required={true}
                      value={cvv}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCvv(value);
                        validateCvv(value);
                      }}
                    />
                    <span id="cvvError" className="error-message">{cvvError}</span>
                  </div>
                  <div className="col-lg-12 col-12 mt-2">
                    <button type="submit" className="form-control mt-4 button button-left">
                      Submit Donation
                    </button>
                    <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" keyboard={false}>
                      <Modal.Header closeButton>
                        <Modal.Title>THANK YOU FOR YOUR DONATION</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        By clicking the confirm button, you will donate to our fund and become part of the project!
                        <br />
                        Sincerely thank!
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
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
            <div className="col-lg-5">
              <div className="image-box">
                <img src={'https://i.pinimg.com/564x/d3/4f/80/d34f8098a3de2592b9019bc3953aa562.jpg'} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Donate;
