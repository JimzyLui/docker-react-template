import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {arrPanels, arrCards} from './data';
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