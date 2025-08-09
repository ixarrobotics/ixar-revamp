import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <div>
      {/* Modern Hero Section */}
      <section className="hero-section">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/video2.f52fdb7e.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-accent">I</span>XAR{' '}
            <span className="text-accent">R</span>obotic{' '}
            <span className="text-accent">S</span>olutions
          </h1>
          <p className="hero-subtitle">
            Leading Underwater ROV Services & Advanced Marine Inspections
          </p>
          <div className="hero-cta">
            <a href="#services" className="hero-btn hero-btn-primary">
              <i className="fas fa-play me-2"></i>
              Explore Services
            </a>
            <a href="#contact" className="hero-btn hero-btn-secondary">
              <i className="fas fa-phone me-2"></i>
              Get Quote
            </a>
          </div>
        </div>
      </section>

      {/* Modern About Section */}
      <section className="section section-alt">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">About IXAR</h2>
            <p className="section-subtitle">
              Pioneering underwater robotics with cutting-edge technology and innovation
            </p>
          </div>
          
          <Row className="align-items-center mb-5">
            <Col lg={7} className="fade-in">
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="feature-icon me-3" style={{width: '60px', height: '60px', fontSize: '1.5rem'}}>
                    <i className="fas fa-eye"></i>
                  </div>
                  <h3 className="section-title" style={{fontSize: '2rem', marginBottom: '0'}}>Vision</h3>
                </div>
                <p className="fs-5 text-muted">
                  To provide high-quality, Made in India underwater drones and Remotely Operated 
                  Vehicles for inspection and survey of submersible structures.
                </p>
              </div>
              
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="feature-icon me-3" style={{width: '60px', height: '60px', fontSize: '1.5rem'}}>
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h3 className="section-title" style={{fontSize: '2rem', marginBottom: '0'}}>Mission</h3>
                </div>
                <p className="fs-5 text-muted">
                  It's just the beginning of a new dive, however the waters we plan to explore are deep.
                </p>
              </div>
              
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="feature-icon me-3" style={{width: '60px', height: '60px', fontSize: '1.5rem'}}>
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="section-title" style={{fontSize: '2rem', marginBottom: '0'}}>Who We Are</h3>
                </div>
                <p className="fs-5 text-muted">
                  IXAR Robotic Solutions is a one-stop solution for all underwater survey and inspection. 
                  Indigenously designed, manufactured and state-of-the-art Remotely Operated Vehicle (ROV). 
                  We are an IIT-Bombay Alumni start-up, mentored by the incubation cell of IIT-Bombay 
                  "SINE" and supported by the Ministry of Electronics and Information Technology.
                </p>
              </div>
            </Col>
            
            <Col lg={5} className="slide-up">
              <div className="modern-card" style={{overflow: 'hidden'}}>
                <Carousel interval={3000} controls={false} indicators={false}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 modern-card-img"
                      src="/assets/ROV1.8e186b1e.jpeg"
                      alt="ROV System"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 modern-card-img"
                      src="/assets/RROV1.7850df98.jpg"
                      alt="ROV Operation"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modern ROV Showcase */}
      <section className="section">
        <Container>
          <div className="text-center">
            <h2 className="section-title">Our ROV Technology</h2>
            <p className="section-subtitle">
              State-of-the-art remotely operated vehicles designed for precision and reliability
            </p>
            <div className="modern-card mx-auto" style={{maxWidth: '800px'}}>
              <img
                src="/assets/Rov22.ecfcb552.jpg"
                alt="ROV Technology Showcase"
                className="modern-card-img"
                style={{borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0'}}
              />
              <div className="modern-card-body text-center">
                <h3 className="modern-card-title">Advanced Underwater Inspection</h3>
                <p className="modern-card-text">
                  Our cutting-edge ROV systems deliver unparalleled underwater inspection capabilities
                  with high-definition imaging, precise maneuvering, and real-time data transmission.
                </p>
                <div className="d-flex gap-3 justify-content-center">
                  <a href="/product" className="btn-modern btn-primary">
                    <i className="fas fa-info-circle me-2"></i>
                    Learn More
                  </a>
                  <a href="/contact" className="btn-modern btn-secondary">
                    <i className="fas fa-phone me-2"></i>
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Modern Industries Section */}
      <section className="section" id="services">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Comprehensive underwater inspection solutions across multiple sectors
            </p>
          </div>
          
          <Row className="g-4 mb-4">
            <Col lg={4} md={6} className="fade-in">
              <div className="modern-card">
                <img 
                  src="/assets/port3.81c5a67f.jpg" 
                  alt="Port Infrastructure"
                  className="modern-card-img"
                />
                <div className="modern-card-body text-center">
                  <h3 className="modern-card-title">
                    <i className="fas fa-ship me-2"></i>
                    PORT
                  </h3>
                  <ul className="modern-card-list">
                    <li>Breakwater Inspection</li>
                    <li>Jetty Inspection</li>
                    <li>Wharf Inspection</li>
                    <li>Riser Inspection</li>
                  </ul>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6} className="fade-in" style={{animationDelay: '0.1s'}}>
              <div className="modern-card">
                <img 
                  src="/assets/pwr2.e3be3f6b.jpg" 
                  alt="Power Plant"
                  className="modern-card-img"
                />
                <div className="modern-card-body text-center">
                  <h3 className="modern-card-title">
                    <i className="fas fa-bolt me-2"></i>
                    POWER
                  </h3>
                  <ul className="modern-card-list">
                    <li>Seawater Intake/Outfall Pipeline Inspection</li>
                    <li>Thermal Plant Tank Inspection</li>
                    <li>Water Tank Inspection</li>
                    <li>Water Sump Inspection</li>
                  </ul>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6} className="fade-in" style={{animationDelay: '0.2s'}}>
              <div className="modern-card">
                <img 
                  src="/assets/dam6.7fb7572d.jpg" 
                  alt="Dam Structure"
                  className="modern-card-img"
                />
                <div className="modern-card-body text-center">
                  <h3 className="modern-card-title">
                    <i className="fas fa-water me-2"></i>
                    DAMS
                  </h3>
                  <ul className="modern-card-list">
                    <li>Tunnel Inspection</li>
                    <li>River-Bed Profiling/Bathymetry</li>
                    <li>Pre-Repair Inspection</li>
                    <li>Dam Construction Support</li>
                    <li>Upstream/Downstream/Tail Race Inspection</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={4} md={6} className="fade-in" style={{animationDelay: '0.3s'}}>
              <div className="modern-card">
                <img 
                  src="/assets/off3.89dfdaad.jpg" 
                  alt="Oil & Gas"
                  className="modern-card-img"
                />
                <div className="modern-card-body text-center">
                  <h3 className="modern-card-title">
                    <i className="fas fa-oil-can me-2"></i>
                    OIL & GAS
                  </h3>
                  <ul className="modern-card-list">
                    <li>Submerged Cable Inspection</li>
                    <li>Fire Water Tank Inspection</li>
                    <li>Offshore Installation Support</li>
                    <li>Submerged Pipeline Inspection</li>
                  </ul>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6} className="fade-in" style={{animationDelay: '0.4s'}}>
              <div className="modern-card">
                <img 
                  src="/assets/bridge2.7afcaec5.jpg" 
                  alt="Bridge Infrastructure"
                  className="modern-card-img"
                />
                <div className="modern-card-body text-center">
                  <h3 className="modern-card-title">
                    <i className="fas fa-bridge-water me-2"></i>
                    BRIDGE
                  </h3>
                  <ul className="modern-card-list">
                    <li>Inspection Support During Repairs</li>
                    <li>Sonar Survey & Bathymetry</li>
                    <li>Pre & Post Repair Inspection</li>
                    <li>Bridge Pier Inspection</li>
                  </ul>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6} className="fade-in" style={{animationDelay: '0.5s'}}>
              <div className="modern-card">
                <img 
                  src="/assets/shi2.ae2afd74.jpg" 
                  alt="Ship Hull"
                  className="modern-card-img"
                />
                <div className="modern-card-body text-center">
                  <h3 className="modern-card-title">
                    <i className="fas fa-anchor me-2"></i>
                    SHIP
                  </h3>
                  <ul className="modern-card-list">
                    <li>Bio-Fouling Inspection</li>
                    <li>Ship Propeller Inspection</li>
                    <li>Ballast Tank Inspection</li>
                    <li>Inspection of Paint Loss</li>
                    <li>Ship Hull Inspection</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modern Why Choose Us Section */}
      <section className="section section-alt">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Why Choose IXAR</h2>
            <p className="section-subtitle">
              Advanced technology, proven reliability, and unmatched expertise in underwater robotics
            </p>
          </div>
          
          <div className="feature-grid">
            <div className="feature-card scale-in">
              <div className="feature-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h4 className="feature-title">Quick Deployment</h4>
              <p className="feature-description">
                Easy and portable solution with minimal setup time. Get operational within hours, not days.
              </p>
            </div>
            
            <div className="feature-card scale-in" style={{animationDelay: '0.1s'}}>
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h4 className="feature-title">24/7 Operations</h4>
              <p className="feature-description">
                Highly efficient system designed for prolonged inspections and continuous operation.
              </p>
            </div>
            
            <div className="feature-card scale-in" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon">
                <i className="fas fa-rupee-sign"></i>
              </div>
              <h4 className="feature-title">Cost Effective</h4>
              <p className="feature-description">
                Indigenous technology helps us deliver high-value services at affordable rates.
              </p>
            </div>
            
            <div className="feature-card scale-in" style={{animationDelay: '0.3s'}}>
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4 className="feature-title">Risk-Free Operation</h4>
              <p className="feature-description">
                Safe operation in hazardous and confined spaces without human risk.
              </p>
            </div>
            
            <div className="feature-card scale-in" style={{animationDelay: '0.4s'}}>
              <div className="feature-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h4 className="feature-title">Tailored Solutions</h4>
              <p className="feature-description">
                Custom R&D resources deliver optimized solutions for your specific needs.
              </p>
            </div>
            
            <div className="feature-card scale-in" style={{animationDelay: '0.5s'}}>
              <div className="feature-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h4 className="feature-title">Made in India</h4>
              <p className="feature-description">
                Designed and developed in India with comprehensive in-house maintenance support.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Modern Supporters Section */}
      <section className="section" id="contact">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Our Supporters</h2>
            <p className="section-subtitle">
              Proudly backed by leading institutions and government organizations
            </p>
          </div>
          
          <Row className="g-4 align-items-center justify-content-center">
            <Col md={3} lg={2} className="text-center">
              <a 
                href="https://www.sineiitb.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="d-block p-3 modern-card h-100 d-flex align-items-center justify-content-center"
                style={{minHeight: '120px'}}
              >
                <img 
                  src="/assets/sine.558e30bd.jpeg" 
                  alt="SINE IIT Bombay" 
                  className="img-fluid"
                  style={{ 
                    maxHeight: '60px',
                    filter: 'grayscale(100%)',
                    transition: 'all var(--transition-normal)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </a>
            </Col>
            
            <Col md={3} lg={2} className="text-center">
              <a 
                href="https://www.meity.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="d-block p-3 modern-card h-100 d-flex align-items-center justify-content-center"
                style={{minHeight: '120px'}}
              >
                <img 
                  src="/assets/mitg.1a413d64.jpeg" 
                  alt="Ministry of Electronics & IT" 
                  className="img-fluid"
                  style={{ 
                    maxHeight: '70px',
                    filter: 'grayscale(100%)',
                    transition: 'all var(--transition-normal)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </a>
            </Col>
            
            <Col md={3} lg={2} className="text-center">
              <a 
                href="https://www.msme.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="d-block p-3 modern-card h-100 d-flex align-items-center justify-content-center"
                style={{minHeight: '120px'}}
              >
                <img 
                  src="/assets/msme.10acf216.jpg" 
                  alt="MSME" 
                  className="img-fluid"
                  style={{ 
                    maxHeight: '60px',
                    filter: 'grayscale(100%)',
                    transition: 'all var(--transition-normal)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </a>
            </Col>
            
            <Col md={3} lg={2} className="text-center">
              <a 
                href="https://www.iitb.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="d-block p-3 modern-card h-100 d-flex align-items-center justify-content-center"
                style={{minHeight: '120px'}}
              >
                <img 
                  src="/assets/iit.ef6ee85c.png" 
                  alt="IIT Bombay" 
                  className="img-fluid"
                  style={{ 
                    maxHeight: '50px',
                    filter: 'grayscale(100%)',
                    transition: 'all var(--transition-normal)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
