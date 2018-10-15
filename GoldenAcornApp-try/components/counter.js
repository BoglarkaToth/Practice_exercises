import React, { Component } from 'react';
import Button from './Button';
// import Display from './Display';

class Counter extends Component {
  // state = {} helyett (babel verzió probléma miatt):
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleButtons = this.handleButtons.bind(this);
  }

  handleButtons(event) {
    const { count } = this.state;
    console.log(event.target.id); // eslint-disable-line
    console.log('Button Clicked', count); // eslint-disable-line
    if (event.target.id === 'up') {
      this.setState({ count: count + 1 });
    } else if (event.target.id === 'down' && count > 0) {
      this.setState({ count: count - 1 });
    }
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }

  render() {
    return (
      <div>
        <Button clickListener={this.handleButtons} text="Buy one" id="up" />
        {this.formatCount()}
        <Button clickListener={this.handleButtons} text="Eat one" id="down" />
      </div>
    );
  }
}

export default Counter;
