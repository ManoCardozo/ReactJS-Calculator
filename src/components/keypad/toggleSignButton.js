import React, { Component } from "react";
import { toggleSign } from '../../actions/toggleSign';
import { store } from '../../store/store';

class ToggleSignButton extends Component {
    render() {
        var btnStyle = "calc-btn";

        const dispatchAction = () => {
            store.dispatch(toggleSign());
        };

        return (
            <div>
                <button className={btnStyle} onClick={() => dispatchAction()}>
                    ±
                </button>
            </div>
        )
    }
}

export default ToggleSignButton;