import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle, 
  Award, 
  Trophy, 
  Users, 
  Zap,
  Globe,
  Target,
  ArrowRight,
  Building,
  Mail,
  Phone,
  User,
  Briefcase,
  MessageSquare
} from 'lucide-react';
import styles from './PartnerPage.module.css';

const PartnerPage: React.FC = () => {
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
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
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const partnerBenefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Global Standard Products',
      description: 'Pioneer in the ROV Industry that has developed products with global standards and cutting-edge technology.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Market Leadership',
      description: 'Market leader in the ROV industry in India for non-destructive testing and underwater inspections.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Government Support',
      description: 'Technical support from Ministry of Electronics and Information Technology, India and IIT Bombay.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Agile Organization',
      description: 'Highly agile organization capable of meeting diverse customer requirements with rapid deployment.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Collaborate on R&D and technology development',
      features: ['Joint product development', 'Technology licensing', 'Innovation partnerships'],
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Distribution Partners',
      description: 'Expand our market reach globally',
      features: ['Regional distribution rights', 'Sales support', 'Marketing collaboration'],
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Service Partners',
      description: 'Provide comprehensive service solutions',
      features: ['Service delivery', 'Technical support', 'Training programs'],
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <div className={styles.minHeightScreen}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageOverlay}>
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Partnership collaboration"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroContentContainer}>
          <h1 className={styles.heroTitle}>
            Partner With Us
          </h1>
          <p className={styles.heroSubtitle}>
            Join forces with IXAR and unlock new opportunities in the rapidly evolving underwater robotics industry
          </p>
          <div className={styles.heroStatsContainer}>
            <div className={styles.heroStatItem}>
              <Globe className={styles.heroStatIcon} />
              <span>Global Reach</span>
            </div>
            <div className={styles.heroStatItem}>
              <Target className={styles.heroStatIcon} />
              <span>Strategic Growth</span>
            </div>
            <div className={styles.heroStatItem}>
              <Zap className={styles.heroStatIcon} />
              <span>Innovation Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className={styles.whyPartnerSection}>
        <div className={styles.whyPartnerInnerContainer}>
          <div className={styles.whyPartnerHeader}>
            <h2 className={styles.whyPartnerTitle}>
              Why Partner With IXAR?
            </h2>
            <p className={styles.whyPartnerSubtitle}>
              Experience the advantages of partnering with India's leading underwater robotics company
            </p>
          </div>

          <div className={styles.partnerBenefitsGrid}>
            {partnerBenefits.map((benefit, index) => (
              <div
                key={index}
                className={styles.benefitCard}
              >
                <div className={`${styles.benefitIconContainer} bg-gradient-to-r ${benefit.color}`}>
                  {benefit.icon}
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className={styles.partnershipTypesSection}>
        <div className={styles.partnershipTypesInnerContainer}>
          <div className={styles.partnershipTypesHeader}>
            <h2 className={styles.partnershipTypesTitle}>
              Partnership Opportunities
            </h2>
            <p className={styles.partnershipTypesSubtitle}>
              Choose the partnership model that aligns with your business goals
            </p>
          </div>

          <div className={styles.partnershipTypesGrid}>
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className={styles.partnershipTypeCard}
              >
                <div className={`${styles.partnershipTypeCardHeader} bg-gradient-to-r ${type.color}`} />
                <div className={styles.partnershipTypeCardContent}>
                  <h3 className={styles.partnershipTypeTitle}>{type.title}</h3>
                  <p className={styles.partnershipTypeDescription}>{type.description}</p>
                  <div className={styles.partnershipFeaturesList}>
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={styles.partnershipFeatureItem}>
                        <CheckCircle className={styles.partnershipFeatureIcon} />
                        <span className={styles.partnershipFeatureText}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form Section */}
      <section className={styles.partnershipFormSection}>
        <div className={styles.partnershipFormInnerContainer}>
          <div className={styles.partnershipFormHeader}>
            <h2 className={styles.partnershipFormTitle}>
              Become a Valued Partner
            </h2>
            <p className={styles.partnershipFormSubtitle}>
              Submit your partnership inquiry and let's explore how we can grow together
            </p>
          </div>

          <div className={styles.partnershipFormWrapper}>
            <div className={styles.partnershipFormCard}>
              {isSubmitted && (
                <div className={styles.submissionSuccessMessage}>
                  <CheckCircle className={styles.submissionSuccessIcon} />
                  <div>
                    <h3 className={styles.submissionSuccessTitle}>Partnership Inquiry Sent!</h3>
                    <p className={styles.submissionSuccessText}>We'll contact you within 24 hours to discuss opportunities.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.formSpaceY6}>
                <div className={styles.formGridCols2}>
                  <div>
                    <label className={styles.formLabel}>
                      <User className={styles.formLabelIcon} />
                      Title *
                    </label>
                    <select
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                    >
                      <option value="">Select Title</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Dr.">Dr.</option>
                    </select>
                  </div>
                  <div>
                    <label className={styles.formLabel}>
                      <User className={styles.formLabelIcon} />
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
                </div>

                <div className={styles.formGridCols2}>
                  <div>
                    <label className={styles.formLabel}>
                      <Mail className={styles.formLabelIcon} />
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
                  <div>
                    <label className={styles.formLabel}>
                      <Phone className={styles.formLabelIcon} />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className={styles.formGridCols2}>
                  <div>
                    <label className={styles.formLabel}>
                      <Briefcase className={styles.formLabelIcon} />
                      Designation *
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                      placeholder="CEO, Director, Manager, etc."
                    />
                  </div>
                  <div>
                    <label className={styles.formLabel}>
                      <Globe className={styles.formLabelIcon} />
                      Company Website *
                    </label>
                    <input
                      type="url"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      required
                      className={styles.formInput}
                      placeholder="https://www.yourcompany.com"
                    />
                  </div>
                </div>

                <div>
                  <label className={styles.formLabel}>
                    <Building className={styles.formLabelIcon} />
                    Company Address *
                  </label>
                  <input
                    type="text"
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                    placeholder="Complete company address"
                  />
                </div>

                <div>
                  <label className={styles.formLabel}>
                    <MessageSquare className={styles.formLabelIcon} />
                    Partnership Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${styles.formInput} ${styles.formTextarea}`}
                    placeholder="Tell us about your company, partnership interests, market presence, and how you envision collaborating with IXAR..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${styles.submitButton} ${isSubmitting ? '' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.submitButtonSpinner}></div>
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      <Send className={styles.submitButtonIcon} />
                      Submit Partnership Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInnerContainer}>
          <h2 className={styles.ctaTitle}>
            Ready to Transform the Industry?
          </h2>
          <p className={styles.ctaSubtitle}>
            Join IXAR in revolutionizing underwater robotics and expanding into new markets worldwide
          </p>
          <div className={styles.ctaButtonsContainer}>
            <a
              href="tel:+919930652916"
              className={styles.callButton}
            >
              <Phone className={styles.callIcon} />
              Call: +91 9930652916
            </a>
            <a
              href="mailto:info@ixarrobotic.com"
              className={styles.emailButton}
            >
              <Mail className={styles.emailIcon} />
              Email Us
              <ArrowRight className={styles.emailArrowIcon} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;
