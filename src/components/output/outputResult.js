import React, { Component } from "react";
import { intialState } from '../../constants/initialState'

class OutputResult extends Component {
    render() {
        let outputValue = this.props.display || intialState.output.display;
        //outputValue = Number(outputValue).toLocaleString(); //Use Number(outputValue).toLocaleString('en');?

        return (
            <div className="calc-output float-right">
                {outputValue}
            </div>
        )
    }
}

export default OutputResult;