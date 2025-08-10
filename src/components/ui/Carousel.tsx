import { useState, useEffect, useRef } from 'react';
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
  const [isTransitioning, setIsTransitioning] = useState(true); // New state for transition
  const trackRef = useRef<HTMLDivElement>(null); // Ref for the track element

  useEffect(() => {
    if (!autoScroll || items.length <= visibleItems) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [autoScroll, autoScrollInterval, items.length, visibleItems]);

  // Handle seamless looping
  useEffect(() => {
    if (trackRef.current) {
      // When currentIndex reaches the end of the first set of original items
      // (assuming items array is [A,B,C,D,A,B,C,D] and visibleItems = 4)
      // We want to jump back to the start of the first set (index 0)
      if (currentIndex >= items.length / 2 && items.length > 0) {
        setIsTransitioning(false); // Disable transition
        setCurrentIndex(0); // Jump back to the beginning
      }
    }
  }, [currentIndex, items.length]);

  // Re-enable transition after a short delay
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50); // Small delay to allow DOM to update
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % items.length
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
          ref={trackRef}
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
            width: `${items.length * (100 / visibleItems)}%`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none' // Apply transition conditionally
          }}
        >
          {items.map((item, index) => (
            <div
              key={`${JSON.stringify(item)}-${index}`}
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
