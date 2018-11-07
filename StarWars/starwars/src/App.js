import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ButtonList from './ButtonList';
import Character from './Character';


class App extends Component {
  state = {
    characters: [
      {
        name: 'Darth Vader',
        image: 'https://i.pinimg.com/originals/25/fe/71/25fe71c60949a73ec461b23a4ada32e4.png',
        selected: false
      },
      {
        name: 'Kylo Ren',
        image: 'https://vignette.wikia.nocookie.net/disney/images/5/5b/Lego_Kylo_Ren.png/revision/latest?cb=20151228215545',
        selected: false
      },
      {
        name: 'Yoda',
        image: 'https://vignette.wikia.nocookie.net/legostarwars/images/4/4f/Yoda_LEGO.png/revision/latest?cb=20170828020454',
        selected: false
      },
      {
        name: 'Rey',
        image: 'https://vignette.wikia.nocookie.net/disney/images/2/24/Lego_Rey.png/revision/latest?cb=20151228220917',
        selected: false
      },
    ]
  }

  onClickHandle = (index) => () => {
    this.setState({
      characters: this.state.characters.map((char, charIndex) =>
        ((charIndex === index) ? ({ ...char, selected: true }) : ({ ...char, selected: false }))
      )
    });
  }

  render() {
    return (
      <div>
        <ButtonList onClickFunc={this.onClickHandle} characters={this.state.characters} />
        <Character selectedChar={this.state.characters.find(char => char.selected)}/>
      </div>
    );
  }
}

export default App;
