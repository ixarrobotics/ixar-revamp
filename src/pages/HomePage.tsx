import React, { Suspense, memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button, Section, FeatureCard, Carousel, Hero, LazyImage } from '../components/ui';
import ErrorBoundary from '../components/ErrorBoundary';
import { useHomePageData, useIntersectionObserver } from '../hooks';
import { ClientLogo } from '../types';
import homeVideo from '../assets/home_video.mp4';
import styles from './HomePage.module.css';
import commonStyles from '../styles/common.module.css';

// Memoized sub-components for performance
const HeroSection = memo(() => (
  <Hero backgroundVideo={homeVideo} overlay>
    <Hero.Content>
      <Hero.Title>
        Pioneering Underwater Robotics
      </Hero.Title>
      <Hero.Subtitle>
        Advanced ROV solutions for marine exploration and industrial inspections
      </Hero.Subtitle>
      <Hero.Actions>
        <Button variant="primary" size="lg">
          <Link to="/services" className="flex items-center gap-2 text-white no-underline">
            Explore Solutions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
        <Button variant="outline" size="lg">
          <Play className="w-5 h-5" />
          Watch Demo
        </Button>
      </Hero.Actions>
    </Hero.Content>
  </Hero>
));

const AboutSection = memo(() => {
  const { features } = useHomePageData();
  const [setRef, isIntersecting] = useIntersectionObserver(0.2);

  return (
    <Section id="about-us" className={styles.sectionBgAlternate1} ref={setRef}>
      <div className={commonStyles.textCenter}>
        <h2 className={`${commonStyles.sectionTitle} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          About Us
        </h2>
        <p className={`${commonStyles.sectionSubtitle} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          Experience the perfect blend of innovation, reliability, and performance in underwater robotics
        </p>
      </div>
      <div className={commonStyles.gridCols3}>
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`${isIntersecting ? commonStyles.fadeIn : ''} ${
              index === 0 ? styles.animationDelay1 :
              index === 1 ? styles.animationDelay2 :
              index === 2 ? styles.animationDelay3 : ''
            }`}
          >
            <FeatureCard feature={feature} />
          </div>
        ))}
      </div>
    </Section>
  );
});

const VisionSection = memo(() => {
  const { companyValues } = useHomePageData();
  const [setRef, isIntersecting] = useIntersectionObserver(0.2);

  return (
    <Section id="vision-mission" className={styles.sectionBgAlternate2} ref={setRef}>
      <div className={commonStyles.textCenter}>
        <h2 className={`${commonStyles.sectionTitle} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          Vision and Mission
        </h2>
        <p className={`${commonStyles.sectionSubtitle} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          To be the global leader in underwater robotics, pioneering solutions that drive progress and sustainability.
        </p>
      </div>
      <div className={commonStyles.gridCols3}>
        {companyValues.map((value, index) => (
          <div
            key={value.title}
            className={`${isIntersecting ? commonStyles.slideIn : ''} ${
              index === 0 ? styles.animationDelay1 :
              index === 1 ? styles.animationDelay2 :
              index === 2 ? styles.animationDelay3 : ''
            }`}
          >
            <FeatureCard 
              feature={{
                ...value,
                color: 'from-blue-500 to-cyan-500'
              }} 
            />
          </div>
        ))}
      </div>
    </Section>
  );
});

const ClientsSection = memo(() => {
  const { clientLogos } = useHomePageData();
  const [setRef, isIntersecting] = useIntersectionObserver(0.2);

  const renderClientLogo = useMemo(() => (logo: ClientLogo, index: number) => (
    <div key={`${logo.alt}-${index}`} className="flex items-center justify-center p-4">
      <LazyImage 
        src={logo.src} 
        alt={logo.alt} 
        className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
        width={120}
        height={64}
      />
    </div>
  ), []);

  return (
    <Section id="our-clients" className={styles.sectionBgAlternate1} ref={setRef}>
      <div className={commonStyles.textCenter}>
        <h2 className={`${commonStyles.sectionTitle} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          Our Clients
        </h2>
        <p className={`${commonStyles.sectionSubtitle} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          Trusted by leading organizations worldwide for their critical underwater operations.
        </p>
      </div>
      <div className={isIntersecting ? commonStyles.fadeIn : ''}>
        <Carousel
          items={clientLogos}
          visibleItems={3}
          autoScroll={true}
          autoScrollInterval={3000}
          renderItem={renderClientLogo}
        />
      </div>
    </Section>
  );
});

const ProductFeaturesSection = memo(() => {
  const { products } = useHomePageData();
  const [setRef, isIntersecting] = useIntersectionObserver(0.2);

  return (
    <Section id="product-features" className={styles.sectionBgAlternate2} ref={setRef}>
      <div className={commonStyles.textCenter}>
        <h2 className={`${commonStyles.sectionTitle} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          Product Features
        </h2>
        <p className={`${commonStyles.sectionSubtitle} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          Highlighting the key capabilities and innovations of our ROV systems.
        </p>
      </div>
      <div className={commonStyles.gridCols3}>
        {products.map((product, index) => (
          <article
            key={product.name}
            className={`${commonStyles.cardBase} ${commonStyles.cardHover} ${
              isIntersecting ? commonStyles.fadeIn : ''
            } ${
              index === 0 ? styles.animationDelay1 :
              index === 1 ? styles.animationDelay2 :
              index === 2 ? styles.animationDelay3 : ''
            }`}
          >
            <div className="relative mb-4">
              <LazyImage
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
                width={400}
                height={192}
              />
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${commonStyles.gradientBlueCyan}`}>
                {product.name}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{product.name}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
              
              <div className="space-y-2 mb-4">
                {product.specs.map((spec, specIndex) => (
                  <div key={specIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {spec}
                  </div>
                ))}
              </div>

              <Button variant="outline" size="sm" className="w-full">
                <Link to={product.link} className="flex items-center justify-center gap-2 text-inherit no-underline">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
});

const TestimonialsSection = memo(() => {
  const [setRef, isIntersecting] = useIntersectionObserver(0.2);

  return (
    <Section id="testimonials" className={styles.sectionBgAlternate1} ref={setRef}>
      <div className={commonStyles.textCenter}>
        <h2 className={`${commonStyles.sectionTitle} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          Testimonials
        </h2>
        <p className={`${commonStyles.sectionSubtitle} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          Hear what our clients have to say about IXAR and our solutions.
        </p>
      </div>
      {/* Testimonial cards would go here */}
    </Section>
  );
});

const CTASection = memo(() => {
  const [setRef, isIntersecting] = useIntersectionObserver(0.2);

  return (
    <Section background="gradient" ref={setRef}>
      <div className={commonStyles.textCenter}>
        <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          Ready to Dive Deeper?
        </h2>
        <p className={`text-xl text-blue-100 mb-8 max-w-3xl mx-auto ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          Partner with IXAR for cutting-edge underwater robotics solutions that deliver results
        </p>
        <div className={`${commonStyles.flexCenter} gap-4 flex-col sm:flex-row ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          <Button variant="primary" size="lg">
            <Link to="/contact" className="flex items-center gap-2 text-white no-underline">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button variant="cta" size="lg">
            <Link to="/services" className="text-white no-underline">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
});

// Loading component for Suspense
const PageLoader = memo(() => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
));

// Main HomePage component with error boundaries and lazy loading
const HomePage: React.FC = memo(() => {
  return (
    <ErrorBoundary>
      <div className={styles.minHeightScreen}>
        <Suspense fallback={<PageLoader />}>
          <main role="main">
            <HeroSection />
            <AboutSection />
            <VisionSection />
            <ClientsSection />
            <ProductFeaturesSection />
            <TestimonialsSection />
            <CTASection />
          </main>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
});

// Display names for debugging
HeroSection.displayName = 'HeroSection';
AboutSection.displayName = 'AboutSection';
VisionSection.displayName = 'VisionSection';
ClientsSection.displayName = 'ClientsSection';
ProductFeaturesSection.displayName = 'ProductFeaturesSection';
TestimonialsSection.displayName = 'TestimonialsSection';
CTASection.displayName = 'CTASection';
PageLoader.displayName = 'PageLoader';
HomePage.displayName = 'HomePage';

export default HomePage;