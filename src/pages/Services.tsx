import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Services: React.FC = () => {
  const rovServices = [
    {
      title: 'Videoscope',
      image: '/assets/Inspection.1b9f58a8.jpg',
      description: 'High-definition underwater video inspection services for detailed visual analysis.'
    },
    {
      title: 'Laser Scaling',
      image: '/assets/laser.c6b7c517.webp',
      description: 'Precise measurement and scaling using advanced laser technology.'
    },
    {
      title: 'Thickness Measurements (UT & PECT)',
      image: '/assets/ut.3d19412b.webp',
      description: 'Ultrasonic and pulsed eddy current testing for material thickness analysis.'
    },
    {
      title: 'Sonar',
      image: '/assets/radar.cca50c29.jpg',
      description: 'Advanced sonar systems for underwater mapping and object detection.'
    },
    {
      title: 'R & D as Per Customer Requirement',
      image: '/assets/RD.5ef8ae45.jpg',
      description: 'Custom research and development solutions tailored to specific client needs.'
    },
    {
      title: 'Bathymetry',
      image: '/assets/bath.87358e5a.JPG',
      description: 'Underwater topography mapping and depth measurements.'
    }
  ];

  return (
    <div>
      <Helmet>
        <title>IXAR ROBOTIC SOLUTIONS | India's Best Inspection Services Provider | Underwater ROV Services | SERVICES</title>
        <meta name="description" content="India's Best Inspection Services Provider | India's Best Underwater Sonar Surveys Provider" />
        <meta name="keywords" content="videoscope, laser scaling, thickness measurements (ut & pect), sonar, r & d as per customer requirement, bathymetry" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <Container>
          <h1 className="display-3 fw-bold">Services</h1>
        </Container>
      </section>

      {/* ROV Services Section */}
      <section className="py-5">
        <Container>
          <h2 className="display-4 fw-bold text-primary text-center mb-5">ROV Services</h2>
          <hr className="w-50 mx-auto border-primary border-2 mb-5" />
          
          <Row className="g-4 mb-5">
            {rovServices.slice(0, 3).map((service, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 shadow border-0">
                  <Card.Img variant="top" src={service.image} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body className="text-center">
                    <Card.Title className="text-primary">{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          <Row className="g-4">
            {rovServices.slice(3, 6).map((service, index) => (
              <Col md={4} key={index + 3}>
                <Card className="h-100 shadow border-0">
                  <Card.Img variant="top" src={service.image} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body className="text-center">
                    <Card.Title className="text-primary">{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Industries We Serve */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="display-4 fw-bold text-primary text-center mb-5">We Cater To</h2>
          <hr className="w-50 mx-auto border-primary border-2 mb-5" />
          
          <Row className="g-4 mb-4">
            <Col md={4}>
              <Card className="h-100 shadow border-0">
                <Card.Img variant="top" src="/assets/ports.5132ecca.jpg" />
                <Card.Body className="text-center">
                  <Card.Title className="text-primary fs-3">PORT</Card.Title>
                  <ul className="list-unstyled">
                    <li>Breakwater Inspection</li>
                    <li>Jetty Inspection</li>
                    <li>Wharf Inspection</li>
                    <li>Riser Inspection</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="h-100 shadow border-0">
                <Card.Img variant="top" src="/assets/Thermal.e757fae6.jpg" />
                <Card.Body className="text-center">
                  <Card.Title className="text-primary fs-3">POWER</Card.Title>
                  <ul className="list-unstyled">
                    <li>Seawater Intake/Outfall Pipeline Inspection</li>
                    <li>Thermal Plant Tank Inspection</li>
                    <li>Water Tank Inspection</li>
                    <li>Water Sump Inspection</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="h-100 shadow border-0">
                <Card.Img variant="top" src="/assets/dam.1b1b7d21.webp" />
                <Card.Body className="text-center">
                  <Card.Title className="text-primary fs-3">DAMS</Card.Title>
                  <ul className="list-unstyled">
                    <li>Tunnel Inspection</li>
                    <li>River-Bed Profiling/Bathymetry</li>
                    <li>Pre-Repair Inspection</li>
                    <li>Dam Construction Support</li>
                    <li>Upstream/Downstream/Tail Race Inspection</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow border-0">
                <Card.Img variant="top" src="/assets/oil.ef2e19f2.jpg" />
                <Card.Body className="text-center">
                  <Card.Title className="text-primary fs-3">OILS & GAS</Card.Title>
                  <ul className="list-unstyled">
                    <li>Submerged Cable Inspection</li>
                    <li>Fire Water Tank Inspection</li>
                    <li>Offshore Installation Support</li>
                    <li>Submerged Pipeline Inspection</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="h-100 shadow border-0">
                <Card.Img variant="top" src="/assets/bridge.deb67c56.webp" />
                <Card.Body className="text-center">
                  <Card.Title className="text-primary fs-3">BRIDGE</Card.Title>
                  <ul className="list-unstyled">
                    <li>Inspection Support During Repairs</li>
                    <li>Sonar Survey & Bathymetry</li>
                    <li>Pre & Post Repair Inspection</li>
                    <li>Bridge Pier Inspection</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="h-100 shadow border-0">
                <Card.Img variant="top" src="/assets/shi.5d248bbc.jpg" />
                <Card.Body className="text-center">
                  <Card.Title className="text-primary fs-3">SHIP</Card.Title>
                  <ul className="list-unstyled">
                    <li>Bio-Fouling Inspection</li>
                    <li>Ship Propeller Inspection</li>
                    <li>Ballast Tank Inspection</li>
                    <li>Inspection of Paint Loss</li>
                    <li>Ship Hull Inspection</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
