import './App.css'
import { Testo } from './components/Testo'
import { Lingua } from './components/Lingua'
import { Traduzione } from './components/Traduzione'
import { Intestazione } from './components/Intestazione'

import { useState } from 'react';
import { lingue } from './data/lingue.js';
import Center from './components/Center'

function App () {
  const [ testo, setTesto ] = useState( '' );
  const [ lingua, setLingua ] = useState( lingue[ 0 ] );
  return (
    <>
      {/* Esempio di utilizzo di useState
        <input type="text" onChange={(e) => setTesto(e.target.value)}/>
        <p>Testo: {testo}</p>
      */}
      <Intestazione />
      <Center>
        <Testo setTesto={setTesto} />
        <Lingua linguaSelezionata={lingua} cambiaLingua={setLingua} />
      </Center>
      <Traduzione testo={testo} lingua={lingua} />
    </>
  );
}

export default App

