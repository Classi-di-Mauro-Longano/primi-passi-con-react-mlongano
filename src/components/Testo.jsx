import PropTypes from 'prop-types';
import './Testo.css';

export function Testo ({setTesto}) {
	return (
		<div className="testo">
			<label htmlFor="testoIniziale">Testo di partenza: </label><input  id='testoIniziale' className="input"  placeholder="Inserisci il testo da tradurre" onChange={(e) => setTesto(e.target.value)}/>
		</div>

	)
}

Testo.propTypes = {
	setTesto: PropTypes.func.isRequired
};
