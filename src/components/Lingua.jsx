import PropTypes from 'prop-types';
import { lingue } from '../data/lingue';
export function Lingua ( { linguaSelezionata, cambiaLingua } ) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 my-4">
      <label className='text-shadow-sm shadow-slate-950'>Seleziona la lingua</label>
      <ul className='flex gap-2'>
          {lingue.map( ( lingua ) => (
            <li
              className={`px-4 py-2 rounded-2xl ${linguaSelezionata.codice === lingua.codice ? "bg-green-500 hover:bg-green-700" : "bg-slate-300 hover:bg-slate-500"} hover:text-gray-50 shadow-md cursor-pointer`}
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