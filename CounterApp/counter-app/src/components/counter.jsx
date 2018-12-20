import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  // this => method hívással ok (átadással nem ok).. megoldás:
  // 1) constructor..bind
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind();
  // }
  // 2) vagy arrow function (bind-ol magától): 
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      < div >
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

}

export default Counter;
