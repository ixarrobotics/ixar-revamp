import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Globe,
  MessageSquare,
  Users,
  ArrowRight
} from 'lucide-react';
import styles from './ContactPage.module.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Our Location',
      details: ['102, Faizan Apartment', 'S. V. Road, Jogeshwari (West)', 'Mumbai 400-102, Maharashtra, India'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone & WhatsApp',
      details: ['+91 9930652916', 'Available 24/7 for emergencies'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['info@ixarrobotic.com', 'Response within 24 hours'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Emergency only'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const services = [
    'ROV Inspection Services',
    'Underwater Surveying',
    'Equipment Rental',
    'Custom ROV Development',
    'Training & Consultation',
    'Maintenance & Support',
    'Other'
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ixar-robotic-solution-209004212',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/IXAR-Robotics-Solutions-123677916277647',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/IxarRobotics?s=08',
      color: 'from-sky-400 to-sky-500'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/channel/UC8aWp3FRu_p-UzpAsHX8jXg',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ixar_robotic_solutions/',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <div className={styles.minHeightScreen}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageOverlay}>
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Contact us"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroContentContainer}>
          <h1 className={styles.heroTitle}>
            Get In Touch
          </h1>
          <p className={styles.heroSubtitle}>
            Ready to explore underwater possibilities? Let's discuss your project requirements
          </p>
          <div className={styles.heroStatsContainer}>
            <div className={styles.heroStatItem}>
              <MessageSquare className={styles.heroStatIcon} />
              <span>Quick Response</span>
            </div>
            <div className={styles.heroStatItem}>
              <Users className={styles.heroStatIcon} />
              <span>Expert Consultation</span>
            </div>
            <div className={styles.heroStatItem}>
              <Globe className={styles.heroStatIcon} />
              <span>Global Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactInnerContainer}>
          <div className={styles.contactGrid}>
            
            {/* Contact Form */}
            <div className={styles.contactFormCard}>
              <h2 className={styles.contactFormTitle}>Send Us a Message</h2>
              
              {isSubmitted && (
                <div className={styles.submissionSuccessMessage}>
                  <CheckCircle className={styles.submissionSuccessIcon} />
                  <span className={styles.submissionSuccessText}>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.formSpaceY6}>
                <div className={styles.formGridCols2}>
                  <div>
                    <label className={styles.formLabel}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className={styles.formLabel}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className={styles.formLabel}>
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className={styles.formLabel}>
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={styles.formInput}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={styles.formLabel}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${styles.formInput} ${styles.formTextarea}`}
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                >
                  <Send className={styles.submitButtonIcon} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className={styles.contactInfoSpaceY8}>
              <div>
                <h2 className={styles.contactInfoTitle}>Contact Information</h2>
                <p className={styles.contactInfoSubtitle}>
                  We're here to help you with all your underwater robotics needs. Reach out through any of these channels.
                </p>
              </div>

              <div className={styles.contactInfoGrid}>
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={styles.contactInfoCard}
                  >
                    <div className={styles.contactInfoFlex}>
                      <div className={`${styles.contactInfoIconContainer} bg-gradient-to-r ${info.color}`}>
                        {info.icon}
                      </div>
                      <div>
                        <h3 className={styles.contactInfoCardTitle}>{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className={styles.contactInfoDetailText}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className={styles.socialMediaCard}>
                <h3 className={styles.socialMediaTitle}>Follow Us</h3>
                <div className={styles.socialLinksFlex}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.socialLinkButton} bg-gradient-to-r ${social.color}`}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapInnerContainer}>
          <div className={styles.mapHeader}>
            <h2 className={styles.mapTitle}>Visit Our Office</h2>
            <p className={styles.mapSubtitle}>Located in the heart of Mumbai, easily accessible by public transport</p>
          </div>
          
          <div className={styles.mapCard}>
            <div className={styles.mapIframeContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4234567890123!2d72.8567890123456!3d19.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzI0LjQiTiA3MsKwNTEnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapIframe}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInnerContainer}>
          <h2 className={styles.ctaTitle}>
            Ready to Start Your Project?
          </h2>
          <p className={styles.ctaSubtitle}>
            Let's discuss how our ROV solutions can meet your underwater inspection and surveying needs
          </p>
          <div className={styles.ctaButtonsContainer}>
            <a
              href="tel:+919930652916"
              className={styles.callNowButton}
            >
              <Phone className={styles.callNowIcon} />
              Call Now: +91 9930652916
            </a>
            <a
              href="mailto:info@ixarrobotic.com"
              className={styles.emailUsButton}
            >
              <Mail className={styles.emailUsIcon} />
              Email Us
              <ArrowRight className={styles.emailUsArrowIcon} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
