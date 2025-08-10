import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
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
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [aboutUsTimeoutId, setAboutUsTimeoutId] = useState<NodeJS.Timeout | null>(null);
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
    setIsAboutUsOpen(false);
    if (aboutUsTimeoutId) {
      clearTimeout(aboutUsTimeoutId);
      setAboutUsTimeoutId(null);
    }
  }, [location]);

  const handleAboutUsMouseEnter = () => {
    if (aboutUsTimeoutId) {
      clearTimeout(aboutUsTimeoutId);
      setAboutUsTimeoutId(null);
    }
    setIsAboutUsOpen(true);
  };

  const handleAboutUsMouseLeave = () => {
    const id = setTimeout(() => {
      setIsAboutUsOpen(false);
      setAboutUsTimeoutId(null);
    }, 200); // 200ms delay
    setAboutUsTimeoutId(id);
  };

  const navItems = [
    { label: 'Services', path: '/services' },
    { label: 'Our Solutions', path: '/solutions' },
    { label: 'Team', path: '/team' }
  ];

  const aboutUsItems = [
    {
      name: 'About Us',
      path: '#about-us',
      description: 'Learn more about our company'
    },
    {
      name: 'Vision and Mission',
      path: '#vision-mission',
      description: 'Our vision for the future'
    },
    {
      name: 'Our Clients',
      path: '#our-clients',
      description: 'Who we work with'
    },
    {
      name: 'Product Features',
      path: '#product-features',
      description: 'Key features of our products'
    },
    {
      name: 'Testimonials',
      path: '#testimonials',
      description: 'What our clients say'
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
                onMouseEnter={handleAboutUsMouseEnter}
                onMouseLeave={handleAboutUsMouseLeave}
              >
                <Link
                  to="/home"
                  className={`${styles.aboutUsButton} ${
                    location.pathname === '/home'
                      ? styles.aboutUsButtonActive
                      : styles.aboutUsButtonInactive
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown className={`${styles.chevronDown} ${
                    isAboutUsOpen ? styles.chevronDownRotate : ''
                  }`} />
                </Link>

                <div 
                  className={`${styles.aboutUsDropdownMenu} ${
                    isAboutUsOpen 
                      ? styles.aboutUsDropdownMenuVisible 
                      : styles.aboutUsDropdownMenuHidden
                  }`}
                  onMouseEnter={handleAboutUsMouseEnter}
                  onMouseLeave={handleAboutUsMouseLeave}
                >
                  <div className={styles.dropdownMenuPadding}>
                    <div className={styles.dropdownMenuTitle}>
                      <Waves className={styles.dropdownMenuTitleIcon} />
                      About IXAR
                    </div>
                    <div className={styles.dropdownMenuItemsContainer}>
                      {aboutUsItems.map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsAboutUsOpen(false);
                            if (location.pathname !== '/home') {
                              window.location.href = '/home' + item.path;
                            } else {
                              document.querySelector(item.path)?.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className={`${styles.dropdownMenuItemLink} group`}
                        >
                          <div className={styles.dropdownMenuItemContent}>
                            <div className={`${styles.dropdownMenuItemTitle} group-hover:text-[#E60000]`}>
                              {item.name}
                            </div>
                            <div className={styles.dropdownMenuItemDescription}>
                              {item.description}
                            </div>
                          </div>
                          <ArrowRight className={`${styles.dropdownMenuItemArrow} group-hover:translate-x-1 group-hover:text-[#E60000]`} />
                        </a>
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

              
            </div>

            <div className="flex items-center space-x-3">
              

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
                <Link
                  to="/home"
                  onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
                  className={`${styles.mobileMenuAboutUsButton} ${
                    isActive('/home')
                      ? styles.mobileMenuAboutUsButtonActive
                      : styles.mobileMenuAboutUsButtonInactive
                  }`}>
                  <span>About Us</span>
                  <ChevronDown className={`${styles.mobileMenuChevronDown} ${isAboutUsOpen ? styles.mobileMenuChevronDownRotate : ''}`} />
                </Link>
                <div className={`${styles.mobileMenuAboutUsDropdown} ${isAboutUsOpen ? styles.mobileMenuAboutUsDropdownOpen : styles.mobileMenuAboutUsDropdownClosed}`}>
                  <div className={styles.mobileMenuAboutUsDropdownPadding}>
                    {aboutUsItems.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsAboutUsOpen(false);
                          setIsMenuOpen(false);
                          if (location.pathname !== '/home') {
                            window.location.href = '/home' + item.path;
                          } else {
                            document.querySelector(item.path)?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className={styles.mobileMenuAboutUsItemLink}
                      >
                        {item.name}
                      </a>
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
                <span>Contact Us</span>
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