import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'pending'
    };
  }
  render(){
    return (
      <div class='card' id={this.props.key}>
        <h4>{this.props.title}</h4>
        <div>Priority: {this.props.priority}</div>
        <div>{this.props.body}</div>
        <div>Created By: {this.props.createdBy}</div>
        <div>Assigned To: {this.props.assignedTo}</div>
      </div>
    )
  }
}

export default Card;