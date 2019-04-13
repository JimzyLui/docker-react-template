import React, { Component } from "react";

class TextboxWithLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("TextboxWithLabel...componentDidMount");
  }

  render() {
    console.log("TextboxWithLabel");
    const textBox = this.props;
    let settings;
    if (textBox.settings) {
      settings = textBox.settings;
    } else {
      settings = {
        controlClassName: "hidden center",
        lblClassName: "hidden left",
        tbClassName: ""
      };
    }
    console.log("textBox", textBox);
    console.log("textBox settings", settings);
    const sName = textBox.name + "Control";
    const classList = "textBox " + settings.controlClassName;
    const lblClassList = settings.lblClassName;
    const tbClassList = settings.tbClassName;
    return (
      <div name={sName} className={classList}>
        <label htmlFor={textBox.name} className={lblClassList}>
          {textBox.title}:
        </label>
        <input
          id={textBox.name}
          name={textBox.name}
          type="text"
          defaultValue={textBox.value}
          className={tbClassList}
        />
      </div>
    );
  }
}

export default TextboxWithLabel;
