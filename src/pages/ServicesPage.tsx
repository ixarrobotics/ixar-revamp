import React, { useState } from 'react';
import { Anchor, Zap, Mountain, Fuel, Grid as Bridge, Ship, CheckCircle, ArrowRight, Play } from 'lucide-react';
import styles from './ServicesPage.module.css';

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const industries = [
    {
      name: 'Ports & Marine',
      icon: <Anchor className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: ['Breakwater Inspection', 'Jetty & Wharf Assessment', 'Harbor Maintenance', 'Underwater Structures'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Power Generation',
      icon: <Zap className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: ['Intake/Outfall Pipelines', 'Cooling Water Systems', 'Tank Inspections', 'Thermal Monitoring'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Dams & Hydropower',
      icon: <Mountain className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: ['Dam Structure Assessment', 'Tunnel Inspections', 'Spillway Monitoring', 'Sediment Analysis'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Oil & Gas',
      icon: <Fuel className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: ['Pipeline Integrity', 'Platform Inspections', 'Subsea Equipment', 'Environmental Monitoring'],
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Bridge Infrastructure',
      icon: <Bridge className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: ['Pier Inspections', 'Foundation Assessment', 'Scour Monitoring', 'Structural Health'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Maritime Vessels',
      icon: <Ship className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: ['Hull Inspections', 'Propeller Analysis', 'Ballast Tank Survey', 'Coating Assessment'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <div className={styles.minHeightScreen}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageOverlay}>
          <img
            src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Underwater ROV"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroContentContainer}>
          <h1 className={styles.heroTitle}>
            Comprehensive ROV Services
          </h1>
          <p className={styles.heroSubtitle}>
            Advanced underwater inspection, surveying, and maintenance solutions powered by cutting-edge robotics technology
          </p>
          <button className={styles.heroButton}>
            <Play className={styles.heroButtonIcon} />
            Watch Our Services in Action
          </button>
        </div>
      </section>

      

      {/* Industries Section */}
      <section className={styles.industriesSection}>
        <div className={styles.industriesInnerContainer}>
          <div className={styles.industriesHeader}>
            <h2 className={styles.industriesTitle}>
              Industries We Serve
            </h2>
            <p className={styles.industriesSubtitle}>
              Delivering specialized underwater solutions across diverse sectors with proven expertise
            </p>
          </div>

          <div className={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`${styles.industryCard} group`}
              >
                <div className={styles.industryImageContainer}>
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className={`${styles.industryImage} group-hover:scale-110`}
                  />
                  <div className={styles.industryImageGradient} />
                  <div className={styles.industryIconContainer}>
                    <div className={`${styles.rovServiceIconContainer} bg-gradient-to-r ${industry.color}`}>
                      {industry.icon}
                    </div>
                  </div>
                  <div className={styles.industryTitleCard}>
                    <h3 className={styles.industryTitleCard}>{industry.name}</h3>
                  </div>
                </div>

                <div className={styles.industryCardContent}>
                  <div className={styles.industryServicesList}>
                    {industry.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className={styles.industryServiceItem}>
                        <CheckCircle className={styles.industryServiceIcon} />
                        <span className={styles.industryServiceText}>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInnerContainer}>
          <h2 className={styles.ctaTitle}>
            Ready to Explore the Depths?
          </h2>
          <p className={styles.ctaSubtitle}>
            Contact our experts to discuss your underwater inspection and surveying needs
          </p>
          <div className={styles.ctaButtonsContainer}>
            <button className={styles.requestQuoteButton}>
              Request Quote
              <ArrowRight className={styles.requestQuoteIcon} />
            </button>
            <button className={styles.scheduleConsultationButton}>
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
