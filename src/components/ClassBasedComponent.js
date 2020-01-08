import React, { Component } from 'react';

export class ClassBasedComponent extends Component {
  render() {
    return (
      <div>
        <h3>Class-based Component</h3>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default ClassBasedComponent;
