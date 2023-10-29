import PropTypes from 'prop-types';
import './Lingua.css';
import { lingue } from '../data/lingue';
export function Lingua ( { linguaSelezionata, cambiaLingua } ) {
  return (
    <section className="selezione_lingua">
      <label>Seleziona la lingua</label>
        <ul className='lista-lingue'>
          {lingue.map( ( lingua ) => (
            <li
              className={`btn lingua ${linguaSelezionata.codice === lingua.codice ? "selected" : ""}`}
              key={lingua.codice}
              onClick={() => cambiaLingua( lingua )}
            >
              {lingua.nome}
            </li>
          ) )}
        </ul>
    </section>
  );
}

Lingua.propTypes = {
  linguaSelezionata: PropTypes.object.isRequired,
  cambiaLingua: PropTypes.func.isRequired,
};
