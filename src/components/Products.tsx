import React from 'react';
import { Container, Row, Col, Table, Card, Carousel } from 'react-bootstrap';
import SoftwareSection from '../components/SoftwareSection';
import SpecificationsSection from '../components/SpecificationsSection';
import { Helmet } from 'react-helmet';
import styles from './Products.module.css';

const Products: React.FC = () => {
  const specifications = [
    { parameter: 'Dimensions', value: 'Length- 650mm, Width- 480mm, Height- 380mm' },
    { parameter: 'Weight In Air', value: '22kgs' },
    { parameter: 'Power Input', value: '230V, 4.5A, @50-60Hz (Single Phase)' },
    { parameter: 'Depth Rating', value: '200m' },
    { parameter: 'Operating Temperature Range', value: '15-45 Deg.c' },
    { parameter: 'Deployment and Recovery', value: 'Manual + Crane' },
    { parameter: 'Controller Pad', value: '6 Axis' },
    { parameter: 'Electrical Safety & Distribution', value: 'Short-Circuit Protection, Ground-Fault: Current-Leak Protection, Emergency Shut Down: Over Current Protection' },
    { parameter: 'Control System', value: 'Openloop System with Human Machine Interface' },
    { parameter: 'Depth Accuracy', value: '10mm Resolution' },
    { parameter: 'Payloads', value: 'Laser Scaler, 360 Sonar Profiling' },
    { parameter: 'Illumination', value: '6000 Lumen Forward' },
    { parameter: 'Vision Feed', value: '1920*1080p @30 FPS' },
  ];

  return (
    <div>
      <Helmet>
        <title>IXAR Robotic Solutions | ROV 1.0</title>
        <meta name="description" content="Detailed specifications and features of the ROV 1.0, a portable and stable underwater drone by IXAR Robotic Solutions." />
      </Helmet>

      <header className={styles.pageHeader}>
        <Container>
          <h1 className={styles.pageTitle}>ROV 1.0</h1>
          <p className={styles.pageSubtitle}>Portable, Stable, and Adventurous Underwater Drone</p>
        </Container>
      </header>

      <section className={styles.section}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <img src="/assets/ROV.2c6c4490.png" alt="ROV 1.0" className={`${styles.imgFluid} ${styles.rounded} ${styles.shadow}`} />
            </Col>
            <Col lg={6}>
              <h2 className={styles.sectionTitle}>Product Overview</h2>
              <p>ROV is a portable, stable, adventurous underwater drone that can conquer the waters and is easily operated through Intuitive flight controls. With Eight-Thruster configurations, number of available accessories, compatible software which adds to its High level of Performance, Flexibility, and Expandability. Making it One of the optimised underwater sensing solutions for assessing and monitoring underwater systems in the market!</p>
              <p>The ROV chassis is lightweight and sturdy constructed by using HDPE material. Simple design with open frame construction and generous payload offers the possibility of adding a wide range of tools and sensors as well as interchangeable tool skids, adding to it versatility and expandability, for different applications.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <SpecificationsSection specifications={specifications} />

      <SoftwareSection />
    </div>
  );
};

export default Products;
