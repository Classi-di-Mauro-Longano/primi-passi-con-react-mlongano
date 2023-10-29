import './App.css'
import {Testo} from './components/Testo'
import {Lingua} from './components/Lingua'
import {Traduzione} from './components/Traduzione'
import {Intestazione} from './components/Intestazione'

import { useState } from 'react';

function App() {
  const [testo, setTesto] = useState('');
  return (
    <>
      {/* Esempio di utilizzo di useState
        <input type="text" onChange={(e) => setTesto(e.target.value)}/>
        <p>Testo: {testo}</p>
      */}
      <Intestazione />
      <Testo setTesto={setTesto} />
      <Lingua />
      <Traduzione testo={testo} lingua={"italiano"} />
    </>
  );
}

export default App

