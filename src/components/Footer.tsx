import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-start mb-5">
          <Col lg={4} md={6} className="mb-4">
            <div className="text-center text-md-start">
              <img
                src="/assets/logo1.607cf0f2.jpg"
                alt="IXAR Robotic Solutions"
                className="footer-logo mb-3"
              />
              <p className="text-light opacity-75 mb-4">
                Leading underwater robotics company providing cutting-edge ROV solutions
                for marine inspections and surveys across multiple industries.
              </p>
              <img
                src="/assets/contactrov.b5d8abce.webp"
                alt="ROV"
                className="img-fluid rounded"
                style={{ maxHeight: '150px', opacity: '0.8' }}
              />
            </div>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <div className="contact-info-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h5 className="contact-title">Our Location</h5>
              <div className="contact-detail">
                102, Faizan Apartment, S. V. Road,<br />
                Jogeshwari (West), Mumbai 400-102,<br />
                Maharashtra, India
              </div>
            </div>
          </Col>
          
          <Col lg={4} md={12} className="mb-4">
            <Row>
              <Col sm={6} className="mb-3">
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <h6 className="contact-title">Phone</h6>
                  <div className="contact-detail">
                    <a href="tel:+919930652916">+91 9930652916</a><br />
                    <a href="tel:+918591327171">+91 8591327171</a>
                  </div>
                </div>
              </Col>
              
              <Col sm={6} className="mb-3">
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h6 className="contact-title">Email</h6>
                  <div className="contact-detail">
                    <a href="mailto:info@ixarrobotic.com">info@ixarrobotic.com</a><br />
                    <a href="mailto:ixarroboticsolutions@gmail.com">ixarroboticsolutions@gmail.com</a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <hr className="border-secondary my-4" />
        
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0 text-light opacity-75">
              © 2021-{new Date().getFullYear()} IXAR Robotics Team. All Rights Reserved
            </p>
            <small className="text-light opacity-50">
              Made with ❤️ in India | Promoting Make in India
            </small>
          </Col>
          
          <Col md={6} className="text-center text-md-end">
            <div className="social-links">
              <a 
                href="https://www.facebook.com/IXAR-Robotics-Solutions-123677916277647" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                title="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://twitter.com/IxarRobotics?s=08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                title="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/ixar-robotic-solution-209004212" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="https://youtube.com/channel/UC8aWp3FRu_p-UzpAsHX8jXg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                title="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a 
                href="https://www.instagram.com/ixar_robotic_solutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
