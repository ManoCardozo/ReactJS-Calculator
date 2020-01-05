import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { operator } from '../../constants/operator'
import DigitButton from './digitButton'
import OperatorButton from './operatorButton'
import ClearButton from './clearButton'
import ToggleSignButton from './toggleSignButton'
import BackspaceButton from './backspaceButton'
import DecimalSeparatorButton from './decimalSeparatorButton'
import PercentButton from './percentButton'

class Keypad  extends Component {
    render() {
        return (
            <div>
                <Row noGutters={true}>
                    <Col xs={3}>
                        <ClearButton />
                    </Col>
                    <Col xs={3}>
                        <BackspaceButton />
                    </Col>
                    <Col xs={3}>
                        <PercentButton />
                    </Col>
                    <Col xs={3}>
                        <OperatorButton val={operator.division} />
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <Col xs={3}>
                        <DigitButton val={7} />
                    </Col>
                    <Col xs={3}>
                        <DigitButton val={8} />
                    </Col>
                    <Col xs={3}>
                        <DigitButton val={9} />
                    </Col>
                    <Col xs={3}>
                        <OperatorButton val={operator.multiplication} />
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <Col xs={3}>
                        <DigitButton val={4} />
                    </Col>
                    <Col xs={3}>
                        <DigitButton val={5} />
                    </Col>
                    <Col xs={3}>
                        <DigitButton val={6} />
                    </Col>
                    <Col xs={3}>
                        <OperatorButton val={operator.subtraction} />
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <Col xs={3}>
                        <DigitButton val={1} />
                    </Col>
                    <Col xs={3}>
                        <DigitButton val={2} />
                    </Col>
                    <Col xs={3}>
                        <DigitButton val={3} />
                    </Col>
                    <Col xs={3}>
                        <OperatorButton val={operator.addition} />
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <Col xs={3}>
                        <ToggleSignButton />
                    </Col>
                    <Col xs={3}>
                        <DigitButton val={0} />
                    </Col>
                    <Col xs={3}>
                        <DecimalSeparatorButton />
                    </Col>
                    <Col xs={3}>
                        <OperatorButton val={operator.equals} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Keypad;