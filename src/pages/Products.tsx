import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const Products: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <Container>
          <h1 className="display-3 fw-bold">ROV 1.0</h1>
        </Container>
      </section>

      {/* Product Details */}
      <section className="py-5">
        <Container>
          <h2 className="display-4 fw-bold text-primary text-center mb-5">Product Details</h2>
          <hr className="w-50 mx-auto border-primary border-2 mb-5" />
          
          <Row className="align-items-center mb-5">
            <Col lg={6}>
              <h3 className="text-primary mb-3">Description</h3>
              <p className="fs-5 text-justify mb-4">
                ROV is a portable, stable, adventurous underwater drone that can conquer the waters 
                and is easily operated through Intuitive flight controls. With Eight-Thruster 
                configurations, number of available accessories, compatible software which adds to 
                its High level of Performance, Flexibility, and Expandability. Making it One of the 
                optimised underwater sensing solutions for assessing and monitoring underwater 
                systems in the market!
              </p>
              
              <h3 className="text-primary mb-3">Modular Lightweight Frame</h3>
              <p className="fs-5 text-justify">
                The ROV chassis is lightweight and sturdy constructed by using HDPE material. 
                Simple design with open frame construction and generous payload offers the 
                possibility of adding a wide range of tools and sensors as well as interchangeable 
                tool skids, adding to it versatility and expandability, for different applications.
              </p>
            </Col>
            
            <Col lg={6} className="text-center">
              <img
                src="/assets/ROV.2c6c4490.png"
                alt="ROV 1.0"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Specifications Table */}
      <section className="py-5 bg-light">
        <Container>
          <h3 className="text-primary text-center mb-4">Specifications</h3>
          <Row>
            <Col lg={10} className="mx-auto">
              <Table striped bordered hover responsive className="shadow bg-white">
                <thead className="table-primary">
                  <tr>
                    <th>Parameter</th>
                    <th>Specifications</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dimensions</td>
                    <td>Length- 650mm, Width- 480mm, Height- 380mm</td>
                  </tr>
                  <tr>
                    <td>Weight In Air</td>
                    <td>22kgs</td>
                  </tr>
                  <tr>
                    <td>Power Input</td>
                    <td>230V, 4.5A, @50-60Hz (Single Phase)</td>
                  </tr>
                  <tr>
                    <td>Depth Rating</td>
                    <td>200m</td>
                  </tr>
                  <tr>
                    <td>Operating Temperature Range</td>
                    <td>15-45 Deg.c</td>
                  </tr>
                  <tr>
                    <td>Deployment and Recovery</td>
                    <td>Manual + Crane</td>
                  </tr>
                  <tr>
                    <td>Controller Pad</td>
                    <td>6 Axis</td>
                  </tr>
                  <tr>
                    <td>Electrical Safety & Distribution</td>
                    <td>Short-Circuit Protection, Ground-Fault: Current-Leak Protection, Emergency Shut Down: Over Current Protection</td>
                  </tr>
                  <tr>
                    <td>Control System</td>
                    <td>Openloop System with Human Machine Interface</td>
                  </tr>
                  <tr>
                    <td>Depth Accuracy</td>
                    <td>10mm Resolution</td>
                  </tr>
                  <tr>
                    <td>Payloads</td>
                    <td>Laser Scaler, 360 Sonar Profiling</td>
                  </tr>
                  <tr>
                    <td>Illumination</td>
                    <td>6000 Lumen Forward</td>
                  </tr>
                  <tr>
                    <td>Vision Feed</td>
                    <td>1920*1080p @30 FPS</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Software Section */}
      <section className="py-5">
        <Container>
          <h2 className="display-4 fw-bold text-primary text-center mb-5">Software</h2>
          <hr className="w-25 mx-auto border-primary border-2 mb-5" />
          
          <Row className="align-items-center">
            <Col lg={6}>
              <h3 className="text-primary mb-3">User Interface</h3>
              <p className="fs-5 mb-4">
                Our software brings a vast number of features, and are exclusively designed for 
                end-users. At the surface, the pilot controls the ROV through a laptop and a 
                controller. The Ground station acts as the user interface. Providing the live 
                video stream, sensor feedback, information, the ability to change settings and configuration.
              </p>
              
              <h3 className="text-primary mb-3">Reporting Software</h3>
              <p className="fs-5 mb-4">
                Our online reporting solution helps the user to visualize and analyse the 
                inspected parts for its flaws. All the information data is stored online and 
                can be accessed by the user remotely.
              </p>
              
              <h3 className="text-primary mb-3">Image Enhancement (AI)</h3>
              <p className="fs-5">
                Artificial Intelligence enables maneuverability during Turbid (Low Visibility) Conditions.
              </p>
            </Col>
            
            <Col lg={6} className="text-center">
              <div className="software-images">
                <img
                  src="/assets/testing.d4c7c546.JPG"
                  alt="Testing Interface"
                  className="img-fluid rounded shadow mb-3"
                />
                <img
                  src="/assets/loginpage.e1710b70.jpg"
                  alt="Login Interface"
                  className="img-fluid rounded shadow mb-3"
                />
                <img
                  src="/assets/resultpipe.8442b012.jpg"
                  alt="Results Interface"
                  className="img-fluid rounded shadow"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Products;
