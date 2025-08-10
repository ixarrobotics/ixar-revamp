import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Instagram,
  Waves,
  ArrowRight
} from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/product' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
    { name: 'Partner With Us', path: '/partner' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: 'https://www.facebook.com/IXAR-Robotics-Solutions-123677916277647',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com/IxarRobotics?s=08',
      color: 'hover:bg-sky-500'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/ixar-robotic-solution-209004212',
      color: 'hover:bg-blue-700'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-5 h-5" />,
      url: 'https://youtube.com/channel/UC8aWp3FRu_p-UzpAsHX8jXg',
      color: 'hover:bg-red-600'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/ixar_robotic_solutions/',
      color: 'hover:bg-pink-600'
    }
  ];

  return (
    <footer className={styles.footerContainer}>
      {/* Main Footer Content */}
      <div className={styles.mainFooterContent}>
        <div className={`${styles.mainFooterGrid} lg:grid-cols-4 md:grid-cols-2`}>
          
          {/* Company Info */}
          <div className={`${styles.companyInfoColumn} lg:col-span-2`}>
            <div className={styles.companyLogoContainer}>
              <div className={styles.companyLogoWrapper}>
                <div className={styles.companyLogoText}>IX</div>
              </div>
              <div>
                <div className={styles.companyName}>IXAR</div>
                <div className={styles.companyTagline}>ROBOTIC SOLUTIONS</div>
              </div>
            </div>
            <p className={styles.companyDescription}>
              Leading underwater robotics company providing cutting-edge ROV solutions for marine inspections and surveys across multiple industries worldwide.
            </p>
            <div className={styles.companyMotto}>
              <Waves className={styles.companyMottoIcon} />
              <span className={styles.companyMottoText}>Pioneering Underwater Innovation</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.quickLinksTitle}>Quick Links</h3>
            <ul className={styles.quickLinksList}>
              {quickLinks.map((link, index) => (
                <li key={index} className={styles.quickLinkItem}>
                  <Link
                    to={link.path}
                    className={`${styles.quickLink} group`}
                  >
                    <ArrowRight className={`${styles.quickLinkArrowIcon} group-hover:opacity-100`} />
                    <span className={`${styles.quickLinkText} group-hover:translate-x-1`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={styles.contactInfoTitle}>Contact Us</h3>
            <div className={styles.contactInfoList}>
              <div className={styles.contactInfoItem}>
                <MapPin className={styles.contactInfoIcon} />
                <div className={styles.contactInfoText}>
                  102, Faizan Apartment,<br />
                  S. V. Road, Jogeshwari (West),<br />
                  Mumbai 400-102, Maharashtra, India
                </div>
              </div>
              <div className={styles.contactInfoItem}>
                <Phone className={styles.contactInfoIcon} />
                <a 
                  href="tel:+919930652916" 
                  className={styles.contactInfoLink}
                >
                  +91 9930652916
                </a>
              </div>
              <div className={styles.contactInfoItem}>
                <Mail className={styles.contactInfoIcon} />
                <a 
                  href="mailto:info@ixarrobotic.com" 
                  className={styles.contactInfoLink}
                >
                  info@ixarrobotic.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className={styles.socialMediaSection}>
          <div className={`${styles.socialMediaContent} md:flex-row`}>
            <div className={`${styles.socialMediaHeader} md:mb-0`}>
              <h3 className={styles.socialMediaTitle}>Follow Our Journey</h3>
              <div className={styles.socialIconsContainer}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialIconLink} ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className={`${styles.supportedByContainer} md:text-right`}>
              <div className={styles.supportedByText}>
                Supported by
              </div>
              <div className={styles.supportedByLogos}>
                <span>IIT Bombay SINE</span>
                <span>•</span>
                <span>MeitY</span>
                <span>•</span>
                <span>MSME</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarInnerContainer}>
          <div className={`${styles.bottomBarContent} md:flex-row`}>
            <div className={`${styles.copyrightText} md:mb-0`}>
              © {new Date().getFullYear()} IXAR Robotic Solutions. All Rights Reserved.
            </div>
            <div className={styles.legalLinksContainer}>
              <a href="#" className={styles.legalLink}>Privacy Policy</a>
              <a href="#" className={styles.legalLink}>Terms of Service</a>
              <a href="#" className={styles.legalLink}>Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
