import PropTypes from 'prop-types';
import '../APIDownMessage.scss';

const APIDownMessage = () => (
  <>
    <h2>API fora do ar...</h2>
    <h3>Entre em contato com o Desenvolvedor</h3>
  </>
);

APIDownMessage.propTypes = {
  handleNewSearch: PropTypes.func.isRequired,
};

export default APIDownMessage;
