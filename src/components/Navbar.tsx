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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#FFEBEB]/90 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
          : 'bg-[#FFEBEB]/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            <Link 
              to="/home" 
              className="flex items-center space-x-3 group"
              onMouseEnter={() => setActiveHover('logo')}
              onMouseLeave={() => setActiveHover('')}
            >
              <div className={`relative transition-all duration-500 ${
                activeHover === 'logo' ? 'scale-110' : 'scale-100'
              }`}>
                <img src={ixarLogo} alt="IXAR Logo" className="h-12 w-auto" />
              </div>
              {/* <div className="hidden sm:block">
                <div className="font-bold text-xl bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                  IXAR
                </div>
                <div className="text-xs text-gray-500 font-medium tracking-wider">
                  ROBOTIC SOLUTIONS
                </div>
              </div> */}
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              <div 
                className="relative"
                onMouseEnter={() => setIsAboutUsOpen(true)}
                onMouseLeave={() => setIsAboutUsOpen(false)}
              >
                <button
                  className={`flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    location.pathname.includes('/home') || location.pathname.includes('/vision')
                      ? 'text-blue-600 bg-[#FFC3C3]'
                      : 'text-gray-700 hover:text-[#E60000] hover:bg-[#FFC3C3]'
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    isAboutUsOpen ? 'rotate-180' : 'rotate-0'
                  }`} />
                </button>

                <div className={`absolute top-full left-0 mt-2 w-80 bg-[#FFEBEB] rounded-2xl shadow-2xl border border-gray-100 transition-all duration-300 origin-top ${
                  isAboutUsOpen 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                }`}>
                  <div className="p-6">
                    <div className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
                      <Waves className="w-4 h-4 mr-2 text-blue-600" />
                      About IXAR
                    </div>
                    <div className="space-y-3">
                      {aboutUsItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                        >
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.description}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
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
                  className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 group ${
                    isActive(item.path)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-[#E60000]'
                  }`}
                  onMouseEnter={() => setActiveHover(item.path)}
                  onMouseLeave={() => setActiveHover('')}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className={`absolute inset-0 bg-[#FFC3C3] rounded-lg transition-all duration-300 ${
                    activeHover === item.path || isActive(item.path)
                      ? 'scale-100 opacity-100' 
                      : 'scale-95 opacity-0'
                  }`} />
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                  )}
                </Link>
              ))}

              <div 
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  className={`flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    location.pathname.includes('/product') || location.pathname.includes('/rov')
                      ? 'text-blue-600 bg-[#FFC3C3]'
                      : 'text-gray-700 hover:text-[#E60000] hover:bg-[#FFC3C3]'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    isProductsOpen ? 'rotate-180' : 'rotate-0'
                  }`} />
                </button>

                <div className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-500 origin-top ${
                  isProductsOpen 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                }`}>
                  <div className="p-6">
                    <div className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
                      <Waves className="w-4 h-4 mr-2 text-blue-600" />
                      Our ROV Solutions
                    </div>
                    <div className="space-y-3">
                      {productItems.map((product) => (
                        <Link
                          key={product.path}
                          to={product.path}
                          className="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                        >
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                            {product.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {product.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {product.description}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              {product.specs}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                <Search className="w-5 h-5 text-gray-600" />
              </button>

              <Link
                to="/partner"
                className="hidden md:flex items-center px-4 py-2.5 bg-[#FF6464] text-white text-sm font-semibold rounded-lg hover:bg-[#E65A5A] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Partner With Us</span>
              </Link>

              <Link
                to="/contact"
                className="hidden sm:flex items-center px-4 py-2.5 bg-[#FFC3C3] text-[#E60000] text-sm font-semibold rounded-lg transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Contact</span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-gray-600" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={`lg:hidden transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-[#FFEBEB] border-t border-gray-200 px-4 py-6">
            
            <div className="space-y-2 mb-6">
              <div className="relative">
                <button
                  onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
                  className={`flex items-center justify-between w-full px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
                    isActive('/home') || isActive('/vision')
                      ? 'text-blue-600 bg-[#FFC3C3]'
                      : 'text-gray-700 hover:text-[#E60000] hover:bg-[#FFC3C3]'
                  }`}>
                  <span>About Us</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isAboutUsOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isAboutUsOpen ? 'max-h-40' : 'max-h-0'}`}>
                  <div className="pt-2 pl-4">
                    {aboutUsItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
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
                  className={`flex items-center px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-[#FFC3C3]'
                      : 'text-gray-700 hover:text-[#E60000] hover:bg-[#FFC3C3]'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mb-6">
              <div className="text-sm font-semibold text-gray-900 mb-3 px-4 flex items-center">
                <Waves className="w-4 h-4 mr-2 text-blue-600" />
                Products
              </div>
              <div className="space-y-2">
                {productItems.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-[#E60000] hover:bg-[#FFC3C3] rounded-lg transition-colors duration-200"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center mr-3`}>
                      {React.cloneElement(product.icon, { className: 'w-4 h-4 text-white' })}
                    </div>
                    <div>
                      <div>{product.name}</div>
                      <div className="text-xs text-gray-500">{product.specs}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3 border-t border-gray-200 pt-6">
              <Link
                to="/partner"
                className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-semibold rounded-lg"
              >
                Partner With Us
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 text-gray-700 text-base font-semibold rounded-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
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