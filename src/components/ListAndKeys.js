import React, { Component } from 'react';

export class ListAndKeys extends Component {
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) => 
      <li key={number.toString()}>{number}</li>
    )
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    )
  }
}

export default ListAndKeys;
