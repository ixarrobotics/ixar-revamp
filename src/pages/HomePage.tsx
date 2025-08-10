import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeVideo from '../assets/home_video.mp4';
import { 
  ArrowRight, 
  Play, 
  Shield, 
  Zap, 
  Award, 
  Users, 
  Globe,
  ChevronRight,
  Star,
  CheckCircle,
  Waves,
  Camera,
  Gauge,
  Settings,
  Target,
  ChevronLeft,
  ChevronRight as ChevronRightIcon
} from 'lucide-react';
import styles from './HomePage.module.css';

import iitLogo from '../assets/iit.ef6ee85c.png';
import mitgLogo from '../assets/mitg.1a413d64.jpeg';
import msmeLogo from '../assets/mitg.1a413d64.jpeg';
import sineLogo from '../assets/sine.558e30bd.jpeg';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  const clientLogos = [
    { src: iitLogo, alt: 'IIT Bombay' },
    { src: mitgLogo, alt: 'MITG' },
    { src: msmeLogo, alt: 'MSME' },
    { src: sineLogo, alt: 'SINE' },
    { src: iitLogo, alt: 'IIT Bombay' }, // Duplicate for seamless loop
    { src: mitgLogo, alt: 'MITG' },
    { src: msmeLogo, alt: 'MSME' },
    { src: sineLogo, alt: 'SINE' },
  ];

  const visibleClients = 3; // Number of clients to show at once

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentClientIndex((prevIndex) => 
        (prevIndex + 1) % (clientLogos.length - visibleClients + 1)
      );
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevClient = () => {
    setCurrentClientIndex((prevIndex) => 
      prevIndex === 0 ? clientLogos.length - visibleClients : prevIndex - 1
    );
  };

  const handleNextClient = () => {
    setCurrentClientIndex((prevIndex) => 
      (prevIndex + 1) % (clientLogos.length - visibleClients + 1)
    );
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Deployment",
      description: "Get operational within hours with our portable ROV systems",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "24/7 Operations",
      description: "Continuous underwater monitoring and inspection capabilities",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Cost Effective",
      description: "Indigenous technology delivering premium results at competitive rates",
      color: "from-blue-400 to-cyan-500"
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "50+", label: "Industry Partners", icon: <Users className="w-6 h-6" /> },
    { number: "1000m", label: "Max Depth Rating", icon: <Gauge className="w-6 h-6" /> },
    { number: "99.9%", label: "Mission Success", icon: <Star className="w-6 h-6" /> }
  ];

  const products = [
    {
      name: "ROV 1.0",
      description: "Entry-level solution perfect for basic inspections and surveys",
      specs: ["200m depth rating", "6000 lumen illumination", "1080p HD camera"],
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "from-blue-500 to-cyan-500",
      link: "/product"
    },
    {
      name: "ROV Pro",
      description: "Professional-grade system for advanced underwater operations",
      specs: ["500m depth rating", "Advanced sensor suite", "4K recording"],
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "from-purple-500 to-pink-500",
      link: "/rovpro"
    },
    {
      name: "ROV2",
      description: "Next-generation autonomous underwater vehicle",
      specs: ["1000m depth rating", "AI-powered navigation", "Multi-sensor array"],
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "from-emerald-500 to-teal-500",
      link: "/rov2"
    }
  ];

  const companyValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'Pushing boundaries in underwater robotics technology'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Excellence',
      description: 'Collaborative approach with diverse expertise'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Commitment',
      description: 'Delivering reliable solutions that exceed expectations'
    }
  ];

  return (
    <div className={styles.minHeightScreen}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <video 
          className={styles.heroVideo}
          src={homeVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContentContainer}>
          <div className={styles.heroInnerContainer}>
            <div className={styles.heroTextContainer}>
              <div className={`${styles.heroTextAnimation} ${
                isVisible ? styles.heroTextVisible : styles.heroTextHidden
              }`}>
                <h1 className={styles.heroTitle}>
                  Pioneering Underwater Robotics
                </h1>
                <p className={styles.heroSubtitle}>
                  Advanced ROV solutions for marine exploration and industrial inspections
                </p>
                <div className={styles.heroButtonsContainer}>
                  <Link
                    to="/services"
                    className={styles.exploreSolutionsButton}
                  >
                    Explore Solutions
                    <ArrowRight className={styles.exploreSolutionsIcon} />
                  </Link>
                  <button className={styles.watchDemoButton}>
                    <Play className={styles.watchDemoIcon} />
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Us Section */}
      <section id="about-us" className={styles.featuresSection}>
        <div className={styles.featuresInnerContainer}>
          <div className={styles.featuresHeader}>
            <h2 className={styles.featuresTitle}>
              About Us
            </h2>
            <p className={styles.featuresSubtitle}>
              Experience the perfect blend of innovation, reliability, and performance in underwater robotics
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={styles.featureCard}
              >
                <div className={`${styles.featureIconContainer} bg-gradient-to-r ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitleCard}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section id="vision-mission" className={styles.productsShowcaseSection}>
        <div className={styles.productsShowcaseInnerContainer}>
          <div className={styles.productsShowcaseHeader}>
            <h2 className={styles.productsShowcaseTitle}>
              Vision and Mission
            </h2>
            <p className={styles.productsShowcaseSubtitle}>
              To be the global leader in underwater robotics, pioneering solutions that drive progress and sustainability.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {companyValues.map((value, index) => (
              <div
                key={index}
                className={styles.productCard}
              >
                <div className={styles.productImageContainer}>
                  {/* Placeholder for image, or remove if not needed */}
                  <div className={`${styles.productNameBadge} bg-gradient-to-r from-blue-500 to-cyan-500`}>
                    {value.title}
                  </div>
                </div>
                
                <div className={styles.productCardContent}>
                  <h3 className={styles.productCardTitle}>{value.title}</h3>
                  <p className={styles.productCardDescription}>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section id="our-clients" className={styles.featuresSection}>
        <div className={styles.featuresInnerContainer}>
          <div className={styles.featuresHeader}>
            <h2 className={styles.featuresTitle}>
              Our Clients
            </h2>
            <p className={styles.featuresSubtitle}>
              Trusted by leading organizations worldwide for their critical underwater operations.
            </p>
          </div>

          <div className={styles.clientCarouselContainer}>
            <button 
              className={`${styles.carouselNavButton} ${styles.carouselNavButtonLeft}`}
              onClick={handlePrevClient}
            >
              <ChevronLeft className={styles.carouselNavIcon} />
            </button>
            <div className={styles.clientCarouselTrackWrapper}>
              <div 
                className={styles.clientCarouselTrack}
                style={{ transform: `translateX(-${currentClientIndex * (100 / visibleClients)}%)` }}
              >
                {clientLogos.map((logo, index) => (
                  <div key={index} className={styles.clientLogoItem}>
                    <img src={logo.src} alt={logo.alt} className={styles.clientLogoImage} />
                  </div>
                ))}
              </div>
            </div>
            <button 
              className={`${styles.carouselNavButton} ${styles.carouselNavButtonRight}`}
              onClick={handleNextClient}
            >
              <ChevronRightIcon className={styles.carouselNavIcon} />
            </button>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section id="product-features" className={styles.productsShowcaseSection}>
        <div className={styles.productsShowcaseInnerContainer}>
          <div className={styles.productsShowcaseHeader}>
            <h2 className={styles.productsShowcaseTitle}>
              Product Features
            </h2>
            <p className={styles.productsShowcaseSubtitle}>
              Highlighting the key capabilities and innovations of our ROV systems.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {products.map((product, index) => (
              <div
                key={index}
                className={styles.productCard}
              >
                <div className={styles.productImageContainer}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                  />
                  <div className={`${styles.productNameBadge} bg-gradient-to-r ${product.color}`}>
                    {product.name}
                  </div>
                </div>
                
                <div className={styles.productCardContent}>
                  <h3 className={styles.productCardTitle}>{product.name}</h3>
                  <p className={styles.productCardDescription}>{product.description}</p>
                  
                  <div className={styles.productSpecsContainer}>
                    {product.specs.map((spec, specIndex) => (
                      <div key={specIndex} className={styles.productSpecItem}>
                        <CheckCircle className={styles.productSpecIcon} />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={product.link}
                    className={styles.learnMoreLink}
                  >
                    Learn More
                    <ChevronRight className={styles.learnMoreIcon} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={styles.featuresSection}>
        <div className={styles.featuresInnerContainer}>
          <div className={styles.featuresHeader}>
            <h2 className={styles.featuresTitle}>
              Testimonials
            </h2>
            <p className={styles.featuresSubtitle}>
              Hear what our clients have to say about IXAR and our solutions.
            </p>
          </div>
          {/* Testimonial cards can go here */}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInnerContainer}>
          <h2 className={styles.ctaTitle}>
            Ready to Dive Deeper?
          </h2>
          <p className={styles.ctaSubtitle}>
            Partner with IXAR for cutting-edge underwater robotics solutions that deliver results
          </p>
          <div className={styles.ctaButtonsContainer}>
            <Link
              to="/contact"
              className={styles.getStartedButton}
            >
              Get Started Today
              <ArrowRight className={styles.getStartedIcon} />
            </Link>
            <Link
              to="/services"
              className={styles.viewServicesButton}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;