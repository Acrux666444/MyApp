import React, { Component } from 'react';
import FirstComponent, {SecondComponent, Third} from './Components/FirstComponent';
import Counter from './Components/Counter/Counter'
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className = "App">
          <Counter/>
      </div>
      );
  }
}

class LastComponent extends Component {
  render() {
    return (
      React.createElement("div", {className: "App"},"MY HELLO WORLD",React.createElement(FirstComponent, null))
      );
  }
}


export default App;
