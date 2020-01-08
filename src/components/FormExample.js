import React, { Component } from 'react';

export class FormExample extends Component {
  state = {
    title: '',
    content: '',
    amount: 5
  }

  // change handler
  changeHandler = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({ [name]: value });
  }

  // submit handler
  submitHandler = (e) => {
    e.preventDefault();
    alert(`
      title: ${this.state.title}
      content: ${this.state.content}
      amount: ${this.state.amount}
    `)
  }

  render() {
    const formStyles = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }

    const inputStyles = {
      margin: '15px 0'
    }

    return (
      <div>
        <h3>form example</h3>
        <form onSubmit={this.submitHandler} style={formStyles}>
          <input type="text" name="title" value={this.state.title} onChange={this.changeHandler} style={inputStyles} />
          <input type="text" name="content" value={this.state.content} onChange={this.changeHandler} style={inputStyles} />
          <input 
            defaultValue={5}
            type ="range" 
            name="amount" 
            step={1}
            min={0}
            max={10}
            onChange={this.changeHandler}
            style={inputStyles}
          /><span style={inputStyles}>{this.state.amount}</span>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
};

export default FormExample;
