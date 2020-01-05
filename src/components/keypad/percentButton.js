import React, { Component } from "react";
import { calcPercentage } from '../../actions/calcPercentage';
import { store } from '../../store/store';

class PercentButton extends Component {
    render() {
        var btnStyle = "calc-btn";

        const dispatchAction = () => {
            store.dispatch(calcPercentage());
        };

        return (
            <div>
                <button className={btnStyle} onClick={() => dispatchAction()}>
                    %
                </button>
            </div>
        )
    }
}

export default PercentButton;