import PropTypes from 'prop-types';
import './Lingua.css';

export function Lingua ( { linguaSelezionata, cambiaLingua } ) {
  return (
    <section className="selezione_lingua">
      <label>Seleziona la lingua</label>
        <ul className='lista-lingue'>
          {LINGUE.map( ( lingua ) => (
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
  linguaSelezionata: PropTypes.string.isRequired,
  cambiaLingua: PropTypes.func.isRequired,
};

const LINGUE = [
  { nome: "Afrikaans", codice: "af" },
  { nome: "Arabo", codice: "ar" },
  { nome: "Francese", codice: "fr" },
  { nome: "Hindi", codice: "hi" },
  { nome: "Inglese", codice: "en" },
  { nome: "Giapponese", codice: "ja" },
  { nome: "Portuguese", codice: "pt" },
  { nome: "Spagnolo", codice: "es" },
];