import React, { Component } from 'react';
import { Container, Row, Col} from "reactstrap";
import Title from './title/title'
import Output from './output/output'
import Keypad  from './keypad/keypad'
import Menu from './title/menu'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="calc-app">
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col md={{size: 4, offset: 4}}>
              <div className="calc-wrapper">
                <Title  />
                <Menu menuVisibility={this.props.menuVisibility}></Menu>
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

const mapStateToProps = function(state) {
  return {
      menuVisibility: state.menuVisibility
  }
}

export default connect(mapStateToProps)(App);
