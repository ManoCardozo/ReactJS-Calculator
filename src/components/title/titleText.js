import React, { Component } from "react";

class TitleText extends Component {
    render() {
        return (
            <div>
                <p className="calc-title-text">
                    {this.props.children}
                </p>
            </div>
        )
    }
}

export default TitleText;