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
    <div className="box flex-center-column">
      <i className="fa fa-envelope"></i>
      <h3>Receber atualizações diárias via Email</h3>

      <div className='box-whatsapp flex-center'>
        <input
          type="email"
          name="email"
          placeholder="meunome@email.com"
          value={email}
          onChange={handleEmailChange}
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
