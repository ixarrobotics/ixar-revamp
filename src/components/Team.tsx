import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './Team.css';

const Team: React.FC = () => {
  const founder = {
    name: 'Rishi Jain',
    title: 'Founder',
    qualification: 'B-Tech Metallurgy and Material Science IIT Bombay 2019',
    image: '/assets/Rishi.8feb0a3c.jpg'
  };

  const teamMembers = [
    {
      name: 'Dhruvik Poriya',
      title: 'Technical Manager',
      qualification: 'BTech - Mechanical Engineering Nirma University 2021',
      image: '/assets/dhruvik.3d618fb2.jpeg'
    },
    {
      name: 'Fahad Baig',
      title: 'Operation Manager',
      qualification: 'BTech - Mechanical Engineering Integral University 2021',
      image: '/assets/fahad.45806dbb.jpeg'
    },
    {
      name: 'Mahesh K M',
      title: 'Product Developer',
      qualification: 'Diploma - Electronics Engineering SBTE 2018',
      image: '/assets/mahesh.6ecf09e7.jpeg'
    },
    {
      name: 'Arpit Seth',
      title: 'Account Executive',
      qualification: 'Bcom - Mumbai University 2021',
      image: '/assets/arpit.928e8832.jpg'
    },
    {
      name: 'Suraj Yadav',
      title: 'Web Developer',
      qualification: 'Bsc - IT Mumbai University 2020',
      image: '/assets/Surajj.1b084ba9.jpeg'
    }
  ];

  const mentors = [
    {
      name: 'Anil Jain',
      title: 'Mentor',
      qualification: 'Managing Director IXAR',
      image: '/assets/anilsir.76bb84d8.jpeg'
    },
    {
      name: 'Rohit Jain',
      title: 'Technical Mentor',
      qualification: 'Pursuing - PhD from University of Houston, USA',
      image: '/assets/rohit.ec113d85.jpeg'
    }
  ];

  return (
    <div>
      <Helmet>
        <title>IXAR Robotic Solutions | Our Team</title>
        <meta name="description" content="Meet the talented team and experienced mentors behind IXAR Robotic Solutions." />
      </Helmet>

      

      <section className="section founder-section">
        <Container>
          <h2 className="section-title text-center">Founder</h2>
          <Row className="justify-content-center align-items-center">
            <Col lg={4} md={6} className="text-center mb-4 mb-lg-0">
              <img src={founder.image} alt={founder.name} className="founder-image rounded-circle img-fluid" />
            </Col>
            <Col lg={6} md={8} className="text-center text-lg-start">
              <h3 className="founder-name">{founder.name}</h3>
              <p className="founder-title">{founder.title}</p>
              <p className="founder-qualification">{founder.qualification}</p>
              <div className="social-icons mt-3">
                {/* Add social media icons here */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <h2 className="section-title text-center">Meet the Team</h2>
          <Row>
            {teamMembers.slice(0, 3).map((member, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="team-card h-100">
                  <Card.Img variant="top" src={member.image} className="rounded-circle mb-3" />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.title}</Card.Subtitle>
                    <Card.Text>{member.qualification}</Card.Text>
                    <div className="social-icons mt-3">
                      {/* Add social media icons here */}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center">
            {teamMembers.slice(3, 5).map((member, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="team-card h-100">
                  <Card.Img variant="top" src={member.image} className="rounded-circle mb-3" />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.title}</Card.Subtitle>
                    <Card.Text>{member.qualification}</Card.Text>
                    <div className="social-icons mt-3">
                      {/* Add social media icons here */}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section bg-alt">
        <Container>
          <h2 className="section-title text-center">Our Mentors</h2>
          <Row className="justify-content-center">
            {mentors.map((mentor, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="team-card h-100">
                  <Card.Img variant="top" src={mentor.image} className="rounded-circle mb-3" />
                  <Card.Body>
                    <Card.Title>{mentor.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{mentor.title}</Card.Subtitle>
                    <Card.Text>{mentor.qualification}</Card.Text>
                    <div className="social-icons mt-3">
                      {/* Add social media icons here */}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Team;