import React, { useState } from 'react';
import { 
  Linkedin, 
  Mail, 
  Award, 
  GraduationCap, 
  Users, 
  Target,
  Star,
  ChevronRight
} from 'lucide-react';

const TeamPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('team');

  const founder = {
    name: 'Rishi Jain',
    title: 'Founder & CEO',
    qualification: 'B.Tech Metallurgy and Material Science, IIT Bombay 2019',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Visionary leader with expertise in materials science and underwater robotics. Passionate about revolutionizing marine exploration through innovative technology.',
    achievements: ['IIT Bombay Alumni', 'SINE Incubation Program', 'MeitY Startup Recognition'],
    social: {
      linkedin: '#',
      email: 'rishi@ixarrobotic.com'
    }
  };

  const teamMembers = [
    {
      name: 'Dhruvik Poriya',
      title: 'Technical Manager',
      qualification: 'B.Tech Mechanical Engineering, Nirma University 2021',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: ['ROV Design', 'System Integration', 'Quality Assurance'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Fahad Baig',
      title: 'Operations Manager',
      qualification: 'B.Tech Mechanical Engineering, Integral University 2021',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: ['Project Management', 'Field Operations', 'Client Relations'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Mahesh K M',
      title: 'Product Developer',
      qualification: 'Diploma Electronics Engineering, SBTE 2018',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: ['Electronics Design', 'Sensor Integration', 'Firmware Development'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Arpit Seth',
      title: 'Account Executive',
      qualification: 'B.Com Mumbai University 2021',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: ['Financial Management', 'Business Development', 'Strategic Planning'],
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Suraj Yadav',
      title: 'Web Developer',
      qualification: 'B.Sc IT Mumbai University 2020',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: ['Full Stack Development', 'UI/UX Design', 'System Architecture'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const mentors = [
    {
      name: 'Anil Jain',
      title: 'Strategic Mentor',
      qualification: 'Managing Director IXAR',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: ['Business Strategy', 'Industry Relations', 'Market Development'],
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Rohit Jain',
      title: 'Technical Mentor',
      qualification: 'PhD Candidate, University of Houston, USA',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: ['Advanced Research', 'Technology Innovation', 'Academic Collaboration'],
      color: 'from-teal-500 to-cyan-500'
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
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            The brilliant minds behind IXAR's revolutionary underwater robotics solutions
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            {[
              { id: 'team', label: 'Core Team' },
              { id: 'mentors', label: 'Mentors' },
              { id: 'values', label: 'Our Values' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Founder</h2>
            <p className="text-xl text-gray-600">Visionary leadership driving underwater robotics innovation</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-96 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-4">{founder.title}</p>
                  <p className="text-gray-600 mb-6">{founder.qualification}</p>
                  <p className="text-gray-700 leading-relaxed mb-8">{founder.bio}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Achievements</h4>
                    <div className="space-y-2">
                      {founder.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          <span className="text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={founder.social.linkedin}
                      className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${founder.social.email}`}
                      className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Based on Active Tab */}
      {activeTab === 'team' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Team Members</h2>
              <p className="text-xl text-gray-600">Diverse expertise united by a common vision</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${member.color} rounded-lg flex items-center justify-center`}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{member.title}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.qualification}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Expertise</h4>
                      {member.expertise.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center">
                          <ChevronRight className="w-3 h-3 text-blue-500 mr-2" />
                          <span className="text-xs text-gray-600">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'mentors' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mentors</h2>
              <p className="text-xl text-gray-600">Guiding wisdom from industry leaders</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${mentor.color} rounded-lg flex items-center justify-center`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
                    <p className="text-purple-600 font-semibold mb-3">{mentor.title}</p>
                    <p className="text-sm text-gray-600 mb-4">{mentor.qualification}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Expertise</h4>
                      {mentor.expertise.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center">
                          <ChevronRight className="w-3 h-3 text-purple-500 mr-2" />
                          <span className="text-xs text-gray-600">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'values' && (
        <section className="py-20">
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
      )}
    </div>
  );
};

export default TeamPage;