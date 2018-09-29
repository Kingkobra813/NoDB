import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import InputSearch from "./components/Inputsearch";
import Otherupdate from "././components/Otherupdate";
import Button from "./components/Button";

const BASE_URL = "http://localhost:3005"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      binValue: '',
      value: '',
      banks: [],
      bankInfo: {
        bankName: '',
        bankPhone: '',
        bankCountry: '',
        other: ''
      },
      serverBank: {
        serBankBin: '',
        serOther: ''
      }
    }
  }

  handleInputSearch = () => {
    axios.get(`https://lookup.binlist.net/${this.state.binValue}`).then(response => {
      //console.log(response.data)
      this.setState({
        bankName: response.data.bank.name,
        bankPhone: response.data.bank.phone,
        bankCountry: response.data.country.name
      })
    })
    axios.get(BASE_URL + "/bank/" + this.state.binValue).then(response => {
      //console.log(response.data, "response.data")
      this.setState({
        serBankBin: response.data.bin,
        //serOther: response.data.other,
        other: response.data.other,
      })
    })
  }



  handleUpdate = () => {
    //console.log('we in here')
    axios.post(BASE_URL + "/add-bank", {
      bin: this.state.binValue,
      other: this.state.otherToSet

    }).then(response => {

      //console.log(response.data)
      this.setState({
        otherToSet: response.data.other
      })
    })
      .catch(e => console.log('this is e', e))
  }

  handleBinChange = e => {
    //console.log(this.state.binValue)
    this.setState({ binValue: e.target.value })
  }

  handleOtherChange = e => {
    //console.log(this.state.other)
    this.setState({ otherToSet: e.target.value });
  };




  render() {
    return (
      <div className="main">
        <h1>Bin Lookup</h1>
        <InputSearch
          handleBinChange={this.handleBinChange}
        />

        {/* <Button
          handleInputSearch={this.handleInputSearch}
        /> */}
        <button
          className="button"
          onClick={this.handleInputSearch}>Search</button>
        <div className="bankstyles" type="text">{this.state.bankName}</div>
        <div className="bankstyles" type="text">{this.state.bankPhone}</div>
        <div className="bankstyles" type="text">{this.state.bankCountry}</div>
        <div className="bankstyles" type="text">{this.state.other}</div>

        <Otherupdate
          handleOtherChange={this.handleOtherChange}
        />

        {/* <input
          className="input"
          type="text"
          placeholder="Other Info"
          onChange={this.handleOtherChange}></input> */}
        <button
          className="button"
          onClick={this.handleUpdate}>Update Interanl Info</button>
      </div>
    );
  }
}

export default App;
