import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import './Partner.css';

const Partner: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    phone: '',
    designation: '',
    companyWebsite: '',
    companyAddress: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Partnership inquiry sent successfully! We will contact you soon.');

      // Reset form
      setFormData({
        title: '',
        name: '',
        email: '',
        phone: '',
        designation: '',
        companyWebsite: '',
        companyAddress: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>IXAR Robotic Solutions | Partner With Us</title>
        <meta name="description" content="Partner with IXAR Robotic Solutions and join us in revolutionizing the underwater inspection industry." />
      </Helmet>

      <header className="page-header">
        <Container>
          <h1 className="page-title">Partner With Us</h1>
          <p className="page-subtitle">Join us in revolutionizing underwater inspection technology.</p>
        </Container>
      </header>

      <section className="section">
        <Container>
          <h2 className="section-title text-center">Why Partner With Us?</h2>
          <Row>
            <Col md={3} className="text-center mb-4">
              <div className="partner-feature">
                <i className="fas fa-award"></i>
                <p>Pioneer in the ROV Industry that has Developed Products with Global Standard.</p>
              </div>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="partner-feature">
                <i className="fas fa-trophy"></i>
                <p>Market Leader in the ROV Industry in India for Non-Destructive Testing.</p>
              </div>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="partner-feature">
                <i className="fas fa-university"></i>
                <p>Technical Support from Ministry of Electronics and Information Technology, India and IIT Bombay.</p>
              </div>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="partner-feature">
                <i className="fas fa-users"></i>
                <p>Highly agile Organization Capable of Meeting Customer Requirements.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section partner-cta-section text-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center mb-5">
              <h2 className="display-4 fw-bold mb-3">Become a Valued Partner</h2>
              <p className="lead">Join forces with IXAR Robotic Solutions and unlock new opportunities in the rapidly evolving underwater inspection industry. We're looking for strategic partners to expand our reach and deliver cutting-edge solutions globally.</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="p-5 partner-form-card">
                <h3 className="section-title text-center mb-4 text-dark">Submit Your Partnership Inquiry</h3>
                <Form onSubmit={handleSubmit} className="partner-form">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="form-floating mb-3">
                        <Form.Control type="text" name="title" id="titleInput" placeholder="Title" value={formData.title} onChange={handleChange} required />
                        <Form.Label htmlFor="titleInput">Title</Form.Label>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="form-floating mb-3">
                        <Form.Control type="text" name="name" id="nameInput" placeholder="Name" value={formData.name} onChange={handleChange} required />
                        <Form.Label htmlFor="nameInput">Name</Form.Label>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="form-floating mb-3">
                        <Form.Control type="email" name="email" id="emailInput" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        <Form.Label htmlFor="emailInput">Email</Form.Label>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="form-floating mb-3">
                        <Form.Control type="tel" name="phone" id="phoneInput" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                        <Form.Label htmlFor="phoneInput">Phone</Form.Label>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="form-floating mb-3">
                        <Form.Control type="text" name="designation" id="designationInput" placeholder="Designation" value={formData.designation} onChange={handleChange} required />
                        <Form.Label htmlFor="designationInput">Designation</Form.Label>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="form-floating mb-3">
                        <Form.Control type="url" name="companyWebsite" id="companyWebsiteInput" placeholder="Company Website" value={formData.companyWebsite} onChange={handleChange} required />
                        <Form.Label htmlFor="companyWebsiteInput">Company Website</Form.Label>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="form-floating mb-3">
                    <Form.Control type="text" name="companyAddress" id="companyAddressInput" placeholder="Company Address" value={formData.companyAddress} onChange={handleChange} required />
                    <Form.Label htmlFor="companyAddressInput">Company Address</Form.Label>
                  </Form.Group>
                  
                  <Form.Group className="form-floating mb-3">
                    <Form.Control as="textarea" name="message" id="messageInput" rows={12} placeholder="Message" value={formData.message} onChange={handleChange} required />
                    <Form.Label htmlFor="messageInput">Message</Form.Label>
                  </Form.Group>
                  <div className="text-center">
                    <Button variant="primary" type="submit" disabled={isSubmitting} className="d-flex align-items-center justify-content-center">
                      {isSubmitting ? 'Sending...' : 'Submit Inquiry'} <i className="fas fa-paper-plane ms-2"></i>
                    </Button>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Partner;