import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export type Crypto = {
  ath: number;
  atl: number;
  current_price: number;
  id: string;
  name: string;
  symbol: string;
  high_24h: number;
  low_24h: number;
};

function App() {
  const [cryptos, setCryptos] = useState<Crypto[] | null>();
  useEffect(() => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
    axios.get(url, {
      headers: {
        "accept": "application/json",
        "x-cg-demo-api-key": "CG-xhxmHbt7eWvXizo8RnmP8Xm2"
      },
    }).then((response) => {
      setCryptos(response.data);
    });
  }, [])


  return (
    <div className="App">{cryptos ?
      cryptos.map((crypto)=>{
        return <p>{crypto.name + ' $' + crypto.current_price}</p>
      }) : null
    }</div>
  );
}

export default App;
