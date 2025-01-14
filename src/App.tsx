import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CryptoSummary from "./components/CryptoSummary";
import { Crypto } from './Types'

function App() {
  const [cryptos, setCryptos] = useState<Crypto[] | null>();
  useEffect(() => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
    axios
      .get(url, {
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-xhxmHbt7eWvXizo8RnmP8Xm2",
        },
      })
      .then((response) => {
        setCryptos(response.data);
      });
  }, []);

  return (
    <div className="App">
      {cryptos
        ? cryptos.map((crypto) => {
          return <CryptoSummary crypto={crypto} />
          })
        : null}
    </div>
  );
}

export default App;
