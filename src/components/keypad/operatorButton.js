import React, { Component } from "react";
import { addOperator } from '../../actions/addOperator';
import { store } from '../../store/store';

class OperatorButton extends Component {
    render() {
        var btnStyle = "calc-btn calc-operator-btn";

        const dispatchAction = (val) => {
            store.dispatch(addOperator(val));
        };

        return (
            <div>
                <button className={btnStyle} onClick={() => dispatchAction(this.props.val)}>
                    {this.props.val}
                </button>
            </div>
        )
    }
}

export default OperatorButton;