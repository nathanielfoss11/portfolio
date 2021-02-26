import React from 'react';
import { Container, Col, Row} from 'react-bootstrap';

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return ( 
      <Container>
        <Col>
          <Row>
            <h1>Nav Bar</h1>
          </Row>
          <Row id='intro'>
            <h2>Hello, my name is Nate Foss</h2>
            <h3>My passion is bringing ideas to life through technology</h3>
            <p id='description'>I am a Software Engineer based in Denver, Colorado that specializes in full-stack developement. Currently, I am looking for an Engineering position either in the Denver are or Remote</p>
          </Row>
          <Row>
            
          </Row>
        </Col>
      </Container>
    );
  }
}

export default Homepage;