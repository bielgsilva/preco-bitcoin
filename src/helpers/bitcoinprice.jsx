import axios from '../lib/axios';

const bitcoinprice = async () => {
    try {
        const response = await axios.get('/json/last/BTC-USD');

        const price = response.data.BTCUSD.high;
        const date = response.data.BTCUSD.create_date

        const btc = { price, date };
        
        return btc

    } catch (error) {
        console.error(error);
        throw error; 
    }
};

export default bitcoinprice; 
