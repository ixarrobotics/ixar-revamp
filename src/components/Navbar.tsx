import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Phone,
  ArrowRight,
  Zap,
  Settings,
  Cpu,
  Waves
} from 'lucide-react';
import ixarLogo from '../assets/ixar_logo.jpg';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [activeHover, setActiveHover] = useState('');
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
    setIsAboutUsOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Services', path: '/services' },
    { label: 'Team', path: '/team' },
    { label: 'Contact', path: '/contact' }
  ];

  const aboutUsItems = [
    {
      name: 'About Us',
      path: '/home',
      description: 'Learn more about our company'
    },
    {
      name: 'Vision',
      path: '/vision',
      description: 'Our vision for the future'
    }
  ];

  const productItems = [
    {
      name: 'ROV 1.0',
      path: '/product',
      icon: <Settings className="w-5 h-5 text-white" />,
      description: 'Entry-level robotic solution',
      color: 'from-blue-500 to-cyan-500',
      specs: '200m depth • 6000 lumen'
    },
    {
      name: 'ROV Pro',
      path: '/rovpro',
      icon: <Zap className="w-5 h-5 text-white" />,
      description: 'Professional-grade ROV',
      color: 'from-purple-500 to-pink-500',
      specs: '500m depth • Advanced sensors'
    },
    {
      name: 'ROV2',
      path: '/rov2',
      icon: <Cpu className="w-5 h-5 text-white" />,
      description: 'Advanced autonomous system',
      color: 'from-emerald-500 to-teal-500',
      specs: '1000m depth • AI-powered'
    }
  ];

  return (
    <>
      {isMenuOpen && (
        <div 
          className={styles.mobileMenuOverlay}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav className={`${styles.navbarContainer} ${
        isScrolled 
          ? styles.navbarScrolled 
          : styles.navbarNotScrolled
      }`}>
        <div className={styles.navbarInner}>
          <div className={styles.navbarFlexContainer}>
            
            <Link 
              to="/home" 
              className={`${styles.logoLink} group`}
              onMouseEnter={() => setActiveHover('logo')}
              onMouseLeave={() => setActiveHover('')}
            >
              <div className={`${styles.logoImageWrapper} ${
                activeHover === 'logo' ? styles.logoImageWrapperHover : ''
              }`}>
                <img src={ixarLogo} alt="IXAR Logo" className={styles.logoImage} />
              </div>
            </Link>

            <div className={`${styles.navLinksContainer} lg:flex`}>
              <div 
                className={styles.aboutUsDropdownContainer}
                onMouseEnter={() => setIsAboutUsOpen(true)}
                onMouseLeave={() => setIsAboutUsOpen(false)}
              >
                <button
                  className={`${styles.aboutUsButton} ${
                    location.pathname.includes('/home') || location.pathname.includes('/vision')
                      ? styles.aboutUsButtonActive
                      : styles.aboutUsButtonInactive
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown className={`${styles.chevronDown} ${
                    isAboutUsOpen ? styles.chevronDownRotate : ''
                  }`} />
                </button>

                <div className={`${styles.aboutUsDropdownMenu} ${
                  isAboutUsOpen 
                    ? styles.aboutUsDropdownMenuVisible 
                    : styles.aboutUsDropdownMenuHidden
                }`}>
                  <div className={styles.dropdownMenuPadding}>
                    <div className={styles.dropdownMenuTitle}>
                      <Waves className={styles.dropdownMenuTitleIcon} />
                      About IXAR
                    </div>
                    <div className={styles.dropdownMenuItemsContainer}>
                      {aboutUsItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`${styles.dropdownMenuItemLink} group`}
                        >
                          <div className={styles.dropdownMenuItemContent}>
                            <div className={`${styles.dropdownMenuItemTitle} group-hover:text-blue-600`}>
                              {item.name}
                            </div>
                            <div className={styles.dropdownMenuItemDescription}>
                              {item.description}
                            </div>
                          </div>
                          <ArrowRight className={`${styles.dropdownMenuItemArrow} group-hover:translate-x-1 group-hover:text-blue-600`} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${styles.navItemLink} ${
                    isActive(item.path)
                      ? styles.navItemLinkActive
                      : styles.navItemLinkInactive
                  }`}
                  onMouseEnter={() => setActiveHover(item.path)}
                  onMouseLeave={() => setActiveHover('')}
                >
                  <span>{item.label}</span>
                </Link>
              ))}

              <div 
                className={styles.productsDropdownContainer}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  className={`${styles.productsButton} ${
                    location.pathname.includes('/product') || location.pathname.includes('/rov')
                      ? styles.productsButtonActive
                      : styles.productsButtonInactive
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`${styles.chevronDown} ${
                    isProductsOpen ? styles.chevronDownRotate : ''
                  }`} />
                </button>

                <div className={`${styles.productsDropdownMenu} ${
                  isProductsOpen 
                    ? styles.productsDropdownMenuVisible 
                    : styles.productsDropdownMenuHidden
                }`}>
                  <div className={styles.dropdownMenuPadding}>
                    <div className={styles.dropdownMenuTitle}>
                      <Waves className={styles.dropdownMenuTitleIcon} />
                      Our ROV Solutions
                    </div>
                    <div className={styles.dropdownMenuItemsContainer}>
                      {productItems.map((product) => (
                        <Link
                          key={product.path}
                          to={product.path}
                          className={`${styles.productItemLink} group`}
                        >
                          <div className={`${styles.productItemIconContainer} bg-gradient-to-br ${product.color}`}>
                            {product.icon}
                          </div>
                          <div className={styles.productItemContent}>
                            <div className={`${styles.productItemName} group-hover:text-blue-600`}>
                              {product.name}
                            </div>
                            <div className={styles.productItemDescription}>
                              {product.description}
                            </div>
                            <div className={styles.productItemSpecs}>
                              {product.specs}
                            </div>
                          </div>
                          <ArrowRight className={`${styles.productItemArrow} group-hover:translate-x-1 group-hover:text-blue-600`} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className={`${styles.searchButton} md:flex`}>
                <Search className={styles.searchIcon} />
              </button>

              <Link
                to="/partner"
                className={`${styles.partnerButton} md:flex`}
              >
                <span>Partner With Us</span>
              </Link>

              <Link
                to="/contact"
                className={`${styles.contactButton} sm:flex`}
              >
                <Phone className={styles.contactIcon} />
                <span>Contact</span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${styles.mobileMenuButton} lg:hidden`}
              >
                {isMenuOpen ? (
                  <X className={styles.mobileMenuIcon} />
                ) : (
                  <Menu className={styles.mobileMenuIcon} />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.mobileMenuContainer} ${
          isMenuOpen 
            ? styles.mobileMenuContainerOpen 
            : styles.mobileMenuContainerClosed
        }`}>
          <div className={styles.mobileMenuContent}>
            
            <div className={`${styles.mobileMenuSpaceY2} mb-6`}>
              <div className="relative">
                <button
                  onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
                  className={`${styles.mobileMenuAboutUsButton} ${
                    isActive('/home') || isActive('/vision')
                      ? styles.mobileMenuAboutUsButtonActive
                      : styles.mobileMenuAboutUsButtonInactive
                  }`}>
                  <span>About Us</span>
                  <ChevronDown className={`${styles.mobileMenuChevronDown} ${isAboutUsOpen ? styles.mobileMenuChevronDownRotate : ''}`} />
                </button>
                <div className={`${styles.mobileMenuAboutUsDropdown} ${isAboutUsOpen ? styles.mobileMenuAboutUsDropdownOpen : styles.mobileMenuAboutUsDropdownClosed}`}>
                  <div className={styles.mobileMenuAboutUsDropdownPadding}>
                    {aboutUsItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={styles.mobileMenuAboutUsItemLink}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${styles.mobileMenuNavItemLink} ${
                    isActive(item.path)
                      ? styles.mobileMenuNavItemLinkActive
                      : styles.mobileMenuNavItemLinkInactive
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mb-6">
              <div className={styles.mobileMenuProductsTitle}>
                <Waves className={styles.mobileMenuProductsTitleIcon} />
                Products
              </div>
              <div className={styles.mobileMenuSpaceY2}>
                {productItems.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className={styles.mobileMenuProductItemLink}
                  >
                    <div className={`${styles.mobileMenuProductItemIconContainer} bg-gradient-to-br ${product.color}`}>
                      {React.cloneElement(product.icon, { className: styles.mobileMenuProductItemIcon })}
                    </div>
                    <div>
                      <div>{product.name}</div>
                      <div className={styles.mobileMenuProductItemSpecs}>{product.specs}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className={`${styles.mobileMenuSpaceY3} ${styles.mobileMenuBorderTop}`}>
              <Link
                to="/partner"
                className={styles.mobileMenuPartnerButton}
              >
                Partner With Us
              </Link>
              <Link
                to="/contact"
                className={styles.mobileMenuContactButton}
              >
                <Phone className={styles.mobileMenuContactIcon} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-20" />
    </>
  );
};

export default Navbar;