import React, { Component } from 'react';

export class ClickEvent extends Component {
  state ={
    thing: true
  }

  clickHandler = (e) => {
    this.setState({ thing: !this.state.thing })
  }

  render() {
    return (
      <div>
        <h3>click event example</h3>
        <button onClick={this.clickHandler}>click</button>
        <p>{this.state.thing.toString()}</p>
      </div>
    )
  }
};

export default ClickEvent;
