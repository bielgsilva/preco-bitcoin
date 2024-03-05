import './ValueBox.scss';
import PropTypes from 'prop-types';
import { formatDate, formatPrice } from '../../../../helpers/formatStrings';

const ValueBox = ({ btcPrice, btcDate }) => {
  const formattedPrice = formatPrice(btcPrice);
  const formattedDate = formatDate(btcDate);

  return (
    <>
      <div className='box flex-center-column'>
        <h2>O valor máximo de um Bitcoin hoje foi:</h2>
        <h1>{formattedPrice}</h1>
        <h3>Ultima atualização: {formattedDate}</h3>
      </div>
    </>
  );
};

ValueBox.propTypes = {
  btcPrice: PropTypes.string.isRequired,
  btcDate: PropTypes.string.isRequired,
};

export default ValueBox;
