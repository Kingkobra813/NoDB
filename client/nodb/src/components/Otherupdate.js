import React, { Component } from "react";

class Otherupdate extends Component {
    render() {
        return (
            <div>

                <input
                    className="input"
                    type="text"
                    placeholder="Other Info"
                    onChange={this.props.handleOtherChange}>
                </input>

            </div>
        )
    }
}

export default Otherupdate;