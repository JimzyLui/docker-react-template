import React, { Component } from "react";
import Dropdown from "./Dropdown.js";
import { arrPriorities } from "./data";

class KanbanControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "pending"
    };
    this.showForm = this.showForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  showForm() {
    document.getElementById("addForm").style.display = "none";
    document.getElementById("saveForm").style.display = "flex";
    console.log("showForm clicked");
  }
  submitForm() {
    document.getElementById("addForm").style.display = "flex";
    document.getElementById("saveForm").style.display = "none";
    console.log("submitForm clicked");
  }
  render() {
    return (
      <div className="kanbanControl" id="kanbanControl">
        {/* <form action="POST"> */}
        <div id="saveForm">
          <div id="title">
            <label htmlFor="title">Task Name: </label>
            <input type="text" name="title" />
          </div>

          <div id="priority" className="flexRowNoWrap">
            <label htmlFor="priority">Priority: </label>
            <Dropdown
              name="priority"
              choices={arrPriorities}
              defaultValue="3"
            />
          </div>

          <div id="task">
            <label htmlFor="task">Task: </label>
            <textarea name="task" />
          </div>

          <div id="buttonControls" className="buttonControls">
            <button
              type="submit"
              id="saveTask"
              className="center"
              onClick={() => this.submitForm()}
            >
              SAVE
            </button>
            <button
              type="cancel"
              id="cancelAdd"
              className="center"
              onClick={() => this.submitForm()}
            >
              CANCEL
            </button>
          </div>
        </div>
        {/* </form> */}
        <div id="addForm">
          <button type="submit" id="addTask" onClick={() => this.showForm()}>
            Add Task
          </button>
        </div>
      </div>
    );
  }
}

export default KanbanControl;
