import React from 'react';
import { CardProps } from '../../types';
import styles from '../../styles/common.module.css';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  gradient = false,
  color,
  ...props
}) => {
  const cardClasses = [
    styles.cardBase,
    hover ? styles.cardHover : '',
    gradient ? styles.cardGradient : '',
    className
  ].filter(Boolean).join(' ');

  const cardStyle = color ? { borderTop: `4px solid ${color}` } : {};

  return (
    <div className={cardClasses} style={cardStyle} {...props}>
      {children}
    </div>
  );
};

export default Card;