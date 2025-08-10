import React, { useState } from 'react';
import { Camera, Ruler, Layers, Radar, Settings, Waves, CheckCircle, ArrowRight } from 'lucide-react';
import styles from './OurSolutions.module.css';

const OurSolutions: React.FC = () => {
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

  return (
    <div className={styles.minHeightScreen}>
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
    </div>
  );
};

export default OurSolutions;