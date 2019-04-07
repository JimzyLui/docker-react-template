
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/components.css';
import {arrPanels, arrCards} from './components/data';
import Panel from './components/Panel.js';
import Card from './components/Card';
// console.log(arrPanels);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id='main'>
        <h1>KANBAN</h1>
        <button type='submit' id='addTask' onClick='addTask()'>Add Task</button>
        <div className='panels'>
        {
          arrPanels.map(panel=>{
            // console.log(panel.key)
            return(
              <Panel title={panel.key}/>
              )
            })
          }
        </div>
      </div>
    )
  }



  addTask = ()=>{
    const card = new Card();
    card.key = arrCards.reduce((prev, curr) => card.key > curr ? card.key: curr, card.key);

    card.title = 'title';
    card.status='pending';
    card.priority=3;
    card.assignedBy='unknown';
    card.assignedTo='unassigned';
    arrCards.push(card);
  }
}






/*
statusNext = ()=>{
  const status = this.state.status;
  switch (status){
    case 'pending':
      this.setState({ status: 'current' });
      break;
    case 'current':
      this.setState({status: 'done'});
      break;
    default:
    break;
  }
}
statusPrevious = ()=>{
  const status = this.state.status;
  switch (status){
    case 'done':
      this.setState({ status: 'current' });
      break;
    case 'current':
      this.setState({status: 'pending'});
      break;
    default:
    break;
  }
}
*/







export default App;


/*
class App extends Component {
  constructor(props) {
    super(props);

    // properties
    this.state = {
      smoke: '',
      users: [],
      newUser: { username: '' }
    };

    // bindings
    this.smokeTest = this.smokeTest.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.createUser = this.createUser.bind(this);

    // init
    this.smokeTest();
    this.getUsers();
  }

  smokeTest() {
    fetch('/api/smoke')
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        this.setState({ smoke: body.smoke });
      });
  }

  getUsers() {
    fetch('/api/users')
      .then((res) => { return res.json(); })
      .then((body) => {
        this.setState({ users: body });
      });
  }

  updateUser(e) {
    this.setState({ newUser: { username: e.target.value }});
  }

  createUser() {
    const newUser = this.state.newUser;
    const headers = { 'Content-Type': 'application/json' };
    fetch('/api/users', { method: 'POST', body: JSON.stringify(newUser), headers })
      .then((res) => {
        return fetch('/api/users')
          .then((res) => { return res.json(); })
          .then((body) => { this.setState({ users: body }); });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div>
            { this.state.smoke ? this.state.smoke : '' }
          </div>

          <div>
            {
              this.state.users.map((user) => {
                return (
                  <div>
                    { user.username }
                  </div>
                );
              })
            }
          </div>

          <div>
            <label> Create new User: </label>
            <input type="text" value={this.state.newUser.username} onChange={this.updateUser}/>
            <button onClick={this.createUser}>Create User</button>
          </div>

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/






