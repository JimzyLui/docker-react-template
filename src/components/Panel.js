import React, { Component } from 'react';
import {arrCards} from './data';
import Card from './Card.js';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    const panelTitle = this.props.title;
    // console.log(arrCards);
    return (
      <div title={panelTitle} className='panel'>
        <h2>{panelTitle}</h2>
        <div id={panelTitle} className='content'>
        {
          arrCards
            .filter(card=>
                card.status===panelTitle.toLowerCase()
             )
            .map(card=>{
              console.log('card.title: ',card.title);
              return (
                <Card id={card.key}
                          title={card.title}
                          body={card.body}
                          priority={card.priority}
                          createdBy={card.createdBy}
                          assignedTo={card.assignedTo}
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
