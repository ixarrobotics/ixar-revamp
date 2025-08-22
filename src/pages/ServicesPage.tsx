import React from 'react'
import {
  CheckCircle,
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
        
        {/* Floating Underwater Elements */}
        {/* <div className={styles.floatingUnderwaterElements}>
          <div className={styles.underwaterElement1}>🐠</div>
          <div className={styles.underwaterElement2}>🌊</div>
          <div className={styles.underwaterElement3}>🤖</div>
          <div className={styles.underwaterElement4}>🔍</div>
        </div> */}
        
        {/* Morphing Water Shapes */}
        <div className={styles.morphingWaterShapes}>
          <div className={styles.waterShape1}></div>
          <div className={styles.waterShape2}></div>
        </div>
        
        <div className={styles.heroContentContainer}>
          <h1 className={`${styles.heroTitle} ${styles.heroTitleSpectacular}`}>
            <span className={styles.titleWordGlow}>Comprehensive</span>{" "}
            <span className={styles.titleWordGlow}>ROV</span>{" "}
            <span className={styles.titleWordGlow}>Services</span>
          </h1>
          <p className={`${styles.heroSubtitle} ${styles.heroSubtitleSpectacular}`}>
            Advanced underwater inspection, surveying, and maintenance solutions
            powered by cutting-edge robotics technology
          </p>
          <button className={`${styles.heroButton} ${styles.heroButtonSpectacular}`}>
            <Play className={`${styles.heroButtonIcon} ${styles.heroButtonIconSpectacular}`} />
            <span className={styles.buttonTextSpectacular}>Watch Our Services in Action</span>
          </button>
        </div>
      </section>

      {/* Industries Section */}
      <section className={`${styles.industriesSection} ${styles.sectionBgAlternate1}`}>
        {/* Floating Industry Elements */}
        {/* <div className={styles.floatingIndustryElements}>
          <div className={styles.industryElement1}>🏭</div>
          <div className={styles.industryElement2}>🚢</div>
          <div className={styles.industryElement3}>🏗️</div>
          <div className={styles.industryElement4}>🔍</div>
          <div className={styles.industryElement5}>⚡</div>
          <div className={styles.industryElement6}>🌊</div>
        </div> */}
        
        {/* Morphing Industry Background */}
        <div className={styles.morphingIndustryBackground}>
          <div className={styles.industryMorph1}></div>
          <div className={styles.industryMorph2}></div>
          <div className={styles.industryMorph3}></div>
        </div>
        
        <div className={styles.industriesInnerContainer}>
          <div className={styles.industriesHeader}>
            <h2 className={`${styles.industriesTitle} ${styles.industriesTitleSpectacular}`}>
              <span className={styles.industryTitleGlow}>Industries</span>{" "}
              <span className={styles.industryTitleGlow}>We</span>{" "}
              <span className={styles.industryTitleGlow}>Serve</span>
            </h2>
            <p className={`${styles.industriesSubtitle} ${styles.industriesSubtitleSpectacular}`}>
              Delivering specialized underwater solutions across diverse sectors
              with proven expertise
            </p>
          </div>

          <div className={`${styles.industriesGrid} ${styles.industriesGridAnimated}`}>
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`${styles.industryCard} ${styles.industryCardGroup} ${styles.industryCardAnimated} ${styles.industryCardSpectacular}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Floating Industry Particles */}
                <div className={styles.industryCardParticles}>
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className={styles.industryParticle} style={{ '--particle-delay': `${i * 0.1}s` } as React.CSSProperties} />
                  ))}
                </div>
                
                <div className={styles.industryImageContainer}>
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className={`${styles.industryImage} ${styles.industryImageHover}`}
                  />
                  <div className={styles.industryImageGradient} />
                  <div className={styles.industryIconContainer}>
                    <div
                      className={`${styles.rovServiceIconContainer} ${industry.gradientClass} ${styles.industryIconSpectacular}`}
                    >
                      {industry.icon}
                    </div>
                    {/* Icon Glow Effect */}
                    <div className={styles.industryIconGlow}></div>
                  </div>
                  <div className={styles.industryTitleCard}>
                    <h3 className={`${styles.industryTitleCard} ${styles.industryTitleCardSpectacular}`}>
                      {industry.name}
                    </h3>
                  </div>
                </div>

                <div className={styles.industryCardContent}>
                  <div className={styles.industryServicesList}>
                    {industry.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className={`${styles.industryServiceItem} ${styles.industryServiceItemSpectacular}`}
                        style={{ animationDelay: `${serviceIndex * 0.1}s` }}
                      >
                        <CheckCircle className={`${styles.industryServiceIcon} ${styles.industryServiceIconSpectacular}`} />
                        <span className={`${styles.industryServiceText} ${styles.industryServiceTextSpectacular}`}>
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

    </div>
  )
}

export default ServicesPage
