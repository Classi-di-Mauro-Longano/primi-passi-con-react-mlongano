import PropTypes from 'prop-types';

const Center = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

Center.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Center;