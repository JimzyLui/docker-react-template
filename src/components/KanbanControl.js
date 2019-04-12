import React, { Component } from 'react';

class KanbanControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'pending'
    };
    this.showForm = this.showForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  showForm(){
     document.getElementById('addForm').style.display='none';
     document.getElementById('editForm').style.display='block';
     console.log('showForm clicked');
  }
  submitForm() {
    document.getElementById('addForm').style.display='block';
    document.getElementById('editForm').style.display='none';
    console.log('submitForm clicked');
  }
  render(){
    return (
      <div className='kanbanControl' id='kanbanControl'>
      {/* <form action="POST"> */}
      <div id='editForm'>
        <div id="title">
        <label htmlFor="title">Task Name</label>        <input type="text" name="title"/>
        </div>
        <div id="priority">
        <label htmlFor="priority">Priority</label>        <input type="number" name="priority" defaultValue="3" width='80px' />
        </div>
        <div id="task">
        <label htmlFor="task">Task</label>        <input type="text" name="task"/>
        </div>
        <div id='save'>
          <button
              type='submit'
              id='saveTask'
              className='center'
              onClick={() => this.submitForm()}
              >SAVE</button>
      </div>
      </div>
      {/* </form> */}
      <div id='addForm'>
        <button
            type='submit'
            id='addTask'
            onClick={() => this.showForm()}
            >Add Task</button>
            </div>
      </div>
    )
  }
}

export default KanbanControl;