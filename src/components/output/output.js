import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { connect } from 'react-redux';
import OutputResult from './outputResult'
import OutputExpression from "./outputExpression";

class Output extends Component {
    render() {
        return (
            <div>
                <Row noGutters={true}>
                    <Col xs={12}>
                        <OutputExpression expression={this.props.expression}></OutputExpression>
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <Col xs={12}>
                        <OutputResult display={this.props.display}></OutputResult>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        display: state.output.display,
        expression: state.output.expression
    }
}

export default connect(mapStateToProps)(Output);