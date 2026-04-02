import React, { useState, useRef } from 'react';
import { Mail, Phone, Send, CheckCircle, Loader, X, Wrench } from 'lucide-react';
import ixarLogo from '../assets/ixar_logo.jpg';
import styles from './MaintenancePage.module.css';

const MaintenancePage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'ROV Inspection Services',
    'Underwater Surveying',
    'Equipment Rental',
    'Custom ROV Development',
    'Training & Consultation',
    'Maintenance & Support',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'e5a781f3-d123-4f5a-ad12-3960e4ed8702',
          from_name: formData.name,
          from_email: formData.email,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
          html: `
            <!DOCTYPE html><html><head><meta charset="utf-8"></head>
            <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f8f9fa;">
              <table width="100%" style="background:#f8f9fa;"><tr><td style="padding:20px;">
                <table width="600" style="max-width:600px;margin:0 auto;background:#fff;border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,.1);">
                  <tr><td style="padding:30px;text-align:center;border-bottom:3px solid #2563eb;">
                    <h1 style="color:#2563eb;margin:0;font-size:28px;">IXAR Robotic Solutions</h1>
                    <p style="color:#6b7280;margin:10px 0 0;font-size:18px;">New Contact Form Submission</p>
                  </td></tr>
                  <tr><td style="padding:25px;">
                    <table width="100%" style="background:#f1f5f9;border-radius:8px;margin-bottom:20px;"><tr><td style="padding:20px;">
                      <h2 style="color:#1e293b;margin:0 0 15px;font-size:20px;">Contact Details</h2>
                      <table width="100%">
                        <tr><td style="padding:8px 0;color:#374151;font-weight:600;width:140px;">Name:</td><td style="padding:8px 0;color:#1f2937;">${formData.name}</td></tr>
                        <tr><td style="padding:8px 0;color:#374151;font-weight:600;">Email:</td><td style="padding:8px 0;"><a href="mailto:${formData.email}" style="color:#2563eb;">${formData.email}</a></td></tr>
                        <tr><td style="padding:8px 0;color:#374151;font-weight:600;">Company:</td><td style="padding:8px 0;color:#1f2937;">${formData.company || 'Not specified'}</td></tr>
                        <tr><td style="padding:8px 0;color:#374151;font-weight:600;">Service:</td><td style="padding:8px 0;color:#1f2937;">${formData.service || 'Not specified'}</td></tr>
                      </table>
                    </td></tr></table>
                    <table width="100%" style="background:#f0fdf4;border-radius:8px;"><tr><td style="padding:20px;">
                      <h2 style="color:#1e293b;margin:0 0 15px;font-size:20px;">Message</h2>
                      <div style="color:#1f2937;line-height:1.6;background:#fff;padding:15px;border-radius:6px;border-left:4px solid #10b981;">${formData.message.replace(/\n/g, '<br>')}</div>
                    </td></tr></table>
                  </td></tr>
                </table>
              </td></tr></table>
            </body></html>
          `,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
          setIsDialogOpen(false);
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setIsSubmitted(false);
    setErrorMessage('');
  };

  return (
    <div className={styles.page}>
      {/* Animated background orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
      <div className={styles.gridOverlay} />

      <div className={styles.content}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <img src={ixarLogo} alt="IXAR Robotics" className={styles.logo} />
        </div>

        {/* Icon + Heading */}
        <div className={styles.iconWrapper}>
          <Wrench className={styles.wrenchIcon} />
        </div>

        <h1 className={styles.heading}>We'll Be Back Soon</h1>
        <p className={styles.subheading}>
          Our site is currently undergoing scheduled maintenance.<br />
          We appreciate your patience.
        </p>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Contact info */}
        <p className={styles.contactLabel}>For any queries, reach us at:</p>
        <div className={styles.contactCards}>
          <a href="mailto:ixarroboticsolutions@gmail.com" className={styles.contactCard}>
            <Mail className={styles.contactIcon} />
            <span>ixarroboticsolutions@gmail.com</span>
          </a>
          <a href="tel:+919575763347" className={styles.contactCard}>
            <Phone className={styles.contactIcon} />
            <span>+91 9575763347</span>
          </a>
        </div>

        {/* Contact Us button */}
        <button className={styles.contactButton} onClick={() => setIsDialogOpen(true)}>
          <Send className={styles.contactButtonIcon} />
          Contact Us
        </button>
      </div>

      {/* Dialog overlay */}
      {isDialogOpen && (
        <div className={styles.dialogOverlay} onClick={closeDialog}>
          <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
            <div className={styles.dialogHeader}>
              <h2 className={styles.dialogTitle}>Send Us a Message</h2>
              <button className={styles.closeButton} onClick={closeDialog}>
                <X className={styles.closeIcon} />
              </button>
            </div>

            {isSubmitted ? (
              <div className={styles.successMessage}>
                <CheckCircle className={styles.successIcon} />
                <p className={styles.successText}>Message sent! We'll get back to you soon.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                {errorMessage && (
                  <div className={styles.errorMessage}>{errorMessage}</div>
                )}

                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label className={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      placeholder="Your full name"
                    />
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.label}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className={styles.formField}>
                  <label className={styles.label}>Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your company name"
                  />
                </div>

                <div className={styles.formField}>
                  <label className={styles.label}>Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={styles.input}
                  >
                    <option value="">Select a service</option>
                    {services.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formField}>
                  <label className={styles.label}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button type="submit" className={styles.submitButton} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader className={`${styles.submitIcon} ${styles.spinning}`} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className={styles.submitIcon} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MaintenancePage;
