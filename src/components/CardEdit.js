import React, { Component } from 'react';

class CardEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'pending'
    };
  }
  render(){
    const cardInfo = this.props.cardInfo;
    return (
      <div className='card' id={cardInfo.id} data-status={this.state.status}>
        <h4>{cardInfo.title}</h4>
        <div>{cardInfo.task}</div>
        <div>Priority: {cardInfo.priority}</div>
        <div className='hover'>Created By: {cardInfo.createdBy}</div>
        <div><label className='hover'>Assigned To:</label>{cardInfo.assignedTo}</div>
      </div>
    )
  }
}

export default Card;