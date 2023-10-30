import React from 'react';
import ReactDOM from 'react-dom';

function Helloworld() {
  return React.createElement('h1', null, 'Hello, world!');
}

ReactDOM.render(
  React.createElement(Helloworld, null),
  document.getElementById('uno')
);

