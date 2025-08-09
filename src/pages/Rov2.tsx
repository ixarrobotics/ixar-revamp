import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Products.css'; // Reusing the same CSS file as Products page

const Rov2: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>IXAR Robotic Solutions | ROV2</title>
        <meta name="description" content="Information about the ROV2, an indigenously designed and manufactured system for underwater survey and inspection by IXAR Robotic Solutions." />
      </Helmet>

      <header className="page-header">
        <Container>
          <h1 className="page-title">ROV2</h1>
          <p className="page-subtitle">Indigenously Designed Underwater Inspection System</p>
        </Container>
      </header>

      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <img src="/assets/Rov22.ecfcb552.jpg" alt="ROV2" className="img-fluid rounded shadow" />
            </Col>
            <Col lg={6}>
              <h2 className="section-title">Product Overview</h2>
              <p>ROV2 is an indigenously designed and manufactured system for underwater survey and inspection. It is built to be a robust and reliable platform for a variety of underwater tasks.</p>
              <p>For detailed specifications and availability, please contact our sales team. We would be happy to discuss your specific requirements and provide a customized solution.</p>
              <Link to="/contact">
                <Button variant="primary">Contact Us</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Rov2;