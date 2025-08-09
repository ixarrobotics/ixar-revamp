import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <h5 className="footer-heading">IXAR Robotic Solutions</h5>
            <p className="footer-text">
              Leading underwater robotics company providing cutting-edge ROV solutions for marine inspections and surveys across multiple industries.
            </p>
          </Col>
          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/product">Products</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/partner">Partner With Us</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h5 className="footer-heading">Contact Us</h5>
            <ul className="list-unstyled footer-contact">
              <li><i className="fas fa-map-marker-alt"></i> 102, Faizan Apartment, S. V. Road, Jogeshwari (West), Mumbai 400-102, Maharashtra, India</li>
              <li><i className="fas fa-phone"></i> +91 9930652916</li>
              <li><i className="fas fa-envelope"></i> info@ixarrobotic.com</li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h5 className="footer-heading">Follow Us</h5>
            <div className="social-links">
              <a href="https://www.facebook.com/IXAR-Robotics-Solutions-123677916277647" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/IxarRobotics?s=08" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/in/ixar-robotic-solution-209004212" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://youtube.com/channel/UC8aWp3FRu_p-UzpAsHX8jXg" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
              <a href="https://www.instagram.com/ixar_robotic_solutions/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} IXAR Robotic Solutions. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;