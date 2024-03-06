import PropTypes from 'prop-types';
import './Whatsapp.scss';
import { enviarAtualizações } from '../../../../helpers/enviarAtualizações';

const Whatsapp = ({ email, setEmail }) => {

  const handleEmailChange = (event) => {
    const input = event.target.value;

    setEmail(input);

    // if (input.length <= 14) {
    //   setEmail(input);
    // }
  }

  return (
    <div className="whatsappButton flex-center-column">
      <i className="fa fa-whatsapp"></i>
      <h3>Receber atualizações diárias via WhatsApp</h3>
      <div className='whatsappButton-box flex-center'>
        <input
          type="email"
          name="email"
          placeholder=""
          value={email}
          onChange={handleEmailChange}
          pattern="[0-9]*"
          autoComplete="off"
        />
        <button className="flex-center"
          onClick={() => {
            enviarAtualizações(email);
            setEmail('');
          }}>
          <i className="fa fa-share"></i> Enviar
        </button>
      </div>
    </div>
  );
};

Whatsapp.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
  enviarAtualizações: PropTypes.func,
};

export default Whatsapp;
