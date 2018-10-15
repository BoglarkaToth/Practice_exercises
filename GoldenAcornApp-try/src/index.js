import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../components/counter';

// csak egy ReactDOM lehet egy js-ben ->
// ReactDOM.render(
//   <h1>Hello, Green Fox Academy!</h1>,
//   document.getElementById('root'),
// );

ReactDOM.render(
  <Counter />, document.getElementById('root'),
);
