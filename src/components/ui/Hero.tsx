import React, { memo } from 'react';
import { useAnimation } from '../../hooks/useAnimation';
import styles from './Hero.module.css';

interface HeroContextType {
  isVisible: boolean;
}

const HeroContext = React.createContext<HeroContextType | null>(null);

interface HeroCompoundProps {
  children: React.ReactNode;
  backgroundVideo?: string;
  backgroundImage?: string;
  overlay?: boolean;
  className?: string;
}

const HeroRoot: React.FC<HeroCompoundProps> = memo(({
  children,
  backgroundVideo,
  backgroundImage,
  overlay = true,
  className = ''
}) => {
  const isVisible = useAnimation(200);

  const heroContextValue: HeroContextType = {
    isVisible
  };

  return (
    <HeroContext.Provider value={heroContextValue}>
      <section className={`${styles.heroSection} ${className}`}>
        {backgroundVideo && (
          <video 
            className={styles.heroVideo}
            src={backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
        )}
        {backgroundImage && (
          <div 
            className={styles.heroImage}
            style={{ backgroundImage: `url(${backgroundImage})` }}
            role="img"
            aria-label="Hero background"
          />
        )}
        {overlay && <div className={styles.heroOverlay} />}
        <div className={styles.heroContentContainer}>
          <div className={styles.heroInnerContainer}>
            {children}
          </div>
        </div>
      </section>
    </HeroContext.Provider>
  );
});

interface HeroSubComponentProps {
  children: React.ReactNode;
  className?: string;
}

const HeroContent: React.FC<HeroSubComponentProps> = memo(({ 
  children, 
  className = '' 
}) => {
  const context = React.useContext(HeroContext);
  if (!context) {
    throw new Error('HeroContent must be used within a Hero component');
  }

  const { isVisible } = context;

  return (
    <div className={`${styles.heroTextContainer} ${className}`}>
      <div className={`${styles.heroTextAnimation} ${
        isVisible ? styles.heroTextVisible : styles.heroTextHidden
      }`}>
        {children}
      </div>
    </div>
  );
});

const HeroTitle: React.FC<HeroSubComponentProps> = memo(({ 
  children, 
  className = '' 
}) => (
  <h1 className={`${styles.heroTitle} ${className}`}>
    {children}
  </h1>
));

const HeroSubtitle: React.FC<HeroSubComponentProps> = memo(({ 
  children, 
  className = '' 
}) => (
  <p className={`${styles.heroSubtitle} ${className}`}>
    {children}
  </p>
));

const HeroActions: React.FC<HeroSubComponentProps> = memo(({ 
  children, 
  className = '' 
}) => (
  <div className={`${styles.heroButtonsContainer} ${className}`}>
    {children}
  </div>
));

// Compound component with sub-components
const Hero = HeroRoot as typeof HeroRoot & {
  Content: typeof HeroContent;
  Title: typeof HeroTitle;
  Subtitle: typeof HeroSubtitle;
  Actions: typeof HeroActions;
};

Hero.Content = HeroContent;
Hero.Title = HeroTitle;
Hero.Subtitle = HeroSubtitle;
Hero.Actions = HeroActions;

HeroRoot.displayName = 'Hero';
HeroContent.displayName = 'Hero.Content';
HeroTitle.displayName = 'Hero.Title';
HeroSubtitle.displayName = 'Hero.Subtitle';
HeroActions.displayName = 'Hero.Actions';

export default Hero;