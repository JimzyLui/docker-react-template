import React, { Component } from 'react';

// import {arrCards} from './data';
import Card from './Card.js';
// const moment = require('moment');

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrCards: []
    };
    this.getTasks = this.getTasks.bind(this);
    this.getTasks();
// console.log('Panel props', props);
    // .then( (arrTasks) => {
    // console.log('initial arrTasks: ', arrTasks.length());
    // // console.log('initial: ', this.state.arrCards);
    // })
  }
  componentDidMount(){
    // this.getTasks();
    console.log('Panel...componentDidMount');
  }
  /*
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }
  */
  getTasks() {
    fetch('/tasks')
    .then((res) => { return res.json() })
    .then((arrTasks) => {
      console.log('getTasks: arrTasks: ', arrTasks);
      console.log('getTasks');
      this.setState({ arrCards: arrTasks });
      console.log('arrCards: ',this.state.arrCards);
      // return arrTasks;
    })
    .catch( error => {
      console.error( 'error:  ' + error.message );
    })
    .then( () => {
      console.log( "I am always called even if the prior then's promise rejects" );
    });
  }

  render(){
    // const panelTitle = this.props;
    // console.log('this.props:************',this.props);
    // console.log('this.props.children: ',this.props.children);
    const panelTitle = this.props.children;
    const {arrCards} = this.state;

    // console.log(arrCards);
    console.log('arrCards rendering..: ', arrCards);
    // console.log('>>>>>>>>>>>>>>>>>',panelTitle);
    return (
      <div title={panelTitle} className='panel'>
        <h2>{panelTitle}</h2>
        <div id={panelTitle} className='content'>
        {
          arrCards
            .filter(card=>
                card.status===panelTitle.toLowerCase()
                // console.log('filtering card', card)
             )
            .map(card=>{
              console.log('card.title: ',card.title);
              return (
                <Card key={card.id}
                cardInfo={card}
                          // title={card.title}
                          // body={card.body}
                          // priority={card.priority}
                          // createdBy={card.createdBy}
                          // assignedTo={card.assignedTo}
                          />
              )
            })
        }
        </div>
      </div>

    );
  }
}


export default Panel;
