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
  Settings
} from 'lucide-react';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresInnerContainer}>
          <div className={styles.featuresHeader}>
            <h2 className={styles.featuresTitle}>
              About Us?
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

      {/* Products Showcase */}
      <section className={styles.productsShowcaseSection}>
        <div className={styles.productsShowcaseInnerContainer}>
          <div className={styles.productsShowcaseHeader}>
            <h2 className={styles.productsShowcaseTitle}>
              Vision and Mission
            </h2>
            <p className={styles.productsShowcaseSubtitle}>
              From entry-level to advanced autonomous systems, we have the perfect ROV for your needs
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
