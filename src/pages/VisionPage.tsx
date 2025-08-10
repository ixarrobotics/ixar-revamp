import React from 'react';
import {
  Target,
  Users,
  Award
} from 'lucide-react';
import styles from './VisionPage.module.css';

const VisionPage: React.FC = () => {
  const companyValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'Pushing boundaries in underwater robotics technology'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Excellence',
      description: 'Collaborative approach with diverse expertise'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Commitment',
      description: 'Delivering reliable solutions that exceed expectations'
    }
  ];

  return (
    <div className={styles.minHeightScreen}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageOverlay}>
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Team collaboration"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroContentContainer}>
          <h1 className={styles.heroTitle}>
            Our Vision
          </h1>
          <p className={styles.heroSubtitle}>
            To be the global leader in underwater robotics, pioneering solutions that drive progress and sustainability.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesInnerContainer}>
          <div className={styles.valuesHeader}>
            <h2 className={styles.valuesTitle}>Our Core Values</h2>
            <p className={styles.valuesSubtitle}>The principles that drive our success</p>
          </div>

          <div className={styles.valuesGrid}>
            {companyValues.map((value, index) => (
              <div
                key={index}
                className={styles.valueCard}
              >
                <div className={styles.valueIconContainer}>
                  {value.icon}
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;
