import React, { Component } from "react";
import { Row, Col, Card } from 'react-materialize';

import image1 from '../assets/images/a1.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <p>The best of africa in visual identity</p>

        <Row>

          <Col m={3} s={12}>
            <Card>
              <div>
                <img src={image1} className="responsive-img" />
                <p>"Lorem ipsum dolor mollit anim id est laborum."</p>
              </div>
            </Card>
          </Col>

          <Col m={3} s={12}>
            <Card>
              <div>
                <img src={image1} className="responsive-img" />
                <p>"Lorem ipsum dolor mollit anim id est laborum."</p>
              </div>
            </Card>
          </Col>

          <Col m={3} s={12}>
            <Card>
              <div>
                <img src={image1} className="responsive-img" />
                <p>"Lorem ipsum dolor mollit anim id est laborum."</p>
              </div>
            </Card>
          </Col>

          <Col m={3} s={12}>
            <Card>
              <div>
                <img src={image1} className="responsive-img" />
                <p>"Lorem ipsum dolor mollit anim id est laborum."</p>
              </div>
            </Card>
          </Col>

          <Col m={3} s={12}>
            <Card>
              <div>
                <img src={image1} className="responsive-img" />
                <p>"Lorem ipsum dolor mollit anim id est laborum."</p>
              </div>
            </Card>
          </Col>


        </Row>

      </div>
    );
  }
}

export default Home;
