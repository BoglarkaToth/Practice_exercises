import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// - index.html-ből hozza a 'root'-ot = <div id="root"></div>
// - és összekapcsolja az <App/>-el az App.js-t (= App componens)
// (az App class a cmponens => App.js-ben: class App extends Component)
// - az <App/> a <> miatt itt egy jsx kód, amit a browser nem ismer apalból =>
// a ReactDOM.render az <App/>-t lefordítja a browser által értelmezhető js és html kóddá,
// és berakja a html-ben már meglévő 'root'-ba:
// - <App/> = az App componens meghívása. mivel az App com egy class, ezért úgy is hívhatnánk,
// h az App compéldányosítsa:
ReactDOM.render(<App propToState="prop vagyok"/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
