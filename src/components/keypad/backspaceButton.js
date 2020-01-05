import React, { Component } from "react";
import { processBackspace } from '../../actions/processBackspace';
import { store } from '../../store/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faBackspace);

class BackspaceButton extends Component {
    render() {
        var btnStyle = "calc-btn";

        const dispatchAction = () => {
            store.dispatch(processBackspace());
        };

        return (
            <div>
                <button className={btnStyle} onClick={() => dispatchAction()}>
                    <FontAwesomeIcon icon="backspace" />
                </button>
            </div>
        )
    }
}

export default BackspaceButton;