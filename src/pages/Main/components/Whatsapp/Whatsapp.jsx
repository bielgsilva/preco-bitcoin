import PropTypes from 'prop-types';
import './Whatsapp.scss';
import { toastSucess } from '../../../../helpers/ToastSuccess';
// import { enviarAtualizações } from '../../../../helpers/enviarAtualizações';


const Whatsapp = ({ phoneNumber, setPhoneNumber, handlePhoneNumberChange, }) => (

  <div className="whatsappButton flex-center-column">
    <i className="fa fa-whatsapp"></i>
    <h3>Receber atualizações diarias vias WhatsApp</h3>
    <div className='whatsappButton-box flex-center'>
      <input
        type="tel"
        name="whatsapp"
        placeholder="(XX) X XXXX-XXXX"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        pattern="[0-9]*"
        autoComplete="off"
      />
      <button className="flex-center"
        onClick={() => {
          // enviarAtualizações(data, phoneNumber);
          toastSucess("Dados de rastreios enviados com sucesso");
          setPhoneNumber('');
        }}>
        <i className="fa fa-share"></i> Enviar
      </button>

    </div>

  </div>

);

Whatsapp.propTypes = {
  data: PropTypes.array.isRequired,
  enviarNumero: PropTypes.func.isRequired,
  phoneNumber: PropTypes.func.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  handlePhoneNumberChange: PropTypes.func.isRequired,
};

export default Whatsapp;
