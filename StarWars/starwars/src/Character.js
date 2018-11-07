import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Character extends Component {
  // mikor jelenítse meg s mikor ne (?)
  state = {
    name: null,
    image: null
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.selectedChar.name,
      image: nextProps.selectedChar.image
    })
  }

  render() {
    return (
      <div>
        {/* feltételhez kötöm az elemek megjelenítését: 
        akkor jelenítem meg a karakter, ha van név */}
        {this.state.name && <div>
           <h2>{this.state.name}</h2>
           <img src={this.state.image} alt="Char" />
        </div>}
      </div>
    );
  }
}

export default Character;
