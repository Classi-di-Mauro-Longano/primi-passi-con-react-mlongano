import PropTypes from 'prop-types';

export function Testo ({setTesto}) {
  return (
    <div className="field">
      <input className="input"  placeholder="Inserisci il testo in italiano" onChange={(e) => setTesto(e.target.value)}/>
    </div>

  )
}

Testo.propTypes = {
  setTesto: PropTypes.func.isRequired
};
