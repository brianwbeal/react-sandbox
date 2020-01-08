import React, { Component } from 'react';

export class StateExample extends Component {
  state ={
    thing: true
  }

  render() {
    return (
      <div>
        <h3>state example</h3>
        <p>{this.state.thing.toString()}</p>
      </div>
    )
  }
};

export default StateExample;
