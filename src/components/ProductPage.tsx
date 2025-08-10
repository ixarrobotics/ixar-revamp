import React from 'react';
import { Section } from './ui';
import styles from '../styles/common.module.css';

interface ProductPageProps {
  title: string;
  description: string;
}

const ProductPage: React.FC<ProductPageProps> = ({ title, description }) => {
  return (
    <div className={styles.minHeightScreen}>
      <Section>
        <div className={styles.textCenter}>
          <h1 className={styles.sectionTitle}>{title}</h1>
          <div className={`${styles.cardBase} ${styles.cardGradient}`}>
            <p className={styles.sectionSubtitle}>
              {description}
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProductPage;