import React, { useState } from 'react';
import { Camera, Ruler, Layers, Radar, Settings, Waves, Anchor, Zap, Mountain, Fuel, Grid as Bridge, Ship, CheckCircle, ArrowRight, Play } from 'lucide-react';
import styles from './ServicesPage.module.css';

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const rovServices = [
    {
      title: 'HD Videoscope Inspection',
      icon: <Camera className="w-8 h-8" />,
      description: 'Crystal-clear underwater video inspection with 4K recording capabilities',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['4K Ultra HD recording', 'Real-time streaming', 'Low-light enhancement', 'Digital zoom capabilities'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Precision Laser Scaling',
      icon: <Ruler className="w-8 h-8" />,
      description: 'Accurate measurement and dimensional analysis using advanced laser technology',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['±1mm accuracy', 'Real-time measurements', '3D point cloud generation', 'CAD integration'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Thickness Analysis (UT & PECT)',
      icon: <Layers className="w-8 h-8" />,
      description: 'Non-destructive testing for material integrity and corrosion assessment',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Ultrasonic testing', 'Pulsed eddy current', 'Corrosion mapping', 'Detailed reporting'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Advanced Sonar Mapping',
      icon: <Radar className="w-8 h-8" />,
      description: 'High-resolution sonar systems for underwater mapping and object detection',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['360° scanning', 'Multi-beam sonar', 'Object classification', 'Bathymetric mapping'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Custom R&D Solutions',
      icon: <Settings className="w-8 h-8" />,
      description: 'Tailored research and development for specialized underwater applications',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Custom sensor integration', 'Prototype development', 'Field testing', 'Technical consultation'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Bathymetry & Surveying',
      icon: <Waves className="w-8 h-8" />,
      description: 'Comprehensive underwater topography mapping and depth measurements',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['High-resolution mapping', 'GPS integration', 'Contour generation', 'Volume calculations'],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

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

      {/* ROV Services Section */}
      <section className={styles.rovServicesSection}>
        <div className={styles.rovServicesInnerContainer}>
          <div className={styles.rovServicesHeader}>
            <h2 className={styles.rovServicesTitle}>
              Advanced ROV Capabilities
            </h2>
            <p className={styles.rovServicesSubtitle}>
              Our state-of-the-art ROV systems deliver precision, reliability, and comprehensive data collection
            </p>
          </div>

          <div className={styles.rovServicesContentGrid}>
            <div className={styles.rovServiceList}>
              {rovServices.map((service, index) => (
                <div
                  key={index}
                  className={`${styles.rovServiceItem} ${
                    activeService === index
                      ? styles.rovServiceItemActive
                      : styles.rovServiceItemInactive
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className={styles.rovServiceItemFlex}>
                    <div className={`${styles.rovServiceIconContainer} bg-gradient-to-r ${service.color}`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={styles.rovServiceTitle}>{service.title}</h3>
                      <p className={styles.rovServiceDescription}>{service.description}</p>
                    </div>
                    <ArrowRight className={`${styles.rovServiceArrowIcon} ${
                      activeService === index ? styles.rovServiceArrowIconRotate : ''
                    }`} />
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.rovServiceImageContainer}>
              <div className={styles.rovServiceImageWrapper}>
                <img
                  src={rovServices[activeService].image}
                  alt={rovServices[activeService].title}
                  className={styles.rovServiceImage}
                />
                <div className={styles.rovServiceImageGradient} />
                <div className={styles.rovServiceImageTextContent}>
                  <h3 className={styles.rovServiceImageTitle}>
                    {rovServices[activeService].title}
                  </h3>
                  <div className={styles.rovServiceFeaturesGrid}>
                    {rovServices[activeService].features.map((feature, index) => (
                      <div key={index} className={styles.rovServiceFeatureItem}>
                        <CheckCircle className={styles.rovServiceFeatureIcon} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
