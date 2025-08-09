import React from 'react';
import { Container, Row, Col, Table, Card, Carousel } from 'react-bootstrap';
import SoftwareSection from '../components/SoftwareSection';
import SpecificationsSection from '../components/SpecificationsSection';
import { Helmet } from 'react-helmet';
import './Products.css'; // Reusing the same CSS file as Products page

const RovPro: React.FC = () => {
  const specifications = [
    { parameter: 'Dimensions', value: '18.9" x 10.5" x 6.4" (480 x 267 x 165 mm)' },
    { parameter: 'Weight', value: '5.7kg' },
    { parameter: 'Power Input', value: '230V, 4.5A, @50-60Hz (Single Phase, Unlimited Runtime)' },
    { parameter: 'Battery', value: '300 Wh, Runtime up to 4 Hrs' },
    { parameter: 'Max Speed', value: '4 Knots (2 m/s)' },
    { parameter: 'Storage Capacity', value: 'SD Card 128 GB' },
    { parameter: 'Tether Length', value: '150 m' },
    { parameter: 'Depth Rating', value: '490ft (150m)' },
    { parameter: 'Working Temperature', value: '-10℃~45℃' },
    { parameter: 'Deployment and Recovery', value: 'Manual + Crane' },
    { parameter: 'Controller Pad', value: '6 Axis' },
    { parameter: 'Electrical Safety & Distribution', value: 'Short-Circuit Protection, Ground-Fault: Current-Leak Protection, Emergency Shut Down: Over Current Protection' },
    { parameter: 'Control System', value: 'Openloop System with Human Machine Interface' },
    { parameter: 'Depth Accuracy', value: '10mm Resolution' },
    { parameter: 'Payloads', value: 'Laser Scaler, 14000 Lumen Light, 4K auxiliary camera, USBL, Depth Lock Sonar' },
    { parameter: 'Illumination', value: '4000 Lumen Forward' },
    { parameter: 'Vision Feed', value: 'UHD: 3840*2160 (4K) 30fps FHD: 1920*1080 (1080p) 30/60/120fps' },
  ];

  return (
    <div>
      <Helmet>
        <title>IXAR Robotic Solutions | ROV Pro</title>
        <meta name="description" content="Detailed specifications and features of the ROV Pro, a light industrial underwater ROV by IXAR Robotic Solutions." />
      </Helmet>

      <header className="page-header">
        <Container>
          <h1 className="page-title">ROV Pro</h1>
          <p className="page-subtitle">Light Industrial Underwater ROV</p>
        </Container>
      </header>

      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <img src="/assets/Rovpro1.daa4b27c.png" alt="ROV Pro" className="img-fluid rounded shadow" />
            </Col>
            <Col lg={6}>
              <h2 className="section-title">Product Overview</h2>
              <p>ROV Pro is a light industrial underwater ROV designed for industrial applications. It works with various power supply and has stronger powered motors. The thrusters layout which allows omni movement in all directions. The anti-stuck motor 150W which can resist the flow of water at 4 knots(2m/s) in all directions. Maximum underwater depth of ROV Pro up to 150 meters(490FT), diving deeper and exploring more in underwater with live 4k video resolution.</p>
              <p>The ROV Pro is a Lightweight easy to carry and perfect for several industrial applications. The simple compact design makes it small easy deployment and recovery. The frame construction provides adding payloads such as sensors, auxiliary camera, Lumen light and scanner.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <SpecificationsSection specifications={specifications} />

      <SoftwareSection />
    </div>
  );
};

export default RovPro;