import React, { Component } from "react";

// import {arrCards} from './data';
// import Card from './Card.js';
// const moment = require('moment');

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // console.log("Dropdown...componentDidMount");
  }

  render() {
    const arrChoices = this.props.choices;
    // console.log("dropdown: arrChoices: ", arrChoices);
    // console.log("dropdown defaultValue", this.props.defaultValue);
    const sName = this.props.name + "Select";
    return (
      <div name={sName} className="dropdown">
        <select
          name={this.props.name}
          id={this.props.name}
          defaultValue={this.props.defaultValue}
        >
          {arrChoices.map(choice => {
            // console.log("choice.name: ", choice);
            return <Option key={choice} name={choice} />;
          })}
        </select>
      </div>
    );
  }
}

function Option(props) {
  return <option className="option">{props.name}</option>;
}

export default Dropdown;
