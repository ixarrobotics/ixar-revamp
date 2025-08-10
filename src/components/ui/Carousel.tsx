import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselProps } from '../../types';
import styles from './Carousel.module.css';

function Carousel<T>({
  items,
  visibleItems = 3,
  autoScroll = true,
  autoScrollInterval = 3000,
  renderItem,
  className = ''
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % (items.length - visibleItems + 1)
      );
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [autoScroll, autoScrollInterval, items.length, visibleItems]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - visibleItems : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (items.length - visibleItems + 1)
    );
  };

  return (
    <div className={`${styles.carouselContainer} ${className}`}>
      <button 
        className={`${styles.navButton} ${styles.navButtonLeft}`}
        onClick={handlePrev}
        aria-label="Previous items"
      >
        <ChevronLeft className={styles.navIcon} />
      </button>
      
      <div className={styles.carouselWrapper}>
        <div 
          className={styles.carouselTrack}
          style={{ 
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            width: `${(items.length / visibleItems) * 100}%`
          }}
        >
          {items.map((item, index) => (
            <div 
              key={index} 
              className={styles.carouselItem}
              style={{ width: `${100 / items.length}%` }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
      
      <button 
        className={`${styles.navButton} ${styles.navButtonRight}`}
        onClick={handleNext}
        aria-label="Next items"
      >
        <ChevronRight className={styles.navIcon} />
      </button>
    </div>
  );
}

export default Carousel;