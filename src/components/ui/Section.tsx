import React, { forwardRef } from 'react';
import { SectionProps } from '../../types';
import styles from '../../styles/common.module.css';

const Section = forwardRef<HTMLElement, SectionProps>(({
  children,
  id,
  background = 'light',
  padding = 'md',
  className = '',
  ...props
}, ref) => {
  const getBackgroundClass = () => {
    // If custom className contains background classes, don't apply default background
    if (className && (className.includes('sectionBgAlternate') || className.includes('sectionBg') || className.includes('bg-'))) {
      return '';
    }
    
    switch (background) {
      case 'dark':
        return 'bg-gray-900 text-white';
      case 'gradient':
        return `${styles.sectionBgGradient} text-white`;
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
    <section id={id} className={sectionClasses} ref={ref} {...props}>
      <div className={styles.container}>
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;