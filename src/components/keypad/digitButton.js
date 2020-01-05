import React, { Component } from "react";
import { addDigit } from '../../actions/addDigit';
import { store } from '../../store/store';

class DigitButton extends Component {
    render() {
        var btnStyle = "calc-btn calc-digit-btn";

        const dispatchAction = (val) => {
            store.dispatch(addDigit(val));
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

export default DigitButton;