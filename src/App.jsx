import './App.css'
import {Testo} from './components/Testo'
import {Lingua} from './components/Lingua'
import {Traduzione} from './components/Traduzione'
import {Intestazione} from './components/Intestazione'

function App() {
  return (
    <>
      <Intestazione />
      <Testo />
      <Lingua />
      <Traduzione />
    </>
  );
}

export default App

