import React, { Component } from "react";
import Dropdown from "./Dropdown.js";
import TextboxWithLabel from "./TextboxWithLabel.js";
import { arrPriorities } from "./data";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // status: "pending",
      view: "readonly"
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addCard = this.addCard.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  addCard() {}
  saveCard() {
    this.setState({ view: "readonly" });
  }
  deleteCard() {

    this.setState({ view: "readonly" });
  }
  cancel() {
    this.setState({ view: "readonly" });
  }

  toggleEdit() {
    if (this.state.view === "readonly") {
      this.setState({ view: "edit" });
    } else {
      this.setState({ view: "readonly" });
    }
  }

  render() {
    const cardInfo = this.props.cardInfo;
    const objCreatedBySettings = {
      // title: "Created By",
      // name: "createdBy",
      controlClassName: "center",
      lblClassName: "left",
      tbClassName: ""
      // value: cardInfo.createdBy
    };
    if (this.state.view === "readonly") {
      return (
        <div
          className="card readonly parent"
          id={cardInfo.id}
          data-status={this.state.status}
          onClick={() => this.toggleEdit()}
          title="Click to edit"
        >
          {/* <div>**read-only**</div> */}
          <h4>{cardInfo.title}</h4>
          <div className="italics blue f16 mb5">{cardInfo.task}</div>
          <div className="center italics f24">
            <label className="hidden f16 left">Priority:</label>
            {cardInfo.priority}
          </div>
          <div className="hidden center">
            <label className="hidden left">Created By:</label>
            {cardInfo.createdBy}
          </div>
          <div className="center">
            <label className="hidden left">Assigned To:</label>
            {cardInfo.assignedTo}
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="card edit"
          id={cardInfo.id}
          data-status={this.state.status}
        >
          <div className="center">**edit**</div>
        <form>
          <div>
            <div>
              <label htmlFor="title">Task: </label>
              <input name="title" type="text" defaultValue={cardInfo.title} />
            </div>
            <div>
              <label htmlFor="">Description: </label>
              <textarea defaultValue={cardInfo.task} />
            </div>
            <div className="flexRowNoWrap">
              <label htmlFor="priority">Priority: </label>
              <Dropdown
                name="priority"
                choices={arrPriorities}
                defaultValue={cardInfo.priority}
              />
            </div>

            {/* <TextboxWithLabel
              name="createdBy"
              title="Created By"
              defaultValue={cardInfo.createdBy}
              settings={objCreatedBySettings}
            /> */}
            <div>
              <label htmlFor="createdBy">Created By:</label>
              <input
                id="createdBy"
                type="text"
                defaultValue={cardInfo.createdBy}
              />
            </div>
            <div>
              <label htmlFor="assignedTo">Assigned To:</label>
              <input
                id="assignedTo"
                type="text"
                defaultValue={cardInfo.assignedTo}
              />
            </div>
            <div id="save" className="buttonControl">

              {/* <div id="save"> */}
              <button
                type="submit"
                id="submit"
                formAction={`tasks/delete/${cardInfo.id}`}
                className="center"
                onClick={() => this.saveCard()}
              >
                Save
              </button>
              <button
                type="submit"
                id="delete"
                formAction={`tasks/save/${cardInfo.id}`}
                className="center"
                // onClick={() => this.deleteCard()}
                // formNoValidate
              >
                Delete
              </button>
              <button
                type="submit"
                id="cancel"
                className="center"
                onClick={() => this.cancel()}
                formNoValidate
              >
                Cancel
              </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Card;
