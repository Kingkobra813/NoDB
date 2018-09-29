import React, { Component } from "react";

class InputSearch extends Component {
    render() {
        //console.log(this.props)
        return (
            <div>
                <input
                    className="input"
                    type="text"
                    maxLength="8"
                    value={this.props.binValue}
                    onChange={this.props.handleBinChange} >
                </input>
            </div>
        )
    }
}
export default InputSearch;
