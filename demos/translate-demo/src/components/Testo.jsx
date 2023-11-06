import PropTypes from 'prop-types';
import GtranslateLogo from './svg/GtranslateLogo';

export function Testo ( { setTesto } ) {
  return (
    <div className="relative flex items-center justify-end w-2/3 gap-2 font-serif">
      <label className='text-sm w-fit font-extralight text-shadow-sm shadow-slate-950' htmlFor="testoIniziale">Testo di partenza: </label>
      <input className="p-2 border border-gray-400 rounded-lg grow" id='testoIniziale' placeholder="Inserisci il testo da tradurre" onChange={( e ) => setTesto( e.target.value )} />
      <GtranslateLogo className="absolute w-6 mr-2 text-red-500" />
    </div>
  )
}

Testo.propTypes = {
  setTesto: PropTypes.func.isRequired
};
