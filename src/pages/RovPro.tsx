import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const RovPro: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <Container>
          <h1 className="display-3 fw-bold">ROV Pro</h1>
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
                ROV Pro is a light industrial underwater ROV designed for industrial applications. 
                It works with various power supply and has stronger powered motors. The thrusters 
                layout which allows omni movement in all directions. The anti-stuck motor 150W 
                which can resist the flow of water at 4 knots(2m/s) in all directions. Maximum 
                underwater depth of ROV Pro up to 150 meters(490FT), diving deeper and exploring 
                more in underwater with live 4k video resolution.
              </p>
              
              <h3 className="text-primary mb-3">Easy Operate and Deployment</h3>
              <p className="fs-5 text-justify">
                The ROV Pro is a Lightweight easy to carry and perfect for several industrial 
                applications. The simple compact design makes it small easy deployment and recovery. 
                The frame construction provides adding payloads such as sensors, auxiliary camera, 
                Lumen light and scanner.
              </p>
            </Col>
            
            <Col lg={6} className="text-center">
              <img
                src="/assets/Rovpro1.daa4b27c.png"
                alt="ROV Pro"
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
                    <td>18.9" x 10.5" x 6.4" (480 x 267 x 165 mm)</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>5.7kg</td>
                  </tr>
                  <tr>
                    <td>Power Input</td>
                    <td>230V, 4.5A, @50-60Hz (Single Phase, Unlimited Runtime)</td>
                  </tr>
                  <tr>
                    <td>Battery</td>
                    <td>300 Wh, Runtime up to 4 Hrs</td>
                  </tr>
                  <tr>
                    <td>Max Speed</td>
                    <td>4 Knots (2 m/s)</td>
                  </tr>
                  <tr>
                    <td>Storage Capacity</td>
                    <td>SD Card 128 GB</td>
                  </tr>
                  <tr>
                    <td>Tether Length</td>
                    <td>150 m</td>
                  </tr>
                  <tr>
                    <td>Depth Rating</td>
                    <td>490ft (150m)</td>
                  </tr>
                  <tr>
                    <td>Working Temperature</td>
                    <td>-10℃~45℃</td>
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
                    <td>Laser Scaler, 14000 Lumen Light, 4K auxiliary camera, USBL, Depth Lock Sonar</td>
                  </tr>
                  <tr>
                    <td>Illumination</td>
                    <td>4000 Lumen Forward</td>
                  </tr>
                  <tr>
                    <td>Vision Feed</td>
                    <td>UHD: 3840*2160 (4K) 30fps FHD: 1920*1080 (1080p) 30/60/120fps</td>
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

export default RovPro;
