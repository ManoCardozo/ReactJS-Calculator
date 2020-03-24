import React, { Component } from "react";
import TitleText from './titleText'
import TitleButton from './titleButton'
import Menu from './menu'
import { Row, Col } from "reactstrap";
import { connect } from 'react-redux';

class Title extends Component {
    render() {
        return (
            <div className="calc-title-container">
                <Row noGutters={true}>
                    <Col xs={12}>
                        <div className="float-left">
                            <TitleButton></TitleButton>
                        </div>
                        <TitleText>Calculator</TitleText>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Title;