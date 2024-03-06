import { useEffect } from 'react';
import './styles.scss';
import useUser from '../../hooks/useUser';
import Value from './components/Value/Value';
import bitcoinprice from '../../helpers/bitcoinprice';
import Whatapp from './components/Whatsapp/Whatsapp'
import Countdown from './components/Countdown/Countdown';

function App() {
  const { email, setEmail, loading, btcPrice, setBtcPrice, btcDate, setBtcDate, btcName, setBtcName } = useUser();

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const btc = await bitcoinprice();

        setBtcPrice(btc.price);
        setBtcDate(btc.date);
        setBtcName(btc.name);

      } catch (error) {
        console.error(error);
      }
    };

    fetchBitcoinPrice();
  }, [btcPrice, setBtcDate, setBtcPrice, setBtcName]);

  return (
    <div className="container flex-center-column overlay">

      {loading && <h2>Carregando...</h2>}
      {!loading && btcPrice && <Value btcPrice={btcPrice} btcDate={btcDate} btcName={btcName} />}

      <Countdown />
      <Whatapp email={email} setEmail={setEmail} />
    </div>
  );
}

export default App;

