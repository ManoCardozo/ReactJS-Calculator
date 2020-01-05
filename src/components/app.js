import React, { Component } from 'react';
import { Container, Row, Col} from "reactstrap";
import Title from './title/title'
import Output from './output/output'
import Keypad  from './keypad/keypad'

class App extends Component {
  render() {
    return (
      <div className="calc-app">
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col md={{size: 4, offset: 4}}>
              <div className="calc-wrapper">
                <Title  />
                <Output />
                <Keypad />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
