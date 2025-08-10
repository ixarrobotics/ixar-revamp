import React from 'react';
import { ButtonProps } from '../../types';
import styles from '../../styles/common.module.css';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return styles.buttonPrimary;
      case 'secondary':
        return styles.buttonSecondary;
      case 'outline':
        return styles.buttonOutline;
      case 'cta':
        return styles.buttonCta;
      default:
        return styles.buttonPrimary;
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return styles.buttonSmall;
      case 'lg':
        return styles.buttonLarge;
      default:
        return '';
    }
  };

  const buttonClasses = [
    styles.buttonBase,
    getVariantClass(),
    getSizeClass(),
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;