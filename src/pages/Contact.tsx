import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      
      toast.success('Message sent successfully! We will get back to you soon.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>IXAR Robotic Solutions | Contact Us</title>
        <meta name="description" content="Get in touch with IXAR Robotic Solutions for any inquiries or to discuss your project requirements." />
      </Helmet>

      <header className="page-header contact-hero">
        <Container>
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">We'd love to hear from you. Reach out to us for any inquiries.</p>
        </Container>
      </header>

      <section className="section contact-section">
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="map-container rounded shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.090503875899!2d72.8369003149029!3d19.14370098704909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c1a2b3b3b3%3A0x5b3b3b3b3b3b3b3b!2sFaizan%20Apartment!5e0!3m2!1sen!2sin!4v1629456789012!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="IXAR Robotic Solutions Location"
                ></iframe>
              </div>
            </Col>
            <Col lg={6}>
              <h2 className="section-title">Get in Touch</h2>
              <Form onSubmit={handleSubmit} className="contact-form mb-5">
                <Form.Group className="form-floating mb-3">
                  <Form.Control type="text" name="name" id="nameInput" value={formData.name} onChange={handleChange} required />
                  <Form.Label htmlFor="nameInput">Your Name</Form.Label>
                </Form.Group>
                <Form.Group className="form-floating mb-3">
                  <Form.Control type="email" name="email" id="emailInput" value={formData.email} onChange={handleChange} required />
                  <Form.Label htmlFor="emailInput">Your Email</Form.Label>
                </Form.Group>
                <Form.Group className="form-floating mb-3">
                  <Form.Control type="tel" name="phone" id="phoneInput" value={formData.phone} onChange={handleChange} required />
                  <Form.Label htmlFor="phoneInput">Your Phone</Form.Label>
                </Form.Group>
                <Form.Group className="form-floating mb-3">
                  <Form.Control as="textarea" name="message" id="messageInput" rows={5} value={formData.message} onChange={handleChange} required />
                  <Form.Label htmlFor="messageInput">Your Message</Form.Label>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={isSubmitting} className="d-flex align-items-center justify-content-center">
                  {isSubmitting ? 'Sending...' : 'Send Message'} <i className="fas fa-paper-plane ms-2"></i>
                </Button>
              </Form>
            </Col>
          </Row>
          <Row className="mt-5"> {/* New Row for Contact Information */}
            <Col lg={12}>
              <h2 className="section-title text-center">Contact Information</h2>
              <div className="contact-info">
                <Row className="justify-content-center"> {/* Center the contact items */}
                  <Col md={4} className="mb-4">
                    <div className="contact-item contact-card text-center"> {/* Center text within card */}
                      <i className="fas fa-map-marker-alt mb-3"></i> {/* Add margin below icon */}
                      <div>
                        <h5>Address</h5>
                        <p>102, Faizan Apartment, S. V. Road, Jogeshwari (West), Mumbai 400-102, Maharashtra, India</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="contact-item contact-card text-center">
                      <i className="fas fa-phone mb-3"></i>
                      <div>
                        <h5>Phone</h5>
                        <p>+91 9930652916</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="contact-item contact-card text-center">
                      <i className="fas fa-envelope mb-3"></i>
                      <div>
                        <h5>Email</h5>
                        <p>info@ixarrobotic.com</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;