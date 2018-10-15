import React, { Component } from "react";

// PROPS hívása =>

// CLASS component =>
class EatOneBtn extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClickEat}>
          {this.props.btnText}
        </button>
      </div>
    );
  }
}


// FUNCTION component => inputhoz adni =>
// const EatOneBtn = ({ onClickEat, btnText }) => (
//   <button onClick={onClickEat} >
//     {btnText}
//   </button>
// );


export default EatOneBtn;
