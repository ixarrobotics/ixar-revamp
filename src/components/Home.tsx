import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div>
      <header className={styles.heroSection}>
        <video autoPlay muted loop className={styles.heroVideo}>
          <source src="/assets/video2.f52fdb7e.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
        <Container className={styles.heroContent}>
          <h1 className={styles.heroTitle}>IXAR Robotic Solutions</h1>
          <p className={styles.heroSubtitle}>Pioneering the Future of Underwater Exploration</p>
          <div>
            <Link to="/services" className="me-3">
              <Button variant="primary" size="lg">Explore Services</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline-light" size="lg">Contact Us</Button>
            </Link>
          </div>
        </Container>
      </header>

      <section className={styles.section}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className={styles.sectionTitle}>About IXAR</h2>
              <p className={styles.sectionSubtitle}>We are a one-stop solution for all underwater survey and inspection. Indigenously designed, manufactured and state-of-the-art Remotely Operated Vehicle (ROV). We are an IIT-Bombay Alumni start-up, mentored by the incubation cell of IIT-Bombay "SINE" and supported by the Ministry of Electronics and Information Technology.</p>
              <Link to="/team">
                <Button variant="primary">Meet the Team</Button>
              </Link>
            </Col>
            <Col lg={6}>
              <img src="/assets/ROV1.8e186b1e.jpeg" alt="About IXAR" className={`${styles.imgFluid} ${styles.rounded} ${styles.shadow}`} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.bgLight}`}>
        <Container>
          <h2 className={`${styles.sectionTitle} text-center`}>Why Choose Us?</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className={`${styles.homeFeatureCard} text-center h-100`}>
                <Card.Body>
                  <i className="fas fa-rocket fa-3x text-primary mb-3"></i>
                  <Card.Title>Quick Deployment</Card.Title>
                  <Card.Text>Easy and portable solution with minimal setup time. Get operational within hours, not days.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className={`${styles.homeFeatureCard} text-center h-100`}>
                <Card.Body>
                  <i className="fas fa-clock fa-3x text-primary mb-3"></i>
                  <Card.Title>24/7 Operations</Card.Title>
                  <Card.Text>Highly efficient system designed for prolonged inspections and continuous operation.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className={`${styles.homeFeatureCard} text-center h-100`}>
                <Card.Body>
                  <i className="fas fa-rupee-sign fa-3x text-primary mb-3"></i>
                  <Card.Title>Cost Effective</Card.Title>
                  <Card.Text>Indigenous technology helps us deliver high-value services at affordable rates.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <h2 className={`${styles.sectionTitle} text-center`}>Our Supporters</h2>
          <Row className="justify-content-center align-items-center">
            <Col xs={6} md={3} className="text-center mb-4">
              <img src="/assets/sine.558e30bd.jpeg" alt="SINE" className={`${styles.imgFluid} ${styles.supporterLogo}`} />
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <img src="/assets/mitg.1a413d64.jpeg" alt="MeitY" className={`${styles.imgFluid} ${styles.supporterLogo}`} />
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <img src="/assets/msme.10acf216.jpg" alt="MSME" className={`${styles.imgFluid} ${styles.supporterLogo}`} />
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <img src="/assets/iit.ef6ee85c.png" alt="IIT Bombay" className={`${styles.imgFluid} ${styles.supporterLogo}`} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
