import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <Container>
          <h1 className="display-3 fw-bold">Team</h1>
        </Container>
      </section>

      {/* Founder Section */}
      <section className="py-5">
        <Container>
          <h2 className="display-4 fw-bold text-primary text-center mb-4">Founder</h2>
          <hr className="w-25 mx-auto border-primary border-2 mb-5" />
          
          <Row className="justify-content-center">
            <Col lg={4} md={6}>
              <Card className="text-center border-0 shadow">
                <Card.Img 
                  variant="top" 
                  src={founder.image} 
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title className="text-primary fs-4">{founder.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{founder.title}</Card.Subtitle>
                  <Card.Text>{founder.qualification}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="display-4 fw-bold text-primary text-center mb-4">Team</h2>
          <hr className="w-25 mx-auto border-primary border-2 mb-5" />
          
          <Row className="g-4">
            {teamMembers.map((member, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="text-center border-0 shadow h-100">
                  <Card.Img 
                    variant="top" 
                    src={member.image} 
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title className="text-primary fs-5">{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.title}</Card.Subtitle>
                    <Card.Text className="small">{member.qualification}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Mentors Section */}
      <section className="py-5">
        <Container>
          <h2 className="display-4 fw-bold text-primary text-center mb-4">Our Mentors</h2>
          <hr className="w-25 mx-auto border-primary border-2 mb-5" />
          
          <Row className="g-4 justify-content-center">
            {mentors.map((mentor, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="text-center border-0 shadow">
                  <Card.Img 
                    variant="top" 
                    src={mentor.image} 
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title className="text-primary fs-5">{mentor.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{mentor.title}</Card.Subtitle>
                    <Card.Text className="small">{mentor.qualification}</Card.Text>
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
