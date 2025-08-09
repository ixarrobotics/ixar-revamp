import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Modern Contact Bar */}
      <div className="contact-bar">
        <Container>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="d-flex align-items-center">
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@ixarrobotic.com">
                info@ixarrobotic.com
              </a>
            </div>
            <div className="d-flex align-items-center">
              <i className="fas fa-phone"></i>
              <a href="tel:+919930652916">
                +91 9930652916
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Modern Navigation */}
      <BSNavbar 
        expand="lg" 
        expanded={expanded} 
        className={`navbar fixed-top ${scrolled ? 'scrolled' : ''}`}
        style={{
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.98)' 
            : 'rgba(255, 255, 255, 0.95)',
          transition: 'all 0.3s ease'
        }}
      >
        <Container>
          <BSNavbar.Brand as={Link} to="/home" className="d-flex align-items-center">
            <img
              src="/assets/logo1.607cf0f2.jpg"
              alt="IXAR Robotic Solutions"
              height="50"
              className="me-2"
              style={{ 
                transition: 'transform 0.3s ease',
                filter: 'brightness(1.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </BSNavbar.Brand>
          
          <BSNavbar.Toggle 
            aria-controls="modern-navbar-nav" 
            onClick={() => setExpanded(!expanded)}
            className="border-0"
            style={{ 
              padding: '0.5rem',
              background: 'var(--gradient-primary)',
              borderRadius: 'var(--radius-md)'
            }}
          />
          
          <BSNavbar.Collapse id="modern-navbar-nav">
            <Nav className="ms-auto align-items-center gap-2">
              <Nav.Link 
                as={Link} 
                to="/home" 
                className={`nav-link ${isActive('/home') ? 'active' : ''}`}
                onClick={() => setExpanded(false)}
              >
                <i className="fas fa-home me-1"></i>
                Home
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/services" 
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                onClick={() => setExpanded(false)}
              >
                <i className="fas fa-cogs me-1"></i>
                Services
              </Nav.Link>
              
              <NavDropdown 
                title={
                  <span>
                    <i className="fas fa-cube me-1"></i>
                    Products
                  </span>
                } 
                id="products-dropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item 
                  as={Link} 
                  to="/product"
                  onClick={() => setExpanded(false)}
                >
                  <i className="fas fa-robot me-2"></i>
                  ROV 1.0
                </NavDropdown.Item>
                <NavDropdown.Item 
                  as={Link} 
                  to="/rovpro"
                  onClick={() => setExpanded(false)}
                >
                  <i className="fas fa-rocket me-2"></i>
                  ROV Pro
                </NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link 
                as={Link} 
                to="/team" 
                className={`nav-link ${isActive('/team') ? 'active' : ''}`}
                onClick={() => setExpanded(false)}
              >
                <i className="fas fa-users me-1"></i>
                Team
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={() => setExpanded(false)}
              >
                <i className="fas fa-envelope me-1"></i>
                Contact
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/partner"
                onClick={() => setExpanded(false)}
                className="ms-2"
              >
                <button className="btn-modern btn-primary">
                  <i className="fas fa-handshake me-1"></i>
                  Partner With Us
                </button>
              </Nav.Link>
            </Nav>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>
      
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div style={{ height: '120px' }}></div>
    </>
  );
};

export default Navbar;
