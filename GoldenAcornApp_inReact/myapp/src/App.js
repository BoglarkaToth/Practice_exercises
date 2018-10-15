import React, { Component } from "react";
// -> vagy import React from "react"; => class App extends React.Component {..}
import "./App.css";
import EatOneBtn from "./EatOneBtn";

class App extends Component {
  // = a Component miatt lesz az App egy component. onnan örökli
  // state-hez contructor kell
  constructor() {
    super();
    // több state = { akármi: .., valami: .., miegymás: ..}
    // 1. STATE létrehozás (state-et itt hozom létre..más file-ból hívom..) :
    this.state = { acorn: 0, uselessState: "useless state" };
  }

  // 2. STATE beállítás:
  buyOne = () => {
    this.setState({ acorn: this.state.acorn + 1 });
    // vagy a this.setState előtt egy let acorn = this.state.acorn változó => {acorn: acorn + 1}
  };

  // .BIND => az SIMA function() hívásakor a function nem látja a this.-t, ezért .bind-olni kell azt =
  // (arrow function-nél nem kell .bind, mert az arr látja a this-t)
  // - function:
  // buyOne() {
  //   this.setState({ acorn: this.state.acorn + 1 });
  // }
  // - hozzá a html jsx:
  // <button onClick={this.buyOne.bind(this)}>Buy one</button>

  eatOne = () => {
    let acorn = this.state.acorn;
    this.setState({ acorn: acorn > 0 ? acorn - 1 : 0 });
    // => if( acorn > 0 ) { acorn - 1 } else { 0 }
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.buyOne}>Buy one</button>

        {/* 3. STATE meghívás: */}
        <p>{this.state.acorn}</p>

        {/* <button onClick={this.eatOne}>Eat one</button> 
        helyett: */}

        {/* az megy a továbbiakban function-be, amit meg lehet olsani .state nélkül => */}
        {/* - ha a hagyományos html tag-ek helyett componenseket (EatOneBtn) használunk,
        eltűnnek a beépített attributumok (pl onClick), mivel minden,
        amit att-nak (onClickEat) írunk be egy comp-nek, az prop lesz =>
        ezeket a props-okat a comp file-án belül kell definiálni */}
        <EatOneBtn onClickEat={this.eatOne} btnText="Eat one"/>

        <p>{this.state.uselessState}</p>

        {/* PROPS meghívása (más file-ból hívom..state-et itt hozom létre..) : */}
        <p>{this.props.propToState}</p>
      </div>
    );
  }
}

export default App;
