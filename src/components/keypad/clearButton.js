import React, { Component } from "react";
import { clearDisplay } from '../../actions/clearDisplay';
import { store } from '../../store/store';

class ClearButton extends Component {
    render() {
        var btnStyle = "calc-btn";

        const dispatchAction = () => {
            store.dispatch(clearDisplay());
        };

        return (
            <div>
                <button className={btnStyle} onClick={() => dispatchAction()}>
                    CE
                </button>
            </div>
        )
    }
}

export default ClearButton;