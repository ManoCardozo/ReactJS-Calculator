import React, { Component } from "react";
import { addDecSeparator } from '../../actions/addDecSeparator';
import { appConst } from '../../constants/appConst';
import { store } from '../../store/store';

class DecimalSeparatorButton extends Component {
    render() {
        var btnStyle = "calc-btn";

        const dispatchAction = () => {
            store.dispatch(addDecSeparator());
        };

        return (
            <div>
                <button className={btnStyle} onClick={() => dispatchAction()}>
                    {appConst.DecSeparator}
                </button>
            </div>
        )
    }
}

export default DecimalSeparatorButton;