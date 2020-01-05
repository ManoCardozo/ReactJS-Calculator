import React, { Component } from "react";
import { intialState } from '../../constants/initialState'

class OutputExpression extends Component {
    render() {
        return (
            <div className="calc-output-expression float-right">
                {this.props.expression || intialState.output.expression}
            </div>
        )
    }
}

export default OutputExpression;