import React from 'react';
import {
  Target,
  Users,
  Award
} from 'lucide-react';

const VisionPage: React.FC = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our Vision
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            To be the global leader in underwater robotics, pioneering solutions that drive progress and sustainability.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-[#FFD7D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that drive our success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;