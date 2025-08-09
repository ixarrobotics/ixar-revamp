import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      
      toast.success('Partnership inquiry sent successfully! We will contact you soon.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

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
      toast.error('Failed to send inquiry. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="position-relative text-white text-center py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/partnerb.c1a6fa3f.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px'
        }}
      >
        <Container className="d-flex align-items-center justify-content-center h-100">
          <div>
            <h1 className="display-3 fw-bold mb-4">Partner With Us</h1>
            <p className="fs-4">Join us in revolutionizing underwater inspection technology</p>
          </div>
        </Container>
      </section>

      {/* Why Partner With Us */}
      <section className="py-5">
        <Container>
          <h2 className="display-4 fw-bold text-primary text-center mb-5">Why Partner With Us</h2>
          <hr className="w-50 mx-auto border-primary border-2 mb-5" />
          
          <Row className="g-4">
            <Col md={3} className="text-center">
              <i className="fas fa-award text-primary fs-1 mb-3"></i>
              <p className="fs-5">
                Pioneer in the ROV Industry that has Developed Products with Global Standard.
              </p>
            </Col>
            
            <Col md={3} className="text-center">
              <i className="fas fa-trophy text-primary fs-1 mb-3"></i>
              <p className="fs-5">
                Market Leader in the ROV Industry in India for Non-Destructive Testing.
              </p>
            </Col>
            
            <Col md={3} className="text-center">
              <i className="fas fa-university text-primary fs-1 mb-3"></i>
              <p className="fs-5">
                Technical Support from Ministry of Electronics and Information Technology, India and IIT Bombay.
              </p>
            </Col>
            
            <Col md={3} className="text-center">
              <i className="fas fa-users text-primary fs-1 mb-3"></i>
              <p className="fs-5">
                Highly agile Organization Capable of Meeting Customer Requirements.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Who Can Become A Partner */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="border-0 shadow">
                <Card.Body className="p-5">
                  <h2 className="text-primary text-center mb-4">Who Can Become A Partner?</h2>
                  
                  <ul className="fs-5 list-unstyled">
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-primary me-3"></i>
                      Passionate about Technology and Innovation.
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-primary me-3"></i>
                      Great Connect with Government with Private Enterprises.
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-primary me-3"></i>
                      People Champion with a Customer-Centric Approach.
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-check-circle text-primary me-3"></i>
                      Aligned with our values and Aspiration.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Partnership Form */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold text-primary">Partner With Us</h2>
                <p className="fs-5 text-muted">Tell us a bit about Yourself</p>
              </div>
              
              <div className="bg-light p-5 rounded shadow">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          name="title"
                          placeholder="Title"
                          value={formData.title}
                          onChange={handleChange}
                          required
                          size="lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          size="lg"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          size="lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="tel"
                          name="phone"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          size="lg"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          name="designation"
                          placeholder="Designation"
                          value={formData.designation}
                          onChange={handleChange}
                          required
                          size="lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="url"
                          name="companyWebsite"
                          placeholder="Company Website"
                          value={formData.companyWebsite}
                          onChange={handleChange}
                          required
                          size="lg"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="companyAddress"
                      placeholder="Company Address"
                      value={formData.companyAddress}
                      onChange={handleChange}
                      required
                      size="lg"
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  
                  <div className="text-center">
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="px-5 py-3"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Partner;
