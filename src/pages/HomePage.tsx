import React, { Suspense, memo, useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
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
      <div className={styles.heroContentWrapper}>
        {/* Floating Particles Background */}
        <div className={styles.floatingParticles}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.particle} style={{ '--delay': `${i * 0.2}s` } as React.CSSProperties} />
          ))}
        </div>
        
        {/* Morphing Background Shapes */}
        <div className={styles.morphingShapes}>
          <div className={styles.morphShape1}></div>
          <div className={styles.morphShape2}></div>
          <div className={styles.morphShape3}></div>
        </div>
        
        <h1 className={`${styles.heroTitle} ${styles.heroTitleAnimated}`}>
          <span className={styles.titleGlow}>Clarity</span>{" "}
          <span className={styles.titleGlow}>In</span>{" "}
          <span className={styles.titleGlow}>Depth</span>
        </h1>
        <p className={`${styles.heroSubtitle} ${styles.heroSubtitleAnimated}`}>
          Advanced ROV solutions for marine exploration and industrial inspections.
        </p>
        <div className={styles.heroActions}>
          <Button variant="primary" size="lg" className={styles.heroButtonAnimated}>
            <Link to="/services" className="flex items-center gap-2 text-white no-underline">
              <span className={styles.buttonTextGlow}>Explore Solutions</span>
              <ArrowRight className={`w-5 h-5 ${styles.arrowAnimated}`} />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className={styles.heroButtonAnimated}>
            <Play className={`w-5 h-5 ${styles.playIconAnimated}`} />
            <span className={styles.buttonTextGlow}>Watch Demo</span>
          </Button>
        </div>
        
        {/* Floating ROV Elements */}
        {/* <div className={styles.floatingROVElements}>
          <div className={styles.rovElement1}>🤖</div>
          <div className={styles.rovElement2}>🌊</div>
          <div className={styles.rovElement3}>🔍</div>
        </div> */}
      </div>
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
      <div className={`${commonStyles.gridCols3} ${styles.featuresGridAnimated}`}>
        {/* Floating Background Elements */}
        <div className={styles.floatingBackgroundElements}>
          <div className={styles.bgElement1}></div>
          <div className={styles.bgElement2}></div>
          <div className={styles.bgElement3}></div>
        </div>
        
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`${styles.featureCardWrapper} ${styles.featureCardSpectacular} ${isIntersecting ? styles.cardSlideIn : ''} ${
              index === 0 ? styles.animationDelay1 :
              index === 1 ? styles.animationDelay2 :
              index === 2 ? styles.animationDelay3 : ''
            }`}
          >
            {/* Card Glow Effect */}
            <div className={styles.cardGlowEffect}></div>
            <FeatureCard feature={feature} />
            
            {/* Floating Icons Around Cards */}
            {/* <div className={styles.floatingCardIcons}>
              <div className={styles.floatingIcon1}>📖</div>
              <div className={styles.floatingIcon2}>👥</div>
              <div className={styles.floatingIcon3}>🎯</div>
            </div> */}
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
      <div className={`${styles.visionMissionGrid} ${styles.visionGridAnimated}`}>
        {/* Morphing Vision Background */}
        <div className={styles.visionMorphingBackground}>
          <div className={styles.visionMorph1}></div>
          <div className={styles.visionMorph2}></div>
        </div>
        
        {companyValues.map((value, index) => (
          <div
            key={value.title}
            className={`${styles.visionCardWrapper} ${styles.visionCardSpectacular} ${isIntersecting ? styles.visionCardFloatIn : ''} ${
              index === 0 ? styles.animationDelay1 :
              index === 1 ? styles.animationDelay2 : ''
            }`}
          >
            {/* Card Energy Field */}
            <div className={styles.cardEnergyField}></div>
            
            <FeatureCard 
              feature={{
                ...value,
                color: 'from-blue-500 to-cyan-500'
              }} 
            />
            
            {/* Floating Particles Around Vision Cards */}
            <div className={styles.visionCardParticles}>
              {[...Array(8)].map((_, i) => (
                <div key={i} className={styles.visionParticle} style={{ '--particle-delay': `${i * 0.1}s` } as React.CSSProperties} />
              ))}
            </div>
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
    <div key={`${logo.alt}-${index}`} className={`${styles.clientLogoContainer} ${styles.clientLogoAnimated}`}>
      <LazyImage
        src={logo.src}
        alt={logo.alt}
        className={styles.clientLogoImage}
      />
      {/* Logo Glow Effect */}
      <div className={styles.logoGlowEffect}></div>
    </div>
  ), []);

  return (
    <Section id="our-clients" className={styles.sectionBgAlternate1} ref={setRef}>
      {/* Floating Client Elements */}
      {/* <div className={styles.floatingClientElements}>
        <div className={styles.clientElement1}>🏢</div>
        <div className={styles.clientElement2}>🌍</div>
        <div className={styles.clientElement3}>⭐</div>
        <div className={styles.clientElement4}>🤝</div>
      </div> */}
      
      {/* Morphing Client Background */}
      <div className={styles.morphingClientBackground}>
        <div className={styles.clientMorph1}></div>
        <div className={styles.clientMorph2}></div>
      </div>
      
      <div className={commonStyles.textCenter}>
        <h2 className={`${commonStyles.sectionTitle} ${styles.clientTitleSpectacular} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          <span className={styles.clientTitleGlow}>Our</span>{" "}
          <span className={styles.clientTitleGlow}>Clients</span>
        </h2>
        <p className={`${commonStyles.sectionSubtitle} ${styles.clientSubtitleSpectacular} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          Trusted by leading organizations worldwide for their critical underwater operations.
        </p>
      </div>
      <div className={`${isIntersecting ? commonStyles.fadeIn : ''} ${styles.clientsCarouselWrapper}`}>
        <Carousel
          items={clientLogos}
          visibleItems={4}
          autoScroll={true}
          autoScrollInterval={4000}
          renderItem={renderClientLogo}
        />
      </div>
    </Section>
  );
});

// const ProductFeaturesSection = memo(() => {
//   const { products } = useHomePageData();
//   const [setRef, isIntersecting] = useIntersectionObserver(0.2);

//   return (
//     <Section id="product-features" className={styles.sectionBgAlternate2} ref={setRef}>
//       <div className={commonStyles.textCenter}>
//         <h2 className={`${commonStyles.sectionTitle} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
//           Product Features
//         </h2>
//         <p className={`${commonStyles.sectionSubtitle} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
//           Highlighting the key capabilities and innovations of our ROV systems.
//         </p>
//       </div>
//       <div className={commonStyles.gridCols3}>
//         {products.map((product, index) => (
//           <article
//             key={product.name}
//             className={`${commonStyles.cardBase} ${commonStyles.cardHover} ${
//               isIntersecting ? commonStyles.fadeIn : ''
//             } ${
//               index === 0 ? styles.animationDelay1 :
//               index === 1 ? styles.animationDelay2 :
//               index === 2 ? styles.animationDelay3 : ''
//             }`}
//           >
//             <div className={styles.productImageContainer}>
//               <LazyImage
//                 src={product.image}
//                 alt={product.name}
//                 className={styles.productImage}
//                 width={400}
//                 height={192}
//               />
//               <div className={`${styles.productBadge} ${commonStyles.gradientBlueCyan}`}>
//                 {product.name}
//               </div>
//             </div>
            
//             <div className={styles.productContent}>
//               <h3 className={styles.productTitle}>{product.name}</h3>
//               <p className={styles.productDescription}>{product.description}</p>
              
//               <div className={styles.productSpecsList}>
//                 {product.specs.map((spec, specIndex) => (
//                   <div key={specIndex} className={styles.productSpecItem}>
//                     <CheckCircle className={styles.productSpecIcon} />
//                     {spec}
//                   </div>
//                 ))}
//               </div>

//               <Button variant="outline" size="sm" className={styles.productButton}>
//                 <Link to={product.link} className="flex items-center justify-center gap-2 text-inherit no-underline">
//                   Learn More
//                   <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </Button>
//             </div>
//           </article>
//         ))}
//       </div>
//     </Section>
//   );
// });

const TestimonialsSection = memo(() => {
  const [setRef, isIntersecting] = useIntersectionObserver(0.2);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      text: "We engaged IXAR for underwater ROV inspection services, and we are highly satisfied with their performance. Their team displayed excellent technical proficiency, delivering accurate and detailed underwater imagery. Their responsiveness and commitment to timely completion were commendable.",
      company: "ONGC"
    },
    {
      text: "The team showcased excellent technical expertise, responsiveness and commitment to safety. The ROV performed efficiently, meeting our operational expectations with precise maneuverability and clear imaging. We appreciate their professionalism and innovation in underwater technology.",
      company: "Indian Navy"
    },
    {
      text: "The performance of the team was excellent and they were really experienced in the field of underwater robotics. They were able to complete the project on time, within budget and to the required specifications. We look forward to future collaborations for similar underwater inspection requirements.",
      company: "L&T Construction"
    },
    {
      text: "IXAR provided a professional and timely underwater robotic inspection of our infrastructure. They met contract requirements with strong quality, safety, and management commitment. Their team was responsive to our queries, and the management's commitment was evident throughout the project.",
      company: "Tata Projects"
    },
    {
      text: "IXAR successfully completed underwater inspection services with proper safety precautions and as per our requirements. The job was completed successfully within the stipulated time and without any issues. Their expertise in underwater robotics is commendable.",
      company: "NTPC"
    },
    {
      text: "We are impressed with IXAR's underwater inspection capabilities. Their ROV technology and skilled team delivered exceptional results for our marine infrastructure projects. The detailed reporting and professional approach exceeded our expectations.",
      company: "Reliance Industries"
    }
  ];

  const testimonalsPerView = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonalsPerView);

  // Auto advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * testimonalsPerView;
    return testimonials.slice(start, start + testimonalsPerView);
  };

  return (
    <Section id="testimonials" className={styles.sectionBgAlternate2} ref={setRef}>
      {/* Floating Testimonial Elements */}
      {/* <div className={styles.floatingTestimonialElements}>
        <div className={styles.testimonialElement1}>💬</div>
        <div className={styles.testimonialElement2}>✨</div>
        <div className={styles.testimonialElement3}>🌟</div>
        <div className={styles.testimonialElement4}>🎯</div>
      </div> */}
      
      {/* Morphing Testimonial Background */}
      <div className={styles.morphingTestimonialBackground}>
        <div className={styles.testimonialMorph1}></div>
        <div className={styles.testimonialMorph2}></div>
      </div>
      
      <div className={commonStyles.textCenter}>
        <h2 className={`${commonStyles.sectionTitle} ${styles.testimonialTitleSpectacular} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          <span className={styles.testimonialTitleGlow}>Client</span>{" "}
          <span className={styles.testimonialTitleGlow}>Testimonials</span>
        </h2>
        <p className={`${commonStyles.sectionSubtitle} ${styles.testimonialSubtitleSpectacular} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
          Hear what our clients have to say about IXAR and our solutions.
        </p>
      </div>
      
      <div className={`${styles.testimonialsWrapper} ${isIntersecting ? commonStyles.fadeIn : ''}`}>
        <button className={`${styles.testimonialNavBtn} ${styles.testimonialNavBtnSpectacular}`} onClick={prevSlide} aria-label="Previous testimonials">
          ‹
        </button>
        
        <div className={`${styles.testimonialsContainer} ${styles.testimonialsContainerAnimated}`}>
          {getVisibleTestimonials().map((testimonial, index) => (
            <div 
              key={currentIndex * testimonalsPerView + index} 
              className={`${styles.testimonialCard} ${styles.testimonialCardAnimated} ${styles.testimonialCardSpectacular}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Testimonial Glow Effect */}
              <div className={styles.testimonialGlowEffect}></div>
              
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>
                  "{testimonial.text}"
                </p>
                <div className={styles.testimonialCompany}>
                  {testimonial.company}
                </div>
              </div>
              
              {/* Floating Quote Marks */}
              <div className={styles.floatingQuoteMarks}>
                <div className={styles.quoteMark1}>"</div>
                <div className={styles.quoteMark2}>"</div>
              </div>
            </div>
          ))}
        </div>
        
        <button className={`${styles.testimonialNavBtn} ${styles.testimonialNavBtnSpectacular}`} onClick={nextSlide} aria-label="Next testimonials">
          ›
        </button>
      </div>
      
      <div className={styles.testimonialDots}>
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Section>
  );
});

// const CTASection = memo(() => {
//   const [setRef, isIntersecting] = useIntersectionObserver(0.2);

//   return (
//     <Section background="gradient" ref={setRef}>
//       <div className={commonStyles.textCenter}>
//         <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 ${isIntersecting ? commonStyles.fadeIn : ''}`}>
//           Ready to Dive Deeper?
//         </h2>
//         <p className={`text-xl text-blue-100 mb-8 max-w-3xl mx-auto ${isIntersecting ? commonStyles.fadeIn : ''}`}>
//           Partner with IXAR for cutting-edge underwater robotics solutions that deliver results
//         </p>
//         <div className={`${commonStyles.flexCenter} gap-4 flex-col sm:flex-row ${isIntersecting ? commonStyles.fadeIn : ''}`}>
//           <Button variant="primary" size="lg">
//             <Link to="/contact" className="flex items-center gap-2 text-white no-underline">
//               Get Started Today
//               <ArrowRight className="w-5 h-5" />
//             </Link>
//           </Button>
//           <Button variant="cta" size="lg">
//             <Link to="/services" className="text-white no-underline">
//               View All Services
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </Section>
//   );
// });

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
            {/* <ProductFeaturesSection /> */}
            <TestimonialsSection />
            {/* <CTASection /> */}
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
// ProductFeaturesSection.displayName = 'ProductFeaturesSection';
TestimonialsSection.displayName = 'TestimonialsSection';
// CTASection.displayName = 'CTASection';
PageLoader.displayName = 'PageLoader';
HomePage.displayName = 'HomePage';

export default HomePage;