import PropTypes from 'prop-types';
import { findItemByKeyValue, debounce } from '../utils/utils';
import { lingue } from '../data/lingue';

import { useState, useEffect } from 'react';
export function Traduzione({ lingua, testo }) {
  const [traduzione, setTraduzione] = useState(null);
  const [linguaIniziale, setlinguaIniziale] = useState(null);
  const API_KEY = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY;

  useEffect(() => {
    traduci(testo, lingua, API_KEY, setTraduzione, setlinguaIniziale);
  }, [lingua, testo, API_KEY]);

  return (
    <>
      <h2>Testo tradotto in {lingua.nome}</h2>
      {
        traduzione === null
          ? <p>Traduzione in corso...</p>
          : <>
              <p>{traduzione.replace("&#39;", "'")}</p>
              <p>Lingua di partenza: {linguaIniziale}</p>
            </>

      }
    </>
  );
}

const traduci = debounce(
  async (testo, lingua, API_KEY, setTraduzione, setlinguaIniziale) => {
      setTraduzione(null);
      if (!testo || !lingua || !API_KEY || !lingua.codice) {
        return;
      }

    try {
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&q=${testo}&target=${lingua.codice}`,
      );
      const data = await response.json();
        setTraduzione(data.data.translations[0].translatedText);
        const linguaIniziale = findItemByKeyValue("codice",data.data.translations[0].detectedSourceLanguage,lingue);
        if (typeof linguaIniziale === 'object' && linguaIniziale.nome !== undefined ) {
          setlinguaIniziale(linguaIniziale.nome);
          return;
        }
        setlinguaIniziale(linguaIniziale);
      return data.data.translations[0].translatedText;
    } catch (error) {
      console.error(error);
    }
  },
  500,
)


Traduzione.propTypes = {
  lingua: PropTypes.object.isRequired,
  testo: PropTypes.string.isRequired,
};


