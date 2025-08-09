import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const SoftwareSection: React.FC = () => {
  return (
    <section className="section bg-light">
      <Container>
        <h2 className="section-title text-center">Software</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <i className="fas fa-desktop fa-3x text-primary mb-3"></i>
                <Card.Title>User Interface</Card.Title>
                <Card.Text>Intuitive and user-friendly interface for seamless control and monitoring.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <i className="fas fa-file-alt fa-3x text-primary mb-3"></i>
                <Card.Title>Reporting Software</Card.Title>
                <Card.Text>Generate detailed reports with ease for post-mission analysis.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <i className="fas fa-brain fa-3x text-primary mb-3"></i>
                <Card.Title>Image Enhancement (AI)</Card.Title>
                <Card.Text>AI-powered image enhancement for clear visuals in turbid waters.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="mt-5"> {/* Add some margin between cards and carousel */}
          <Carousel indicators={false} controls={true} interval={3000} className="software-carousel">
            <Carousel.Item>
              <img
                src="/assets/testing.d4c7c546.JPG"
                alt="Testing Interface"
                className="d-block w-100 img-fluid rounded shadow"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/loginpage.e1710b70.jpg"
                alt="Login Interface"
                className="d-block w-100 img-fluid rounded shadow"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/resultpipe.8442b012.jpg"
                alt="Results Interface"
                className="d-block w-100 img-fluid rounded shadow"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default SoftwareSection;
