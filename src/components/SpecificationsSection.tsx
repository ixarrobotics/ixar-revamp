import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface SpecificationsSectionProps {
  specifications: { parameter: string; value: string; }[];
}

const SpecificationsSection: React.FC<SpecificationsSectionProps> = ({ specifications }) => {
  return (
    <section className="section bg-light">
      <Container>
        <h2 className="section-title text-center">Specifications</h2>
        <p className="text-center mb-5">Detailed technical specifications, ensuring optimal performance and reliability.</p>
        <Row className="justify-content-center">
          {specifications.map((spec, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <div className="spec-card h-100">
                <h5 className="spec-parameter">{spec.parameter}</h5>
                <p className="spec-value">{spec.value}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SpecificationsSection;
