import React, { Component } from 'react';
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component{

    constructor(){
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
          <div className = "counter">
            <CounterButton by = {100} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <CounterButton by = {10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <CounterButton by = {2} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <CounterButton by = {1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
            <div className = "countBlock"> 
                <span className = "count">{this.state.counter}</span>
            </div>
            <button className = "reset" onClick = {this.reset}>Reset</button>
          </div>
          );
      }
      reset(){
        this.setState({
            counter: 0
        });
        console.log('reset');
      }

      increment(by) {
        this.setState(
            (prevState) => {
               return  {counter: prevState.counter + by}
            }
        );
        console.log('inceremnt');
    }

    decrement(by) {
        this.setState(
            (prevState) => {
               return  {counter: prevState.counter - by}
            }
        );
        console.log('inceremnt');
    }

}

class CounterButton extends Component{

    render(){
      return (
        <div className = "counterButton">
            <button onClick={() => this.props.incrementMethod(this.props.by)}>{'+' + this.props.by}</button>
            <button onClick={() => this.props.decrementMethod(this.props.by)}>{'-' + this.props.by}</button>
        </div>
      );
    }
}


CounterButton.defaultProps = {
    by: 1
}
CounterButton.propTypes = {
    by: PropTypes.number
}



  

  export default Counter