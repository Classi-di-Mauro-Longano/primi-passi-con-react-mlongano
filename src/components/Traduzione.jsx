import PropTypes from 'prop-types';

export function Traduzione({lingua, testo}) {
  return (
    <>
      <h2>Testo tradotto in {lingua.nome}</h2>
      <p>{testo}</p>
    </>
  )
}

Traduzione.propTypes = {
  lingua: PropTypes.string.isRequired,
  testo: PropTypes.string.isRequired
};
