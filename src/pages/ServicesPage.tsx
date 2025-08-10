import React, { useState } from 'react';
import { Camera, Ruler, Layers, Radar, Settings, Waves, Anchor, Zap, Mountain, Fuel, Grid as Bridge, Ship, CheckCircle, ArrowRight, Play } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const rovServices = [
    {
      title: 'HD Videoscope Inspection',
      icon: <Camera className="w-8 h-8" />,
      description: 'Crystal-clear underwater video inspection with 4K recording capabilities',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['4K Ultra HD recording', 'Real-time streaming', 'Low-light enhancement', 'Digital zoom capabilities'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Precision Laser Scaling',
      icon: <Ruler className="w-8 h-8" />,
      description: 'Accurate measurement and dimensional analysis using advanced laser technology',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['±1mm accuracy', 'Real-time measurements', '3D point cloud generation', 'CAD integration'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Thickness Analysis (UT & PECT)',
      icon: <Layers className="w-8 h-8" />,
      description: 'Non-destructive testing for material integrity and corrosion assessment',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Ultrasonic testing', 'Pulsed eddy current', 'Corrosion mapping', 'Detailed reporting'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Advanced Sonar Mapping',
      icon: <Radar className="w-8 h-8" />,
      description: 'High-resolution sonar systems for underwater mapping and object detection',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['360° scanning', 'Multi-beam sonar', 'Object classification', 'Bathymetric mapping'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Custom R&D Solutions',
      icon: <Settings className="w-8 h-8" />,
      description: 'Tailored research and development for specialized underwater applications',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Custom sensor integration', 'Prototype development', 'Field testing', 'Technical consultation'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Bathymetry & Surveying',
      icon: <Waves className="w-8 h-8" />,
      description: 'Comprehensive underwater topography mapping and depth measurements',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['High-resolution mapping', 'GPS integration', 'Contour generation', 'Volume calculations'],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const industries = [
    {
      name: 'Ports & Marine',
      icon: <Anchor className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: ['Breakwater Inspection', 'Jetty & Wharf Assessment', 'Harbor Maintenance', 'Underwater Structures'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Power Generation',
      icon: <Zap className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: ['Intake/Outfall Pipelines', 'Cooling Water Systems', 'Tank Inspections', 'Thermal Monitoring'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Dams & Hydropower',
      icon: <Mountain className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: ['Dam Structure Assessment', 'Tunnel Inspections', 'Spillway Monitoring', 'Sediment Analysis'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Oil & Gas',
      icon: <Fuel className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: ['Pipeline Integrity', 'Platform Inspections', 'Subsea Equipment', 'Environmental Monitoring'],
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Bridge Infrastructure',
      icon: <Bridge className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: ['Pier Inspections', 'Foundation Assessment', 'Scour Monitoring', 'Structural Health'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Maritime Vessels',
      icon: <Ship className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      services: ['Hull Inspections', 'Propeller Analysis', 'Ballast Tank Survey', 'Coating Assessment'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Underwater ROV"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Comprehensive ROV Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Advanced underwater inspection, surveying, and maintenance solutions powered by cutting-edge robotics technology
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <Play className="mr-2 w-5 h-5" />
            Watch Our Services in Action
          </button>
        </div>
      </section>

      {/* ROV Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced ROV Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art ROV systems deliver precision, reliability, and comprehensive data collection
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              {rovServices.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? 'bg-white shadow-lg scale-105'
                      : 'bg-white/50 hover:bg-white hover:shadow-md'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                    <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      activeService === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={rovServices[activeService].image}
                  alt={rovServices[activeService].title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {rovServices[activeService].title}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {rovServices[activeService].features.map((feature, index) => (
                      <div key={index} className="flex items-center text-white text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering specialized underwater solutions across diverse sectors with proven expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${industry.color} flex items-center justify-center text-white shadow-lg`}>
                      {industry.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-3">
                    {industry.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Explore the Depths?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our experts to discuss your underwater inspection and surveying needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Request Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;