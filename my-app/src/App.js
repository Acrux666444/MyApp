import React, { Component } from 'react';
import FirstComponent, {SecondComponent, Third} from './Components/FirstComponent';
import Counter from './Components/Counter/Counter'
import RepeatCounter from './Components/Counter/RepeatCounter'
import Todo, {LoginComponent} from './Components/todo/Todo'
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

 
class App extends Component {
  render() {
    return (
      <div className = "App">

        {/*<RepeatCounter/>*/}
        <Todo/>
         {/* <Counter/> */}
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
