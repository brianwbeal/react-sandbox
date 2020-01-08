import React, { Component } from 'react';

import ClassBasedComponent from './components/ClassBasedComponent.js';
import FunctionalComponent from './components/FunctionalComponent.js';
import StateExample from './components/StateExample.js';
import ClickEvent from './components/ClickEvent.js';
import FormExample from './components/FormExample.js';
import ListAndKeys from './components/ListAndKeys.js';
import Multimedia from './components/Multimedia.js';
// import HooksExample from './components/HooksExample.js';

import './App.css';

class App extends Component {
  render() {

    const numbers = [1,2,3,4,5]

    return (
      <div className="App">
        <div><h1>react</h1></div>
        <ClassBasedComponent text="yes" />
        <FunctionalComponent text="no" />
        <StateExample />
        <ClickEvent />
        <FormExample />
        <ListAndKeys numbers={numbers} />
        <Multimedia />
      </div>
    )
  }
};

export default App;
