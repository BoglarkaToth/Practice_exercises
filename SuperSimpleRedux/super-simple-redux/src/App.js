import React from 'react';
import { connect } from 'react-redux';
import { activateGeod, closeGeod } from './redux';

// App.js
// export class App extends React.Component {
  // ha class, akkor this.props...
const App = props => {
  // render() {
    return (
      <div>
        <h1>{props.geod.title || 'Hello World!'}</h1>
        {props.geod.title ? (
          <button onClick={props.closeGeod}>Exit Geod</button>
        ) : (
          <button
            onClick={() =>
              props.activateGeod({ title: 'I am a geo dude!' })
            }
          >
            Click Me!
          </button>
        )}
      </div>
    );
  }
// }

// AppContainer.js
const mapStateToProps = state => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
