import './Value.scss';
import PropTypes from 'prop-types';
import { formatDate, formatPrice } from '../../../../helpers/formatStrings';

const Value = ({ btcPrice, btcDate, btcName }) => {
  const formattedPrice = formatPrice(btcPrice);
  const formattedDate = formatDate(btcDate);

  return (
    <>
      <div className='box'>
        <div className="box-value flex-center-column">
          <h2>O valor médio de um Bitcoin hoje foi:</h2>
          <h1>{formattedPrice}</h1>
          <h5>{btcName}</h5>
          <h3>Ultima atualização: {formattedDate}</h3>
        </div>
      </div>
    </>
  );
};

Value.propTypes = {
  btcPrice: PropTypes.string.isRequired,
  btcDate: PropTypes.string.isRequired,
  btcName: PropTypes.string.isRequired,
};

export default Value;
