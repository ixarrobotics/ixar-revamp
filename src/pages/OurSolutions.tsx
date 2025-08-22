import React from 'react';
import { CheckCircle, Ship, Building2, Shield, ArrowRight } from 'lucide-react';
import styles from './OurSolutions.module.css';

const OurSolutions: React.FC = () => {
  const solutions = [
    {
      id: 'rov',
      title: 'Remotely Operated Vehicle (ROV)',
      icon: <Ship className="w-8 h-8" />,
      description: 'Advanced underwater robotics for comprehensive inspection and maintenance operations',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Underwater 4K Videography',
        'Underwater Coordination System (USBL)',
        'Sonar Survey',
        'Defect Measurement',
        'Underwater Ultrasonic Testing (UT)',
        'Water Sampling',
        'Bathymetric Survey'
      ],
      color: 'from-blue-600 to-cyan-600',
      category: 'Underwater Robotics'
    },
    {
      id: 'crawler',
      title: 'Crawler',
      icon: <Building2 className="w-8 h-8" />,
      description: 'Specialized crawler systems for confined space inspection and maintenance',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Thickness Measurement Through Ultrasonic Testing (UT)',
        'Visual Inspection'
      ],
      color: 'from-purple-600 to-pink-600',
      category: 'Confined Space Solutions'
    },
    {
      id: 'magnetic-crawler',
      title: 'Magnetic Crawler',
      icon: <Shield className="w-8 h-8" />,
      description: 'Magnetic adhesion technology for vertical and overhead surface inspection',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Thickness Measurement Through Ultrasonic Testing (UT)',
        'Visual Inspection',
        'Vessel Hull Cleaning'
      ],
      color: 'from-emerald-600 to-teal-600',
      category: 'Magnetic Solutions'
    }
  ];

  return (
    <div className={styles.minHeightScreen}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageOverlay}>
          <img
            src="https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Underwater ROV Solutions"
            className={styles.heroImage}
          />
        </div>
        
        {/* Floating Underwater Elements */}
        {/* <div className={styles.floatingUnderwaterElements}>
          <div className={styles.underwaterElement1}>🤖</div>
          <div className={styles.underwaterElement2}>🌊</div>
          <div className={styles.underwaterElement3}>🔍</div>
          <div className={styles.underwaterElement4}>⚡</div>
        </div> */}
        
        {/* Morphing Water Shapes */}
        {/* <div className={styles.morphingWaterShapes}>
          <div className={styles.waterShape1}></div>
          <div className={styles.waterShape2}></div>
        </div> */}
        
        <div className={styles.heroContentContainer}>
          <h1 className={`${styles.heroTitle} ${styles.heroTitleSpectacular}`}>
            <span className={styles.titleWordGlow}>Our</span>{" "}
            <span className={styles.titleWordGlow}>Solutions</span>
          </h1>
          <p className={`${styles.heroSubtitle} ${styles.heroSubtitleSpectacular}`}>
            We revolutionize underwater inspection with in-house ROVs and Crawlers powered by robotics, AI, and precision engineering to deliver unmatched clarity, safety, and confidence in asset management
          </p>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section className={styles.solutionsSection}>
        <div className={styles.solutionsInnerContainer}>
          {/* <div className={styles.solutionsHeader}>
            <h2 className={styles.solutionsTitle}>
              Comprehensive <span className={styles.solutionsTitleHighlight}>Product Portfolio</span>
            </h2>
            <p className={styles.solutionsSubtitle}>
              From advanced ROV systems to specialized crawlers, we provide the complete toolkit for underwater inspection and maintenance
            </p>
          </div> */}

          <div className={styles.solutionsGrid}>
            {solutions.map((solution, index) => (
              <div 
                key={solution.id} 
                className={`${styles.solutionCard} ${index % 2 === 0 ? styles.solutionCardLeft : styles.solutionCardRight}`}
              >
                <div className={styles.solutionCardContent}>
                  {/* Image Section */}
                  <div className={`${styles.solutionImageContainer} ${
                    index % 2 === 0 ? styles.solutionImageLeft : styles.solutionImageRight
                  }`}>
                    <div className={styles.solutionImageWrapper}>
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className={styles.solutionImage}
                      />
                      <div className={styles.solutionImageOverlay} />
                      <div className={styles.solutionCategory}>
                        {solution.category}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${styles.solutionContent} ${
                    index % 2 === 0 ? styles.solutionContentRight : styles.solutionContentLeft
                  }`}>
                    <div className={styles.solutionHeader}>
                      <div className={`${styles.solutionIconContainer} bg-gradient-to-r ${solution.color}`}>
                        {solution.icon}
                      </div>
                      <h3 className={styles.solutionTitle}>{solution.title}</h3>
                    </div>
                    
                    <p className={styles.solutionDescription}>{solution.description}</p>
                    
                    <div className={styles.solutionFeatures}>
                      <h4 className={styles.solutionFeaturesTitle}>Key Capabilities:</h4>
                      <ul className={styles.solutionFeaturesList}>
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className={styles.solutionFeatureItem}>
                            <CheckCircle className={styles.solutionFeatureIcon} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.solutionCTA}>
                      <button className={`${styles.solutionCTAButton} bg-gradient-to-r ${solution.color}`}>
                        Learn More
                        <ArrowRight className={styles.solutionCTAArrow} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurSolutions;