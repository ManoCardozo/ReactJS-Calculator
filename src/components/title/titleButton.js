import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { store } from '../../store/store';
import { toggleMenu } from '../../actions/toggleMenu';

library.add(faBars);

class TitleButton extends Component {
    render() {

        const dispatchAction = () => {
            store.dispatch(toggleMenu());
        };

        return (
            <div onClick={() => dispatchAction()}>
                <FontAwesomeIcon icon="bars"/>
            </div>
        )
    }
}

export default TitleButton;