import React, { Component } from "react";
import { store } from '../../store/store';
import { toggleMenu } from '../../actions/toggleMenu';

class TitleText extends Component {
    render() {

        const dispatchAction = () => {
            store.dispatch(toggleMenu());
        };

        return (
            <div onClick={() => dispatchAction()}>
                <p className="calc-title-text">
                    {this.props.children}
                </p>
            </div>
        )
    }
}

export default TitleText;