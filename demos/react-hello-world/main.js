// Old school
import React from 'react';
import ReactDOM from 'react-dom';

function Helloworld() {
  return <h1>Hello World</h1>;
}

ReactDOM.render(
  <Helloworld />,
  document.getElementById('uno')
);

// New school
import { createRoot } from 'react-dom/client';

const containerDue = document.getElementById( 'due' );

// Nuova API di React 18
const root = createRoot( containerDue ); // createRoot(container!) if you use TypeScript

// Componente usando una arrow (lambda) function
const Helloworld = () => <h1>Hello World</h1>;


root.render( <Helloworld /> );

