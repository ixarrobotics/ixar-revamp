import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

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
      
      toast.success('Message sent successfully! We will get back to you soon.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
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
      {/* Modern Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(var(--gradient-hero)), url('/assets/contact.8cf3e992.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh'
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title" style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)'}}>
            Contact <span className="text-accent">IXAR</span>
          </h1>
          <p className="hero-subtitle">
            Ready to dive deep? Let's discuss your underwater inspection needs
          </p>
          <div className="hero-cta">
            <a href="#contact-form" className="hero-btn hero-btn-primary">
              <i className="fas fa-envelope me-2"></i>
              Send Message
            </a>
            <a href="tel:+919930652916" className="hero-btn hero-btn-secondary">
              <i className="fas fa-phone me-2"></i>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Modern Contact Form Section */}
      <section className="section" id="contact-form">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have a project in mind? Let's discuss how we can help with your underwater inspection needs
            </p>
          </div>
          
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="contact-form">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <div className="form-group">
                        <label className="form-label">
                          <i className="fas fa-user me-2"></i>
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-group">
                        <label className="form-label">
                          <i className="fas fa-envelope me-2"></i>
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  
                  <div className="form-group">
                    <label className="form-label">
                      <i className="fas fa-phone me-2"></i>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">
                      <i className="fas fa-comment-alt me-2"></i>
                      Message
                    </label>
                    <textarea
                      rows={6}
                      name="message"
                      className="form-control"
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-modern btn-primary"
                      style={{fontSize: '1.1rem', padding: '1rem 3rem'}}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="loading-spinner me-2" style={{width: '20px', height: '20px'}}></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modern Contact Information */}
      <section className="section section-alt">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">Visit Our Office</h2>
            <p className="section-subtitle">
              Come and see our ROV technology in action at our Mumbai facility
            </p>
          </div>

          <Row className="align-items-center mb-5">
            <Col lg={4} className="text-center mb-4 mb-lg-0">
              <div className="modern-card" style={{padding: '2rem'}}>
                <img
                  src="/assets/contactrov.b5d8abce.webp"
                  alt="ROV Technology"
                  className="img-fluid rounded"
                  style={{ maxHeight: '250px', marginBottom: '1rem' }}
                />
                <h4 className="modern-card-title">Advanced ROV Systems</h4>
                <p className="modern-card-text">
                  Experience our state-of-the-art underwater robotics technology
                </p>
              </div>
            </Col>
            
            <Col lg={8}>
              <Row>
                <Col md={6} className="mb-4">
                  <div className="contact-info-card">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h4 className="contact-title">Office Address</h4>
                    <div className="contact-detail">
                      102, Faizan Apartment, S. V. Road,<br />
                      Jogeshwari (West), Mumbai 400-102,<br />
                      Maharashtra, India
                    </div>
                  </div>
                </Col>
                
                <Col md={6} className="mb-4">
                  <div className="contact-info-card">
                    <div className="contact-icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <h4 className="contact-title">Business Hours</h4>
                    <div className="contact-detail">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </div>
                  </div>
                </Col>
                
                <Col md={6} className="mb-4">
                  <div className="contact-info-card">
                    <div className="contact-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <h4 className="contact-title">Phone Numbers</h4>
                    <div className="contact-detail">
                      <a href="tel:+919930652916">+91 9930652916</a><br />
                      <a href="tel:+918591327171">+91 8591327171</a>
                    </div>
                  </div>
                </Col>
                
                <Col md={6} className="mb-4">
                  <div className="contact-info-card">
                    <div className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <h4 className="contact-title">Email Addresses</h4>
                    <div className="contact-detail">
                      <a href="mailto:info@ixarrobotic.com">info@ixarrobotic.com</a><br />
                      <a href="mailto:ixarroboticsolutions@gmail.com">ixarroboticsolutions@gmail.com</a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Call to Action */}
          <div className="text-center">
            <div className="modern-card" style={{padding: '3rem', maxWidth: '600px', margin: '0 auto'}}>
              <h3 className="modern-card-title">Ready to Start Your Project?</h3>
              <p className="modern-card-text mb-4">
                Our team of experts is ready to discuss your underwater inspection needs and provide tailored solutions.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a href="#contact-form" className="btn-modern btn-primary">
                  <i className="fas fa-envelope me-2"></i>
                  Send Message
                </a>
                <a href="tel:+919930652916" className="btn-modern btn-secondary">
                  <i className="fas fa-phone me-2"></i>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
