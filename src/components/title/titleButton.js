import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faBars);

class TitleButton extends Component {
    render() {
        return (
            <div>
                <FontAwesomeIcon icon="bars" />
            </div>
        )
    }
}

export default TitleButton;