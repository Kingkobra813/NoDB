import React, { Component } from "react";

class Button extends Component {

    render() {

        return (

            <div>

                <button
                    className="button"
                    onClick={this.props.handleInputSearch}>Search</button>
                <div className="bankstyles" type="text">{this.props.bankName}</div>
                <div className="bankstyles" type="text">{this.props.bankPhone}</div>
                <div className="bankstyles" type="text">{this.props.bankCountry}</div>
                <div className="bankstyles" type="text">{this.props.other}</div>
            </div >
        )
    }


}

export default Button;
