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
import styles from './TeamPage.module.css';

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
    <div className={styles.minHeightScreen}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageOverlay}>
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Team collaboration"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroContentContainer}>
          <h1 className={styles.heroTitle}>
            Meet Our Team
          </h1>
          <p className={styles.heroSubtitle}>
            The brilliant minds behind IXAR's revolutionary underwater robotics solutions
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className={styles.navTabsSection}>
        <div className={styles.navTabsInnerContainer}>
          <div className={styles.navTabsContainer}>
            {[
              { id: 'team', label: 'Core Team' },
              { id: 'mentors', label: 'Mentors' },
              { id: 'values', label: 'Our Values' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${styles.navTabButton} ${
                  activeTab === tab.id
                    ? styles.navTabButtonActive
                    : styles.navTabButtonInactive
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className={styles.founderSection}>
        <div className={styles.founderInnerContainer}>
          <div className={styles.founderHeader}>
            <h2 className={styles.founderTitle}>Our Founder</h2>
            <p className={styles.founderSubtitle}>Visionary leadership driving underwater robotics innovation</p>
          </div>

          <div className={styles.founderCardWrapper}>
            <div className={styles.founderCard}>
              <div className={styles.founderCardContent}>
                <div className={styles.founderImageContainer}>
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className={styles.founderImage}
                  />
                </div>
                <div className={styles.founderDetailsContainer}>
                  <h3 className={styles.founderName}>{founder.name}</h3>
                  <p className={styles.founderTitleDetail}>{founder.title}</p>
                  <p className={styles.founderQualification}>{founder.qualification}</p>
                  <p className={styles.founderBio}>{founder.bio}</p>
                  
                  <div className={styles.achievementsContainer}>
                    <h4 className={styles.achievementsTitle}>Key Achievements</h4>
                    <div className={styles.achievementsList}>
                      {founder.achievements.map((achievement, index) => (
                        <div key={index} className={styles.achievementItem}>
                          <Star className={styles.achievementIcon} />
                          <span className={styles.achievementText}>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.socialLinksContainer}>
                    <a
                      href={founder.social.linkedin}
                      className={styles.socialLinkButton}
                    >
                      <Linkedin className={styles.socialLinkIcon} />
                    </a>
                    <a
                      href={`mailto:${founder.social.email}`}
                      className={`${styles.socialLinkButton} ${styles.emailSocialLinkButton}`}
                    >
                      <Mail className={styles.socialLinkIcon} />
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
        <section className={styles.dynamicContentSection}>
          <div className={styles.dynamicContentInnerContainer}>
            <div className={styles.dynamicContentHeader}>
              <h2 className={styles.dynamicContentTitle}>Core Team Members</h2>
              <p className={styles.dynamicContentSubtitle}>Diverse expertise united by a common vision</p>
            </div>

            <div className={styles.teamMembersGrid}>
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={styles.teamMemberCard}
                >
                  <div className={styles.teamMemberImageContainer}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`${styles.teamMemberImage} group-hover:scale-110`}
                    />
                    <div className={`${styles.teamMemberIconBadge} bg-gradient-to-r ${member.color}`}>
                      <GraduationCap className={styles.teamMemberIcon} />
                    </div>
                  </div>
                  
                  <div className={styles.teamMemberContent}>
                    <h3 className={styles.teamMemberName}>{member.name}</h3>
                    <p className={styles.teamMemberTitle}>{member.title}</p>
                    <p className={styles.teamMemberQualification}>{member.qualification}</p>
                    
                    <div className={styles.expertiseContainer}>
                      <h4 className={styles.expertiseTitle}>Expertise</h4>
                      <div className={styles.achievementsList}>
                        {member.expertise.map((skill, skillIndex) => (
                          <div key={skillIndex} className={styles.expertiseItem}>
                            <ChevronRight className={styles.expertiseIcon} />
                            <span className={styles.expertiseText}>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'mentors' && (
        <section className={styles.dynamicContentSection}>
          <div className={styles.dynamicContentInnerContainer}>
            <div className={styles.dynamicContentHeader}>
              <h2 className={styles.dynamicContentTitle}>Our Mentors</h2>
              <p className={styles.dynamicContentSubtitle}>Guiding wisdom from industry leaders</p>
            </div>

            <div className={styles.mentorsGrid}>
              {mentors.map((mentor, index) => (
                <div
                  key={index}
                  className={styles.mentorCard}
                >
                  <div className={styles.mentorImageContainer}>
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className={styles.mentorImage}
                    />
                    <div className={`${styles.mentorIconBadge} bg-gradient-to-r ${mentor.color}`}>
                      <Award className={styles.mentorIcon} />
                    </div>
                  </div>
                  
                  <div className={styles.mentorContent}>
                    <h3 className={styles.mentorName}>{mentor.name}</h3>
                    <p className={styles.mentorTitleDetail}>{mentor.title}</p>
                    <p className={styles.mentorQualification}>{mentor.qualification}</p>
                    
                    <div className={styles.expertiseContainer}>
                      <h4 className={styles.expertiseTitle}>Expertise</h4>
                      <div className={styles.achievementsList}>
                        {mentor.expertise.map((skill, skillIndex) => (
                          <div key={skillIndex} className={styles.expertiseItem}>
                            <ChevronRight className={styles.mentorExpertiseIcon} />
                            <span className={styles.expertiseText}>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'values' && (
        <section className={styles.dynamicContentSection}>
          <div className={styles.dynamicContentInnerContainer}>
            <div className={styles.dynamicContentHeader}>
              <h2 className={styles.dynamicContentTitle}>Our Core Values</h2>
              <p className={styles.dynamicContentSubtitle}>The principles that drive our success</p>
            </div>

            <div className={styles.valuesGridTeamPage}>
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className={styles.valueCardTeamPage}
                >
                  <div className={styles.valueIconContainerTeamPage}>
                    {value.icon}
                  </div>
                  <h3 className={styles.valueTitleTeamPage}>{value.title}</h3>
                  <p className={styles.valueDescriptionTeamPage}>{value.description}</p>
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
