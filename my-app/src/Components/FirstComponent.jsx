import React, { Component } from 'react';


export default class FirstComponent extends Component {
    render() {
      return (
        React.createElement("div", {className: "FirstComponent"}, "Say Hello to Your First Component", React.createElement(SecondComponent, null))
      );
    }
  }

export   class SecondComponent extends Component {
    render() {
      return (
        React.createElement("div", {className: "SecondComponent"}, "Say Hello to Your Second Component", React.createElement(Third, null))
      );
    }
  }
  
export  function Third(){
    return (
      <div className="Third">
        Say Hello to Your THIRd Component
      </div>
 );
  }