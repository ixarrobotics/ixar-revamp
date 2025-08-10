import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './Services.css';

const Services: React.FC = () => {
  const rovServices = [
    {
      title: 'Videoscope',
      image: '/assets/Inspection.1b9f58a8.jpg',
      description: 'High-definition underwater video inspection services for detailed visual analysis.',
      icon: 'fas fa-video'
    },
    {
      title: 'Laser Scaling',
      image: '/assets/laser.c6b7c517.webp',
      description: 'Precise measurement and scaling using advanced laser technology.',
      icon: 'fas fa-ruler-combined'
    },
    {
      title: 'Thickness Measurements (UT & PECT)',
      image: '/assets/ut.3d19412b.webp',
      description: 'Ultrasonic and pulsed eddy current testing for material thickness analysis.',
      icon: 'fas fa-th-large'
    },
    {
      title: 'Sonar',
      image: '/assets/radar.cca50c29.jpg',
      description: 'Advanced sonar systems for underwater mapping and object detection.',
      icon: 'fas fa-water'
    },
    {
      title: 'R & D as Per Customer Requirement',
      image: '/assets/RD.5ef8ae45.jpg',
      description: 'Custom research and development solutions tailored to specific client needs.',
      icon: 'fas fa-cogs'
    },
    {
      title: 'Bathymetry',
      image: '/assets/bath.87358e5a.JPG',
      description: 'Underwater topography mapping and depth measurements.',
      icon: 'fas fa-layer-group'
    }
  ];

  const industries = [
    {
      name: 'PORT',
      icon: 'fas fa-anchor',
      image: '/assets/ports.5132ecca.jpg',
      details: [
        'Breakwater Inspection',
        'Jetty Inspection',
        'Wharf Inspection',
        'Riser Inspection'
      ]
    },
    {
      name: 'POWER',
      icon: 'fas fa-bolt',
      image: '/assets/Thermal.e757fae6.jpg',
      details: [
        'Seawater Intake/Outfall Pipeline Inspection',
        'Thermal Plant Tank Inspection',
        'Water Tank Inspection',
        'Water Sump Inspection'
      ]
    },
    {
      name: 'DAMS',
      icon: 'fas fa-water',
      image: '/assets/dam.1b1b7d21.webp',
      details: [
        'Tunnel Inspection',
        'River-Bed Profiling/Bathymetry',
        'Pre-Repair Inspection',
        'Dam Construction Support',
        'Upstream/Downstream/Tail Race Inspection'
      ]
    },
    {
      name: 'OIL & GAS',
      icon: 'fas fa-oil-can',
      image: '/assets/oil.ef2e19f2.jpg',
      details: [
        'Submerged Cable Inspection',
        'Fire Water Tank Inspection',
        'Offshore Installation Support',
        'Submerged Pipeline Inspection'
      ]
    },
    {
      name: 'BRIDGE',
      icon: 'fas fa-bridge',
      image: '/assets/bridge.deb67c56.webp',
      details: [
        'Inspection Support During Repairs',
        'Sonar Survey & Bathymetry',
        'Pre & Post Repair Inspection',
        'Bridge Pier Inspection'
      ]
    },
    {
      name: 'SHIP',
      icon: 'fas fa-ship',
      image: '/assets/shi.5d248bbc.jpg',
      details: [
        'Bio-Fouling Inspection',
        'Ship Propeller Inspection',
        'Ballast Tank Inspection',
        'Inspection of Paint Loss',
        'Ship Hull Inspection'
      ]
    },
  ];

  return (
    <div>
      <Helmet>
        <title>IXAR Robotic Solutions | Services</title>
        <meta name="description" content="Explore the wide range of underwater inspection and survey services offered by IXAR Robotic Solutions." />
      </Helmet>

      <header className="page-header">
        <Container>
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">Providing comprehensive solutions for underwater inspection and maintenance.</p>
        </Container>
      </header>

      <section className="section">
        <Container>
          <h2 className="section-title text-center">ROV Services</h2>
          <Row>
            {rovServices.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="service-card h-100">
                  <Card.Img variant="top" src={service.image} />
                  <Card.Body>
                    <div className="service-icon">
                      <i className={service.icon}></i>
                    </div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          <h2 className="section-title text-center">Industries We Serve</h2>
          <Row>
            {industries.map((industry, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="industry-card h-100">
                  <Card.Img variant="top" src={industry.image} />
                  <div className="industry-overlay">
                    <div className="industry-content">
                      <div className="industry-icon">
                        <i className={industry.icon}></i>
                      </div>
                      <Card.Title>{industry.name}</Card.Title>
                      <ul className="list-unstyled industry-details">
                        {industry.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;