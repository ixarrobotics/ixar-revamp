import React from 'react'
import {
  CheckCircle,
  ArrowRight,
  Play,
  Flame,
  Ship,
  Building2,
  Search,
} from 'lucide-react'
import styles from './ServicesPage.module.css'

const ServicesPage: React.FC = () => {
  const industries = [
    {
      name: 'Oil & Gas',
      icon: <Flame className={styles.iconLarge} />,
      image:
        'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: [
        'Underwater Visual Inspection of Pipeline (inside/Outside), Water Storage Tank, Cooling Tower Sump',
        'Visual Inspection of Offshore Platform & Pipeline',
        'Robotic Cleaning using ROV & Crowler/Magnetic Crowler',
        'Underwater Ultrasonic Testing',
      ],
      gradientClass: styles.gradientBlueToTeal,
    },
    {
      name: 'Ships & Ports',
      icon: <Ship className={styles.iconLarge} />,
      image:
        'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: [
        'Underwater Visual Inspection of Ship Structure',
        'Underwater Visual Inspection of Ports & Jetty',
        'Robotic Cleaning of Ship Hull',
        'Underwater Ultrasonic Testing',
      ],
      gradientClass: styles.gradientYellowToOrange,
    },
    {
      name: 'Submersible Structure',
      icon: <Building2 className={styles.iconLarge} />,
      image:
        'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: [
        'Underwater Visual Inspection Bridge Piles',
        'Underwater Visual Inspection of Jetty',
        'Cleaning of Piles',
        'UPV Testing of Underwater Concrete Structure',
        'Bathymetric Survey',
        'Sonar Survey',
      ],
      gradientClass: styles.gradientGreenToEmerald,
    },
    {
      name: 'Search & Rescue',
      icon: <Search className={styles.iconLarge} />,
      image:
        'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: [
        'Underwater Searching and Coordination System',
        'Underwater Robotic Gripper Arm for Rescue',
      ],
      gradientClass: styles.gradientGrayToDark,
    },
  ]

  return (
    <div className={styles.minHeightScreen}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageOverlay}>
          <img
            src="https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Underwater ROV"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroContentContainer}>
          <h1 className={styles.heroTitle}>Comprehensive ROV Services</h1>
          <p className={styles.heroSubtitle}>
            Advanced underwater inspection, surveying, and maintenance solutions
            powered by cutting-edge robotics technology
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
            <h2 className={styles.industriesTitle}>Industries We Serve</h2>
            <p className={styles.industriesSubtitle}>
              Delivering specialized underwater solutions across diverse sectors
              with proven expertise
            </p>
          </div>

          <div className={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`${styles.industryCard} ${styles.industryCardGroup}`}
              >
                <div className={styles.industryImageContainer}>
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className={`${styles.industryImage} ${styles.industryImageHover}`}
                  />
                  <div className={styles.industryImageGradient} />
                  <div className={styles.industryIconContainer}>
                    <div
                      className={`${styles.rovServiceIconContainer} ${industry.gradientClass}`}
                    >
                      {industry.icon}
                    </div>
                  </div>
                  <div className={styles.industryTitleCard}>
                    <h3 className={styles.industryTitleCard}>
                      {industry.name}
                    </h3>
                  </div>
                </div>

                <div className={styles.industryCardContent}>
                  <div className={styles.industryServicesList}>
                    {industry.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className={styles.industryServiceItem}
                      >
                        <CheckCircle className={styles.industryServiceIcon} />
                        <span className={styles.industryServiceText}>
                          {service}
                        </span>
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
          <h2 className={styles.ctaTitle}>Ready to Explore the Depths?</h2>
          <p className={styles.ctaSubtitle}>
            Contact our experts to discuss your underwater inspection and
            surveying needs
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
  )
}

export default ServicesPage
