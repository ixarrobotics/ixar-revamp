import React from 'react';
import { Feature } from '../../types';
import Card from './Card';
import styles from '../../styles/common.module.css';

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, className = '' }) => {
  const getGradientClass = (color: string) => {
    switch (color) {
      case 'from-yellow-400 to-orange-500':
        return styles.gradientYellowOrange;
      case 'from-green-400 to-emerald-500':
        return styles.gradientGreenEmerald;
      case 'from-blue-400 to-cyan-500':
        return styles.gradientBlueBlue;
      case 'from-blue-500 to-cyan-500':
        return styles.gradientBlueCyan;
      case 'from-purple-500 to-pink-500':
        return styles.gradientPurplePink;
      case 'from-emerald-500 to-teal-500':
        return styles.gradientEmeraldTeal;
      case 'from-orange-500 to-red-500':
        return styles.gradientOrangeRed;
      case 'from-indigo-500 to-purple-500':
        return styles.gradientIndigoPurple;
      default:
        return styles.gradientBlueCyan;
    }
  };

  return (
    <Card hover className={`${styles.textCenter} ${className}`}>
      <div className={`${styles.iconContainer} ${getGradientClass(feature.color)}`}>
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {feature.description}
      </p>
    </Card>
  );
};

export default FeatureCard;