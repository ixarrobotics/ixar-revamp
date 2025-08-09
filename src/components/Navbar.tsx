import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BSNavbar 
      expand="lg" 
      expanded={expanded} 
      className={`navbar fixed-top ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <BSNavbar.Brand as={Link} to="/home">
          <img
            src="/assets/logo1.607cf0f2.jpg"
            alt="IXAR Robotic Solutions"
            height="50"
            className="me-2"
          />
        </BSNavbar.Brand>
        
        <BSNavbar.Toggle 
          aria-controls="main-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        
        <BSNavbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className={isActive('/home') ? 'active' : ''} onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/services" className={isActive('/services') ? 'active' : ''} onClick={() => setExpanded(false)}>Services</Nav.Link>
            <NavDropdown 
              title="Products" 
              id="products-dropdown"
              show={showProductsDropdown}
              onMouseEnter={() => setShowProductsDropdown(true)}
              onMouseLeave={() => setShowProductsDropdown(false)}
            >
              <NavDropdown.Item as={Link} to="/product" onClick={() => setExpanded(false)}>ROV 1.0</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rovpro" onClick={() => setExpanded(false)}>ROV Pro</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rov2" onClick={() => setExpanded(false)}>ROV2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/team" className={isActive('/team') ? 'active' : ''} onClick={() => setExpanded(false)}>Team</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setExpanded(false)}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/partner" className="ms-2" onClick={() => setExpanded(false)}>Partner With Us</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;