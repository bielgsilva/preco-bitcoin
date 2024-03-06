import { useEffect } from 'react';
import './styles.scss';
import useUser from '../../hooks/useUser';
import ValueBox from './components/ValueBox/ValueBox';
import bitcoinprice from '../../helpers/bitcoinprice';
import Whatapp from './components/Whatsapp/Whatsapp'
import Countdown from './components/Countdown/Countdown';

function App() {
  const { email, setEmail, loading, btcPrice, setBtcPrice, btcDate, setBtcDate } = useUser();

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const btc = await bitcoinprice();


        setBtcPrice(btc.price);
        setBtcDate(btc.date);

      } catch (error) {
        console.error(error);
      }
    };

    fetchBitcoinPrice();
  }, [btcPrice, setBtcDate, setBtcPrice]);

  return (
    <div className="container flex-center-column overlay">

      {loading && <h2>Carregando...</h2>}
      {!loading && btcPrice && <ValueBox btcPrice={btcPrice} btcDate={btcDate} />}

      <Countdown />
      <Whatapp email={email} setEmail={setEmail} />
    </div>
  );
}

export default App;

