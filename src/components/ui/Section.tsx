import React from 'react';
import { SectionProps } from '../../types';
import styles from '../../styles/common.module.css';

const Section: React.FC<SectionProps> = ({
  children,
  id,
  background = 'light',
  padding = 'md',
  className = '',
  ...props
}) => {
  const getBackgroundClass = () => {
    switch (background) {
      case 'dark':
        return 'bg-gray-900 text-white';
      case 'gradient':
        return 'bg-gradient-to-r from-blue-600 to-purple-600 text-white';
      default:
        return 'bg-white';
    }
  };

  const getPaddingClass = () => {
    switch (padding) {
      case 'sm':
        return styles.sectionPaddingSmall;
      case 'lg':
        return 'py-32';
      default:
        return styles.sectionPadding;
    }
  };

  const sectionClasses = [
    getBackgroundClass(),
    getPaddingClass(),
    className
  ].filter(Boolean).join(' ');

  return (
    <section id={id} className={sectionClasses} {...props}>
      <div className={styles.container}>
        {children}
      </div>
    </section>
  );
};

export default Section;